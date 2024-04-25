
import { Schema, model } from "mongoose";


const FaqExplainSchema = new Schema({
    no: Number,
    title: String,
    content: String
});


export default model("FaqExplainDatas", FaqExplainSchema);