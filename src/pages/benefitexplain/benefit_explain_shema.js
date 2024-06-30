import { Schema, model } from "mongoose";

const benefitInfoSchema = new Schema(
	{
		ref_id:{
			type: Schema.Types.ObjectId,
			ref: 'benefitSchema',
		},
		contents:{
			type: Array,
			default: [],
		},
	}
)

export default model("BenefitInfoSchema", benefitInfoSchema);