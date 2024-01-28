// src/routes/routes.ts
import express from 'express';
import { getResultados } from '../controllers/controller';

const router = express.Router();

router.get('/api/resultados', getResultados);

export default router;
