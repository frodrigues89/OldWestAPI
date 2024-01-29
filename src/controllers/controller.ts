// src/controllers/controller.ts
// src/controllers/controller.ts
import { Request, Response } from 'express';
import { db } from '../config/dbConfig';
import Pessoa from '../entities/Pessoa';

export const getFiltros = (req: Request, res: Response) => {
  const pessoa = new Pessoa();
  const { pessoa.nome, pessoa.idade, pessoa.altura, peso, faixaEtaria, origem, sexo, sexualidade, foto } = req.body;

  // Certifique-se de validar os dados recebidos antes de utilizá-los na consulta ao banco de dados.

  const consulta = 'SELECT * FROM sua_tabela WHERE coluna_nome = ? AND coluna_idade = ?'; // ajuste conforme suas colunas

  db.query(consulta, [nome, idade], (err, resultados) => {
    if (err) {
      console.error('Erro ao executar consulta no banco de dados:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      res.status(200).json(resultados);
    }
  });
};
