import { DataTypes } from 'sequelize';
//define tabela com base na classe definida no ./config/database.js
import database from '../config/database.js';

//define classes
const Moderator = database.define('moderator', {
    moderator_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    moderator_idname: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    moderator_nickname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    moderator_userprofile: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'user',
            key: 'user_id'
        }
    },
    moderator_acesskey_hash: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'moderator',
    timestamps: false
});

export default Moderator;