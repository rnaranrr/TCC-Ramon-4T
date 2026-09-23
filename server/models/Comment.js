import { DataTypes } from 'sequelize';
//define tabela com base na classe definida no ./config/database.js
import database from '../config/database.js';

//define classes
const Comment = database.define('comment', {
    comment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'comment.post_id',
        references: {
            model: 'post',
            key: 'post_id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'comment.user_id',
        references: {
            model: 'user',
            key: 'user_id'
        }
    },
    comment_content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
        deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'comment',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
});

export default Comment;