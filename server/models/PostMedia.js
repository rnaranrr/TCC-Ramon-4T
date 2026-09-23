import { DataTypes } from 'sequelize';
//define tabela com base na classe definida no ./config/database.js
import database from '../config/database.js';

//define classes
const PostMedia = database.define('post_media', {
    media_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'media.post_id',
        references: {
            model: 'post',
            key: 'post_id'
        }
    },
    media_type: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    media_url: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
}, {
    tableName: 'post_media',
    timestamps: false
});

export default PostMedia;