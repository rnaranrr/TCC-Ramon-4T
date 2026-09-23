import { DataTypes } from 'sequelize';
//define tabela com base na classe definida no ./config/database.js
import database from '../config/database.js';

//define classes
const DirectMessage = database.define('chat', {
    chat: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    chat_send_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'user_id'
        }
    },
    chat_receiver_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'user_id'
        }
    },
    chat_message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    chat_data: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'direct_message',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
});

export default DirectMessage;