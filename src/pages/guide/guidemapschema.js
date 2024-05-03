import { Schema, model } from "mongoose";

const guidemapSchema = new Schema({
  id:Number,
  attraction: [{ title: String, content: String }],
  startTime: String,
  endTime: String
});



export default model('GuideMapSchema', guidemapSchema);;