import { Schema, model } from "mongoose";

const giftshopSchma = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		company: {
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
		}
	}
);

export default model("GiftshopSchema", giftshopSchma);