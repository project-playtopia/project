import { Schema, model } from "mongoose";

const LotteworldSchema = new Schema({
  id:{type : String, unique : true, required : true},
  title:{type:String, required:true},
  location : {type:String, required:true}
})

export default model("AttractionLotteworldSchema", LotteworldSchema);