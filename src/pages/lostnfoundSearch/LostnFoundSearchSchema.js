
import { Schema, model } from "mongoose";


const LostnFoundSearchSchema = new Schema({
    no: Number,
    item: String,
    date: String,
    company : String
});


export default model("lostnfoundsearchdata", LostnFoundSearchSchema);