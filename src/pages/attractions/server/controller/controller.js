import LotteWorld from '../schemas/lotteWorldSchemas.js'
import EverLand from '../schemas/everLandSchemas.js';
import SeoulLand from '../schemas/seoulLandSchemas.js';
import AttractionLotteWorldExplain from '../schemas/lotteWorldExplainSchemas.js';
import AttractionEverLandExplainSchemas from '../schemas/everLandExplainSchemas.js'; 
import AttractionSeoulLandExplainSchemas from '../schemas/seoulLandExplainSchemas.js'; 

const lotteWorld = async (req, res) => {
    // 요청이 들어왔을 때 모든 데이터를 뿌린다.
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.statusCode = 200;
    // 몽구스 스키마 전체 조회
    const datas = await LotteWorld.find();
    res.json(datas);
};

const everland = async (req, res) => {
    // 요청이 들어왔을 때 모든 데이터를 뿌린다.
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.statusCode = 200;
    const datas = await EverLand.find();
    res.json(datas)  
};

const seoulLand = async (req, res) => {
    // 요청이 들어왔을 때 모든 데이터를 뿌린다.
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.statusCode = 200;
    const datas = await SeoulLand.find();
    res.json(datas)  
};


// controller.js

const fetchLotteWorldDetail = async (req, res) => {
    try {
        const { id } = req.params; // URL로부터 id를 추출합니다.
        const detail = await AttractionLotteWorldExplain.findOne({id: id}); // LotteWorld 모델을 사용하여 ID에 해당하는 문서를 조회합니다.
        console.log("detail: "+detail);
        res.status(200).json(await detail);
    } catch (error) {
        res.status(500).send(error);
        return res.status(404).send({ message: "Attraction not found" });
    }
};

const fetchEverLandDetail = async (req, res) => {
    try {
        const { id } = req.params; // URL로부터 id를 추출합니다.
        const detail = await AttractionEverLandExplainSchemas.findOne({id: id}); // LotteWorld 모델을 사용하여 ID에 해당하는 문서를 조회합니다.
        console.log("detail: "+detail);
        res.status(200).json(await detail);
    } catch (error) {
        res.status(500).send(error);
        return res.status(404).send({ message: "Attraction not found" });
    }
};

const fetchSeoulLandDetail = async (req, res) => {
    try {
        const { id } = req.params; // URL로부터 id를 추출합니다.
        const detail = await AttractionSeoulLandExplainSchemas.findOne({id: id}); // LotteWorld 모델을 사용하여 ID에 해당하는 문서를 조회합니다.
        console.log("detail: "+detail);
        res.status(200).json(await detail);
    } catch (error) {
        res.status(500).send(error);
        return res.status(404).send({ message: "Attraction not found" });
    }
};

export {
   lotteWorld,
    everland,
    seoulLand,
    fetchLotteWorldDetail,
    fetchEverLandDetail,
    fetchSeoulLandDetail
  };





