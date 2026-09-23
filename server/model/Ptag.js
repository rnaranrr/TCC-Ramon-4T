import { DataTypes } from 'sequelize';
//define tabela com base na classe definida no ./config/database.js
import database from '../config/database.js';

//define classes
const Ptag = database.define('ptag', {
    ptag_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'ptag.post_id',
        references: {
            model: 'post',
            key: 'post_id'
        }
    },
    tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'ptag.tag_id',
        references: {
            model: 'tag',
            key: 'tag_id'
        }
    }
}, {
    tableName: 'ptag',
    timestamps: false
});

export default Ptag;