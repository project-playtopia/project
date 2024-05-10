

import mongoose from 'mongoose';

const performanceSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  performances: [
    {
      parkName: String,
      time: String,
      performanceName: String,
      location: String,
      image: String,
    },
  ],
});

const Performance = mongoose.model('Performance', performanceSchema);

module.exports = Performance;