'use strict';

const { all } = require("../controllers/notes_controller");

module.exports = {
  async up(queryInterface, Sequelize) { 
    // code that will execute when running the migration. The up: function runs when applying the migration.
    await queryInterface.createTable('UserTables', { // Table name 
      // Query interface commands can be used within the up and down methods of migration.
      userId: { // column name
        allowNull: false, // Disallowing null values
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: { // column name
        type: Sequelize.STRING,
        allowNull: false
      },
      password: { // column name
        type: Sequelize.STRING,
        allowNull: false
      },
      displayName: { // column name
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    //code that will execute when undoing the migration. The down: function runs when reverting the migration.
    await queryInterface.dropTable('UserTables');
  }
};
// Migrations can be generated using the sequelize migration command. 
// Migrations is a way to update tables without having to drop the entire database. 
// We can write custom migrations to update tables by utilizing the Sequelize query interface.
