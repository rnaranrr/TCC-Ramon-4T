import { DataTypes } from 'sequelize';
//define tabela com base na classe definida no ./config/database.js
import database from '../config/database.js';

//define classes
const Post = database.define('post', {
    post_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'post.user_id',
        references: {
            model: 'user',
            key: 'user_id'
        }
    },
    post_title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    post_content: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    raffle_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'post.raffle_id',
        references: {
            model: 'raffle',
            key: 'raffle_id'
        }
    },
    post_status: {
        type: DataTypes.ENUM('default', 'in_analysis', 'restored', 'banned'),
        defaultValue: 'default',
        allowNull: false
    },
    is_nsfw: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        field: 'post.is_nsfw' // Mapeamento correto para o nome literal do banco
    },
    deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'post',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
});

export default Post;