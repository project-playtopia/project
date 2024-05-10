import express from 'express';
import QnaExplainShema from './QnaExplainShema.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const qnaexplain = await QnaExplainShema.find({}, 'no title content name');

        res.json({
            qnaexplain: qnaexplain
        });
    } catch (error) {
        console.error('router get', error);
        res.status(404).json({ error: 'router get' });
    }
});




export default router;
