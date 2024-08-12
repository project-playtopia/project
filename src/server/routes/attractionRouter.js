import express from 'express';
import { lotteWorld, everland, seoulLand, fetchEverLandDetail, fetchLotteWorldDetail, fetchSeoulLandDetail } from '../controller/attractionController.js';

const attractionRouter = express.Router();

attractionRouter.post('/lotteworld', lotteWorld);
attractionRouter.post('/everland', everland);
attractionRouter.post('/seoulland', seoulLand);

attractionRouter.get('/lotteworld/explain/:id', fetchLotteWorldDetail);
attractionRouter.get('/everland/explain/:id', fetchEverLandDetail);
attractionRouter.get('/seoulland/explain/:id', fetchSeoulLandDetail);

export default attractionRouter;