import AttractionEverlandSchema from "../schemas/attractionEverlandSchema.js";
import AttractionLotteworldSchema from "../schemas/attractionLotteworldSchema.js";
import AttractionSeoullandSchema from "../schemas/attractionSeoullandSchema.js";
import AttractionEverlandExplainSchema from "../schemas/attractionEverlandExplainSchema.js";
import AttractionLotteworldExplainSchema from "../schemas/attractionLotteworldExplainSchema.js";
import AttractionSeoullandExplainSchema from "../schemas/attractionSeoullandExplainSchema.js";

const lotteWorld = async (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	res.statusCode = 200;
	const datas = await AttractionLotteworldSchema.find();
	res.json(datas);
};

const everland = async (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	res.statusCode = 200;
	const datas = await AttractionEverlandSchema.find();
	res.json(datas);
};

const seoulLand = async (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	res.statusCode = 200;
	const datas = await AttractionSeoullandSchema.find();
	res.json(datas);
};


const fetchLotteWorldDetail = async (req, res) => {
	try {
			const { id } = req.params;
			const detail = await AttractionLotteworldExplainSchema.findOne({id: id});
			// console.log("detail: "+detail);
			res.status(200).json(await detail);
	} catch (error) {
			res.status(500).send(error);
			return res.status(404).send({ message: "Attraction not found" });
	}
};

const fetchEverLandDetail = async (req, res) => {
	try {
			const { id } = req.params;
			const detail = await AttractionEverlandExplainSchema.findOne({id: id});
			console.log("detail: "+detail);
			res.status(200).json(await detail);
	} catch (error) {
			res.status(500).send(error);
			return res.status(404).send({ message: "Attraction not found" });
	}
};

const fetchSeoulLandDetail = async (req, res) => {
	try {
			const { id } = req.params;
			const detail = await AttractionSeoullandExplainSchema.findOne({id: id});
			console.log("detail: "+detail);
			res.status(200).json(await detail);
	} catch (error) {
			res.status(500).send(error);
			return res.status(404).send({ message: "Attraction not found" });
	}
};

export { lotteWorld, everland, seoulLand, fetchEverLandDetail, fetchLotteWorldDetail, fetchSeoulLandDetail };