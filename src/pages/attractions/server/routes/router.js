import express from 'express'
import { everland, lotteWorld, seoulLand } from '../controller/controller.js';

const router = express.Router();
// 경로가 들어왔을때, 함수를 보여줘
// 라우팅을 가로채어 localhost:8000/attractions/작성한 라우팅
// 라우팅을 가로채어 localhost:8000/attractions/lotteWorld
// 어떤 요청으로 어떤 경로에 요청하면 어떤걸 보여주겠다.
// router.어떤요청('/어떤 경로', 어떤걸)
router.post('/lotteWorld', lotteWorld);
router.post('/everland', everland);
router.post('/seoulLand', seoulLand);


export default router;