import FnbSchema from '../schemas/fnbSchema.js';

const list = async (req, res) => {
	// console.log(req.query);
	const { company, fnb_type } = req.query;
	try{
		res.json(
			await FnbSchema.find({company: company, fnb_type: fnb_type})
		);
	}catch(err){
		res.json(
			await FnbSchema.find({company: company})
		);
	}
	
}

const find = async (req, res) => {
	const { fnbId } = req.query;
	res.json(await FnbSchema.findOne({_id: fnbId}));
}

export { list, find };