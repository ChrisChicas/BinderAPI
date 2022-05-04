'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserBinders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Notes, UserTables }) {
      // Notes
      UserBinders.hasMany(Notes, {
        foreignKey: "binderId",
        as: "notes"
      });

      // UserTable
      UserBinders.belongsTo(UserTables, {
        foreignKey: "binderId",
        as: "user"
      })
    };
  }
  
  UserBinders.init({
    binderId: DataTypes.INTEGER,
    binderTitle: DataTypes.STRING,
    userId: DataTypes.STRING,
    dateCreated: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserBinders',
    tableName: 'UserBinders'
  });
  return UserBinders;
};