import { DataTypes } from 'sequelize';
//define tabela com base na classe definida no ./config/database.js
import database from '../config/database.js';

//define classes
const Follow = database.define('follow', {
    follow_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    follower_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'user_id'
        }
    },
    following_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'user_id'
        }
    }
}, {
    tableName: 'follow',
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: false
});

export default Follow;