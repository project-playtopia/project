import YearCostBenefitSchema from './yearCostBenefitSchema.js';

const list = async (req, res) => {
	console.log(res.query);
	const { company } = req.query;
	res.json(
		await YearCostBenefitSchema.find({company: company})
	);
}

const find = async (req, res) => {
	const { itemId } = req.query;
	res.json(
		await YearCostBenefitSchema.findById(itemId)
	)
}

export { list, find };