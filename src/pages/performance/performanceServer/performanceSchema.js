import mongoose from 'mongoose';

const performanceSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
  },
  time: {
    type: String,
    required: true,
  },
  park_name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },  
});

export default mongoose.model('PerformanceSchema', performanceSchema);