import FnbExpalinSchema from './fnbExplain_schema.js';

const findInfo = async (req, res) => {
	const { fnbId } = req.query;
	const data = await FnbExpalinSchema.findOne({ref_id: fnbId}).lean();
	console.log(data);
	res.json(data);
};

export { findInfo };