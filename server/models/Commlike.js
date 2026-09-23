import { DataTypes } from 'sequelize';
//define tabela com base na classe definida no ./config/database.js
import database from '../config/database.js';

//define classes
const Commlike = database.define('commlike', {
    commlike_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'commlike.comment_id',
        references: {
            model: 'comment',
            key: 'comment_id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'commlike.user_id',
        references: {
            model: 'user',
            key: 'user_id'
        }
    }
}, {
    tableName: 'commlike',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
});

export default Commlike;