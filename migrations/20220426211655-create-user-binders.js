'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserBinders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BinderId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      BinderTitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      UserId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      DateCreated: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserBinders');
  }
};