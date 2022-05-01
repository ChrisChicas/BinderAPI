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
        foreignKey: "note_id",
        as:"binder"
      })
    }
  }
  Notes.init({
    note_id: DataTypes.INTEGER,
    binder_id: DataTypes.INTEGER,
    note_content: DataTypes.STRING,
    date_modified: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Notes',
  });
  return Notes;
};