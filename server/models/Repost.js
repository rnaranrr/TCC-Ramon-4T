import { DataTypes } from 'sequelize';
//define tabela com base na classe definida no ./config/database.js
import database from '../config/database.js';

//define classes
const Repost = database.define('repost', {
    repost_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'repost.post_id',
        references: {
            model: 'post',
            key: 'post_id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'repost.user_id',
        references: {
            model: 'user',
            key: 'user_id'
        }
    }
}, {
    tableName: 'repost',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
});

export default Repost;