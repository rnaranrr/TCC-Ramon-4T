//define tabela com base na classe definida no ./config/database.js
import { DataTypes } from 'sequelize';
import database from '../config/database.js';

//define classes
const User = database.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_idname: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    user_nickname: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    user_email: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    user_passwd_hash: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    user_bio: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    user_pronouns: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    user_pfpurl: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    user_bannerurl: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    user_artist_type: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    user_commissions_open: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    user_commtab_bannerurl: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    user_commtab_imgurl: {
        type: DataTypes.STRING(500),
        allowNull: true,
    }
}, {
    tableName: 'user',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
});

export default User;