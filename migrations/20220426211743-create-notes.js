'use strict';

const { all } = require("../controllers/notes_controller");

module.exports = {
  async up(queryInterface, Sequelize) {
    // code that will execute when running the migration
    await queryInterface.createTable('Notes', {
      noteId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      binderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      noteContent: {
        type: Sequelize.STRING,
        allowNull: false,
      },
       createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    // code that will execute when undoing the migration
    await queryInterface.dropTable('Notes');
  }
};
