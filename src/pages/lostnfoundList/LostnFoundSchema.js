
import { Schema, model } from "mongoose";


const LostnFoundSchema = new Schema({
    no: Number,
    item: String,
    found: String,
    date: String,
    result : String,
    company : String
});


export default model("lostnfounddata", LostnFoundSchema);