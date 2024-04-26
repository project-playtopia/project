

import mongoose from 'mongoose';

const performanceSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  time: { 
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  parkName: { 
    type: String,
    required: true,
  },
  performanceName: { 
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  }
});

const Performance = mongoose.model('Performance', performanceSchema);

export default Performance;
