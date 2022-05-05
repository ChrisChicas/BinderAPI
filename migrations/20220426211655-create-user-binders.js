'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    // code that will execute when running the migration
    await queryInterface.createTable('UserBinders', {
      binderId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      binderTitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      dateCreated: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    // code that will execute when undoing the migration
    await queryInterface.dropTable('UserBinders');
  }
};
