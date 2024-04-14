import { Schema, model } from 'mongoose';

const benefitLotteworldSchema = new Schema(
	{
		title: {
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
		}
	}
);

export default model("BenefitLotteworldSchema", benefitLotteworldSchema);