import express from 'express';
import LostnFoundSearchSchema from './LostnFoundSearchSchema.js';

const router = express.Router();

router.get('/', async (req, res) => {

        const LostnFoundSearch= await LostnFoundSearchSchema.find({}, 'no item  date  company ');

        res.json({
            LostnFoundSearch: LostnFoundSearch
        });
    
});

router.post('/', async (req, res) => {
    const { item, company } = req.body;
    const date = new Date().toISOString().split('T')[0]; 
        const newlfs = new LostnFoundSearchSchema({ no, item, company, date }); 
        await newlfs.save();
        res.status(201).json({
            ...newQna.toObject(), 
            date: date 
        });
   
});


export default router;
