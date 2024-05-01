import BenefitSchema from './benefit_schema.js';

const list = async (req, res) => {
	console.log(req.query); // 쿼리스트링 확인
	const {company, filter} = req.query;

	if(filter !== "all"){
		try{
			res.json(
				await BenefitSchema.find({company: company, benefit_type: filter}));
		}catch(err){
			res.json(await BenefitSchema.find({company: company}));
		}
	}else{
		res.json(await BenefitSchema.find({company: company}));
	}
}

const find = async (req, res)	=> {
	const { benefitId } = req.query;
	res.json(await BenefitSchema.findOne({_id: benefitId}));
}

export { list, find };
