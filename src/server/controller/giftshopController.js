import GiftshopSchema from "../schemas/giftshopSchema.js";

const list = async (req, res) => {
	console.log(req.query);
	const { company, location } = req.query;
	switch(location){
		case 'all':
			res.json(await GiftshopSchema.find({company: company}));
			break;
		case '1F':
			res.json(
				await GiftshopSchema.find({$and: [
					{company: company},
					{location: "어드벤처1층"}
				]})
			);
			break;
		case '2F':
			res.json(
				await GiftshopSchema.find({$and: [
					{company: company},
					{location: "어드벤처2층"}
				]})
			);
			break;
		case '4F':
			res.json(
				await GiftshopSchema.find({$and: [
					{company: company},
					{location: "어드벤처4층"}
				]})
			);
			break;
		case 'magic':
			res.json(
				await GiftshopSchema.find({$and: [
					{company: company},
					{location: "매직아일랜드"}
				]})
			);
			break;
		case 'B1F':
			res.json(
				await GiftshopSchema.find({$and: [
					{company: company},
					{$or: [
						{location: "언더랜드B1층"},
						{location: "쇼핑몰B1층"}
					]}
				]})
			);
			break;
		default:
			res.json(
				await GiftshopSchema.find({$and: [
					{company: company},
					{location: location}]
				})
			);
			break;
	};
}

const find = async (req, res) => {
	const {giftshopId} = req.query;
	res.json(await GiftshopSchema.findById(giftshopId));
}

export {list, find};