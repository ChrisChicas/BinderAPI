'use strict';

const { all } = require("../controllers/notes_controller");

module.exports = {
  async up(queryInterface, Sequelize) {
    // code that will execute when running the migration
    await queryInterface.createTable('UserTables', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      displayName: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    //code that will execute when undoing the migration
    await queryInterface.dropTable('UserTables');
  }
};
