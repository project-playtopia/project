import { Schema, model } from "mongoose";

const seoulLandSchema = new Schema({
  id:{type : String, unique : true, required : true},
  title:{type:String, required:true},
  location : {type:String, required:true}
})

export default model("AttractionSeoulLandSchemas", seoulLandSchema);