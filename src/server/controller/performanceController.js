import PerformanceSchema from '../schemas/performanceSchema.js';

const listByDate = async (req, res) => {
  // console.log(req);
  const {date} = req.query;
  res.json(await PerformanceSchema.find({date: date}));
}

export {listByDate};