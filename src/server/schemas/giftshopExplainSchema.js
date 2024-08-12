import { Schema, model } from "mongoose";

const giftshopExplainSchema = new Schema(
	{
		ref_id: {
			type: Schema.Types.ObjectId,
			ref: 'giftshopSchema',
			unique: true,
		},
		main_product: {
			type: String,
		},
		time: {
			type: String,
		},
		phone_num: {
			type: String,
		},
		guide: {
			type: String,
		},
		img: {
			type: String,
		}
	}
);

export default model("GiftshopExplainSchema", giftshopExplainSchema);