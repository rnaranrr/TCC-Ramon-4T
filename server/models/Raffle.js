import { DataTypes } from 'sequelize';
//define tabela com base na classe definida no ./config/database.js
import database from '../config/database.js';

//define classes
const Raffle = database.define('raffle', {
    raffle_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    raffle_title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    raffle_content: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'raffle',
    timestamps: false
});

export default Raffle;