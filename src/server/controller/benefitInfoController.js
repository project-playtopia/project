import BenefitInfoSchema from '../schemas/benefitInfoSchema.js';

const findInfo = async (req, res) => {
	// console.log(req.query);
	const { benefitId }	= req.query;
	const data = await BenefitInfoSchema.findOne({ref_id: benefitId}).lean();
	// console.log(data);
	res.json(data);
}

export { findInfo };