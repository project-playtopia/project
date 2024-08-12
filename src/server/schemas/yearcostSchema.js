import { Schema, model } from "mongoose";

const yearCostSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		company: {
			type: String,
			required: true,
		},
		start_at: {
			type: Date,
			required: true,
		},
		end_at: {
			type: Date,
			required: true,
		},
		img: {
			type: String,
		}
	}
)

export default model('YearCostSchema', yearCostSchema);

