import express from 'express';
import LostnFoundSchema from './LostnFoundSchema.js';

const router = express.Router();

let currentNo = 22; 

router.get('/', async (req, res) => {

    const page = req.query.page || 1;
    const limit = 5; 
    const skip = (page - 1) * limit;
    const company = req.query.company; 

    let query = {}; 

    if (company) {

        query.company = company;
    }

        const totalLostFoundCount = await LostnFoundSchema.countDocuments(query);
        const totalPages = Math.ceil(totalLostFoundCount / limit);

        const lostnfoundlist = await LostnFoundSchema.find(query, 'no item found date result company').skip(skip).limit(limit);

        res.json({
            lostnfoundlist: lostnfoundlist,
            totalPages: totalPages
        });

});

router.post('/', async (req, res) => {
    const { no, item, found, result, company } = req.body;
    const date = new Date().toISOString().split('T')[0]; 
        const newLostFound = new LostnFoundSchema({ no: currentNo++, item, found, date, result, company });
        await newLostFound.save();
        res.status(201).json({
            ...newLostFound.toObject(), 
            date: date 
        });
});


export default router;
