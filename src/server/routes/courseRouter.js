import express from 'express';
import CourseSchema from '../schemas/courseSchema.js';

const courseRouter = express.Router();

courseRouter.get('/attractions', async (req, res) => {
  const { courseName, company } = req.query;
  
  try {
    const attractions = await CourseSchema.find({ courseName, company });
    res.status(200).json(attractions);
  } catch (error) {
    res.status(500).json({ message: "서버 에러" });
  }
});

export default courseRouter;