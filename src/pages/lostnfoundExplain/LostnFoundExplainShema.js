
import { Schema, model } from "mongoose";


const LostnFoundExplainShema = new Schema({
    no: Number,
    item: String,
    found: String,
    date: String,
    result : String,
    company : String,
    img: String
});


export default model("lostnfoundexplaindata", LostnFoundExplainShema);