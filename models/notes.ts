'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize: any, DataTypes: any) => {
  class Notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UserBinders }: any) {
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
      //allowNull: Defaults to true, determines whether or not a column value can be null.
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
