import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  id:{type : Number},
  company: {type : String},
  courseName: {type : String},
  attractionName  :{type : String},
  img : {type : String},
  height : {type : String}
});



export default model('courseSchema', courseSchema);