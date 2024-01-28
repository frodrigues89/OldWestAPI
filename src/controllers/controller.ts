// src/controllers/controller.ts
import { Request, Response } from 'express';
import { db } from '../config/dbConfig';

export const getResultados = (req: Request, res: Response) => {
  const { parametro1, parametro2 } = req.query;

  const consulta = 'SELECT * FROM sua_tabela WHERE coluna1 = ? AND coluna2 = ?';

  db.query(consulta, [parametro1, parametro2], (err, resultados) => {
    if (err) {
      console.error('Erro ao executar consulta no banco de dados:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      res.status(200).json(resultados);
    }
  });
};
