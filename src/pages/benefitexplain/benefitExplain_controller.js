import BenefitInfoSchema from './benefit_explain_shema.js';

const findInfo = async (req, res) => {
	console.log(req.query);
	const { benefitId }	= req.query;
	const data = await BenefitInfoSchema.findOne({ref_id: benefitId}).lean();
	res.json(data);
}

export { findInfo };