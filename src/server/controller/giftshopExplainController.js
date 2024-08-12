import GiftshopExplainSchma from '../schemas/giftshopExplainSchema.js';

const findInfo = async (req, res) => {
	const { giftshopId } = req.query;
	res.json(await GiftshopExplainSchma.findOne({ref_id: giftshopId}));
}

export { findInfo };