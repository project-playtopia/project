import express from 'express';
import LostnFoundExplainShema from './LostnFoundExplainShema.js';

const router = express.Router();

router.get('/', async (req, res) => {

        const LostnFoundExplain = await LostnFoundExplainShema.find({}, 'no item found date result company img');

        res.json({
            LostnFoundExplain: LostnFoundExplain
        });
    
});




export default router;
