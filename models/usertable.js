'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UserBinders }) {
      //User Binders
      UserTable.hasMany(UserBinders, {
        foreignKey: "BinderId",
        as: "binder_id"
      })
    }
  }
  UserTable.init({
    UserId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DisplayName: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'UserTable',
    tableName: 'usertable',
    timestamps: false
  });
  return UserTable;
};