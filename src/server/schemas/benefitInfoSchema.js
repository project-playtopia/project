import { Schema, model } from "mongoose";

const benefitInfoSchema = new Schema(
	{
		ref_id:{
			type: Schema.Types.ObjectId,
			ref: 'benefitSchema',
			unique: true,
		},
		contents:{
			type: Array,
			default: [],
		},
		title:{
			type: String,
			required: true,
		},
		start_at:{
			type: String,
			required: true,
		},
		end_at:{
			type: String,
			required: true,
		},
		description: {
			type: String,
		}
	}
)

export default model("BenefitInfoSchema", benefitInfoSchema);