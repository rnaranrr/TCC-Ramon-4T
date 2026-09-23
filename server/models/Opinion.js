import { DataTypes } from 'sequelize';
//define tabela com base na classe definida no ./config/database.js
import database from '../config/database.js';

//define classes
const Opinion = database.define('opinion', {
    opinion_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'opinion.user_id',
        references: {
            model: 'moderator',
            key: 'moderator_id'
        }
    },
    report_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'opinion.report_id',
        references: {
            model: 'reports',
            key: 'report_id'
        }
    },
    opinion_content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'opinion',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
});

export default Opinion;