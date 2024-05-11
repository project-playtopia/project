import express from 'express';
import mongoose from 'mongoose';
import courseSchema from './courseSchema.js';

const router = express.Router();

router.get('/attractions', async (req, res) => {
  const { courseName, company } = req.query;
  
  try {
    const attractions = await courseSchema.find({ courseName, company });
    res.status(200).json(attractions);
  } catch (error) {
    res.status(500).json({ message: "서버 에러" });
  }
});

export default router;