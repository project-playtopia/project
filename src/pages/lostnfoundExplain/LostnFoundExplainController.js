import LostnFoundExplainShema from "./LostnFoundExplainShema.js";

const list = async (req, res) => {

    const LostnFoundExplain = await LostnFoundExplainShema.find({}, 'no item found date result company img');

    res.json({
        LostnFoundExplain: LostnFoundExplain
    });

};

const post = async (req, res) => {
    const { item, found, result, company } = req.body;
    const date = new Date().toISOString().split('T')[0]; 

    try {
        const lastRecord = await LostnFoundExplainShema.findOne({ company: company }).sort({ no: -1 });
        const currentNo = lastRecord ? lastRecord.no + 1 : 1;
        const newLostFoundExplain = new LostnFoundExplainShema({ no: currentNo, item, found, date, result, company });
        await newLostFoundExplain.save();

        res.status(201).json({
            ...newLostFoundExplain.toObject(), 
            date: date 
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};



export {list,post}
