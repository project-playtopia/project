import { Schema, model } from "mongoose";

const LotteWorldSchema = new Schema({
  id:{type : String, unique : true, required : true},
  title:{type:String, required:true},
  description:{type:String},
  location : {type:String, required:true}
})

export default model("LotteWorld", LotteWorldSchema);