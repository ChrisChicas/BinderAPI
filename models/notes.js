'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UserBinders }) {
      //userbinders
      Notes.belongsTo(UserBinders, {
        foreignKey: "noteId",
        as:"binder"
      })
    }
  }
  Notes.init({
    noteId: DataTypes.INTEGER,
    binderId: DataTypes.INTEGER,
    noteContent: DataTypes.STRING,
    dateModified: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Notes',
    tableName: 'Notes'
    });
  return Notes;
};