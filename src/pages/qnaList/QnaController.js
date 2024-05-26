
import QnaSchema from "./QnaSchema.js";




const list =  async (req, res) => {
    const page = req.query.page || 1;
    const limit = 5; 
    const skip = (page - 1) * limit;

        const totalQnaCount = await QnaSchema.countDocuments();
        const totalPages = Math.ceil(totalQnaCount / limit);

        const qnalist = await QnaSchema.find({}, 'no category title  date').skip(skip).limit(limit);
        const searchlist = await QnaSchema.find({}, 'no category title  date');
        
        res.json({
            qnalist: qnalist,
            totalPages: totalPages,
            searchlist : searchlist
        });

};

const post = async (req, res) => {
    const { title, category, content,company } = req.body;
    const date = new Date().toISOString().split('T')[0]; 
    const lastRecord = await QnaSchema.findOne({ company: company }).sort({ no: -1 });
    const currentNo = lastRecord ? lastRecord.no + 1 : 1;
    const newQna = new QnaSchema({ no: currentNo, category, title, content, date,company });
    await newQna.save();

    res.status(201).json({
      ...newQna.toObject(), 
      date: date 
    });
    
   
};



export {list, post}