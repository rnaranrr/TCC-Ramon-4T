import { DataTypes } from 'sequelize';
//define tabela com base na classe definida no ./config/database.js
import database from '../config/database.js';

//define classes
const Tag = database.define('tag', {
    tag_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tag_name: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'tag',
    timestamps: false
});

export default Tag;