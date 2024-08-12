import { Schema, model } from "mongoose";

const fnbSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		company: {
			type: String,
			required: true,
		},
		fnb_type: {
			type: String,
			required: true,
		},
		location: {
			type: String,
		},
		img: {
			type: String,
		},
		description: {
			type: String,
		},
	}
);

export default model("FnbSchema", fnbSchema);