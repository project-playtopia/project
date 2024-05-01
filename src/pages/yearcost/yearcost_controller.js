import YearCostBenefitSchema from './yearCostBenefitSchema.js';

const list = async (req, res) => {
	console.log(res.query);
	const { company } = req.query;
	res.json(
		await YearCostBenefitSchema.find({company: company})
	);
}

export { list };