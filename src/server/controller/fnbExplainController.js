import FnbExplainSchema from '../schemas/fnbExplainSchema.js'

const findInfo = async (req, res) => {
	const { fnbId } = req.query;
	const data = await FnbExplainSchema.findOne({ref_id: fnbId}).lean();
	console.log(data);
	res.json(data);
};

export { findInfo };