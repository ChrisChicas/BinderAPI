'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class UserTables extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ UserBinders }) {
            //User Binders
            UserTables.hasMany(UserBinders, {
                foreignKey: "binderId",
                as: "binder_id"
            });
        }
    }
    UserTables.init({
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'UserTables',
        tableName: 'UserTables',
        timestamps: false
    });
    return UserTables;
};
