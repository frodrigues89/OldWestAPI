"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mysql_1 = __importDefault(require("mysql"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
const db = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'seu_banco_de_dados',
});
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
    else {
        console.log('Conectado ao banco de dados MySQL');
    }
});
app.get('/api/resultados', (req, res) => {
    const { parametro1, parametro2 } = req.query;
    // Construa sua consulta com base nos parâmetros recebidos
    const consulta = 'SELECT * FROM sua_tabela WHERE coluna1 = ? AND coluna2 = ?';
    db.query(consulta, [parametro1, parametro2], (err, resultados) => {
        if (err) {
            console.error('Erro ao executar consulta no banco de dados:', err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
        else {
            res.status(200).json(resultados);
        }
    });
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
