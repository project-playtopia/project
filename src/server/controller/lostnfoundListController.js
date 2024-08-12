import LostnFoundSchema from "../schemas/LostnFoundSchema.js";

let currentNo = 22; 

const list =  async (req, res) => {

    const page = req.query.page || 1;
    const limit = 5; 
    const skip = (page - 1) * limit;
    const company = req.query.company; 

    let query = {}; 

    if (company) {
        query.company = company;
    }

    try{
        const totalLostFoundCount = await LostnFoundSchema.countDocuments(query);
        const totalPages = Math.ceil(totalLostFoundCount / limit);
    
        const lostnfoundlist = await LostnFoundSchema.find(query, 'no item found date result company').skip(skip).limit(limit);
        const searchlostn = await LostnFoundSchema.find({}, 'no item found date result company');
        
        res.json({
            lostnfoundlist: lostnfoundlist,
            totalPages: totalPages,
            searchlostn : searchlostn
        });
    }catch(error){
        res.status(404).json({message: error.message});
    }


};

const listAll = async (req, res) => {
    try {
        const lostnfoundlist = await LostnFoundSchema.find({}, 'no item found date result company');
        res.json({ lostnfoundlist });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const post =  async (req, res) => {
    const { item, found, result, company } = req.body;
    const date = new Date().toISOString().split('T')[0]; 
    try {
        const lastRecord = await LostnFoundSchema.findOne({ company: company }).sort({ no: -1 });
        const currentNo = lastRecord ? lastRecord.no + 1 : 1;
        const newLostFound = new LostnFoundSchema({ no: currentNo, item, found, date, result, company });
         await newLostFound.save();

        res.status(201).json({
            ...newLostFound.toObject(),
            date: date
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const update = async (req, res) => {
    const { no, company, result } = req.body;

    try {
        const updatedItem = await LostnFoundSchema.findOneAndUpdate(
            { no: no, company: company },
            { result: result },
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ message: '데이터 없음' });
        }

        res.json(updatedItem);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export {list, post, listAll, update}
