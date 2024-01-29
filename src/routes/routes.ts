// src/routes/routes.ts
import express from 'express';
import { getFiltros as getRetorno } from '../controllers/controller';

const router = express.Router();

router.get('/api/Retorno', getRetorno);

export default router;
