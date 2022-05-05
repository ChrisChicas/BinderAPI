'use strict';

module.exports = {
  async up (queryInterface, Sequelize) { // the up attribute will run the seeder is applied.
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) { // the down attribute will run when the seeder is undone, although note that if run like the example is written currently it will delete everything inside the provided table.
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
// seeder files do not affect the database on its own, you must run the seeders first and use sequelize db:seed:all to run all seeders. Once the seeders are run this will insert all the new data into the tables.
