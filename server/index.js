import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// banco
import { database } from './models/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota de teste
app.get('/', (req, res) => {
    res.json({ message: 'API rodando' });
});

// Autenticar no banco de dados e sincronizar as tabelas
async function startServer() {
    try {
        // 1. Testa a conexão com o banco MySQL
        await database.authenticate();
        console.log('Conexão com o banco MySQL estabelecida com sucesso.');

        // 2. Cria/sincroniza todas as tabelas e relacionamentos
        await database.sync({ force: false }); 
        console.log('Todas as tabelas foram criadas/sincronizadas com sucesso!');

        // 3. Inicia o servidor HTTP
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao conectar ou sincronizar o banco de dados:', error);
    }
}

startServer();