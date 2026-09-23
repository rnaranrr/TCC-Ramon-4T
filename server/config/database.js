import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

//define classe sequelize
const sequelize = new Sequelize(
    //passa banco pra classe com parametros do .env
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false
    }
);
//exporta classe
export default sequelize;