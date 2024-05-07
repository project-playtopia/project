import LotteWorld from '../schemas/lotteWorldSchemas.js'
import EverLand from '../schemas/everLandSchemas.js';
import SeoulLand from '../schemas/seoulLandSchemas.js';

const lotteWorld = async (req, res) => {
    // 요청이 들어왔을 때 모든 데이터를 뿌린다.
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.statusCode = 200;
    // 몽구스 스키마 전체 조회
    const datas = await LotteWorld.find();
    res.json(datas)  
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

export { lotteWorld, everland, seoulLand };