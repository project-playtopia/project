import { Schema, model } from 'mongoose';

const benefitSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		company:{
			type: String,
			required: true,
		},
		start_at:{
			type: Date,
			required: true,
		},
		end_at:{
			type: Date,
			required: true,
		},
		benefit_type: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		img: {
			type: String,
		},
	}
);

export default model("BenefitSchema", benefitSchema);