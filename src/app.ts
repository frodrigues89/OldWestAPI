// src/app.ts
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';

const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco_de_dados',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL');
  }
});

app.get('/api/resultados', (req: Request, res: Response) => {
  const { parametro1, parametro2 } = req.query;

  // Construa sua consulta com base nos parâmetros recebidos
  const consulta = 'SELECT * FROM sua_tabela WHERE coluna1 = ? AND coluna2 = ?';

  db.query(consulta, [parametro1, parametro2], (err, resultados) => {
    if (err) {
      console.error('Erro ao executar consulta no banco de dados:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      res.status(200).json(resultados);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
