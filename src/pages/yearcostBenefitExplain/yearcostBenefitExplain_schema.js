import { Schema, model } from "mongoose";

const yearCostBenefitExplainSchema = new Schema(
	{
		ref_id: {
			type: Schema.Types.ObjectId,
			ref: 'YearCostSchema',
			unique: true,
		},
		contents: {
			type: Array,
			default: [],
		},
		description: {
			type: String,
		},
	}
)

export default model("YearCostBenefitExplainSchema", yearCostBenefitExplainSchema);