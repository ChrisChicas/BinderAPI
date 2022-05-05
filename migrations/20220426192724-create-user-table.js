'use strict';

const { all } = require("../controllers/notes_controller");

module.exports = {
  async up(queryInterface, Sequelize) { 
    // code that will execute when running the migration
    await queryInterface.createTable('UserTables', {
      // Query interface commands can be used within the up and down methods of migration.
      userId: {
        allowNull: false, // Disallowing null values
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
