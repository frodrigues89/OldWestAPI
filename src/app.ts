// src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
import resultadosRoutes from './routes/resultadosRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(resultadosRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
