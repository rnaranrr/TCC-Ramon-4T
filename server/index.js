import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
//importa conexão com o banco
import sequelize from './config/database.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota de teste
app.get('/', (req, res) => {
    res.json({ message: 'API rodando' });
});

// Autenticar no banco de dados antes de subir o servidor
async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco MySQL estabelecida');
        
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao conectar no banco de dados:', error);
    }
}

startServer();