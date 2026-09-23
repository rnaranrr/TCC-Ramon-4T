import { DataTypes } from 'sequelize';
//define tabela com base na classe definida no ./config/database.js
import database from '../config/database.js';

//define classes
const Report = database.define('reports', {
    report_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'report.post_id',
        references: {
            model: 'post',
            key: 'post_id'
        }
    }
}, {
    tableName: 'reports',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
});

export default Report;