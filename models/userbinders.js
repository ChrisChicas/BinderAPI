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
    binderId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    binderTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'UserBinders',
    tableName: 'UserBinders',
    timestamps: false
  });
  return UserBinders;
};