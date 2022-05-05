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
        as: "binder"
      })
    }
  }
  Notes.init({
    noteId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    binderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    noteContent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize, // Passes the connection string
    modelName: 'Notes', // Names the model
    tableName: 'Notes',
    timestamps: false
  });
  return Notes;
};
