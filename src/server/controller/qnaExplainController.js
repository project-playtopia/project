import QnaExplainShema from '../schemas/qnaExplainSchema.js'

const list = async (req, res) => {
    try {
        const qnaexplain = await QnaExplainShema.find({}, 'no title content name');

        res.json({
            qnaexplain: qnaexplain
        });
    } catch (error) {
        console.error('router get', error);
        res.status(404).json({ error: 'router get' });
    }
};

const post = async (req, res) => {
    const { title, name, content,company } = req.body;
    const date = new Date().toISOString().split('T')[0]; 
    const lastRecord = await QnaExplainShema.findOne({ company: company }).sort({ no: -1 });
    const currentNo = lastRecord ? lastRecord.no + 1 : 1;
    const newQnaExplain = new QnaExplainShema({ no: currentNo, name, title, content, company });
    await newQnaExplain.save();

    res.status(201).json({
      ...newQnaExplain.toObject(), 
      date: date 
    });
    
   
};


export {list,post}