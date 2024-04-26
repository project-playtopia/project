
import { Schema, model } from "mongoose";


const FaqSchema = new Schema({
    no: Number,
    title: String,
    content: String,
    date: String
});


export default model("faqdatas", FaqSchema);