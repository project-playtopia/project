
import mongoose from 'mongoose';

const performanceSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  performances: [{
    id: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    parkName: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    performanceName: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  }]
});





export const Performance = mongoose.model('Performance', performanceSchema);