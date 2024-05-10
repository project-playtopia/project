import express from 'express';
import QnaSchema from './QnaSchema.js';

const router = express.Router();

let currentNo = 22; 

router.get('/', async (req, res) => {
    const page = req.query.page || 1;
    const limit = 5; 
    const skip = (page - 1) * limit;

        const totalQnaCount = await QnaSchema.countDocuments();
        const totalPages = Math.ceil(totalQnaCount / limit);

        const qnalist = await QnaSchema.find({}, 'no title content date').skip(skip).limit(limit);

        res.json({
            qnalist: qnalist,
            totalPages: totalPages
        });

});

router.post('/', async (req, res) => {
    const { title, content } = req.body;
    const date = new Date().toISOString().split('T')[0]; 
        const newQna = new QnaSchema({ no: currentNo++, title, content, date }); 
        await newQna.save();
        res.status(201).json({
            ...newQna.toObject(), 
            date: date 
        });
   
});

export default router;
