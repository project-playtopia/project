import YearCostBenefitExplainSchema from "./yearcostBenefitExplain_schema.js";

const find = async (req, res) => {
	console.log(req.query);
	const { itemId } = req.query;
	res.json(
		await YearCostBenefitExplainSchema.findOne({ref_id: itemId})
	);
}

export { find };