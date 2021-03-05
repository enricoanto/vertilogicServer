'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let array =  [
    {
      name: "CHINESE"
    },
    {
      name: "WESTERN"
    },
    {
      name: "KOREAN"
    },
    {
      name: "INDONESIAN"
    },
    {
      name: "JAPANNESE"
    },
    {
      name: "ARABIAN"
    },
    {
      name: "ITALIAN"
    },
    {
      name: "MIDDLE EAST"
    },
    {
      name: "TAKE AWAY"
    },
    {
      name: "EUROPAN"
    },
    {
      name: "DINE IN"
    }]
   array =array.map(el=> {
    el.createdAt = new Date()
    el.updatedAt = new Date()
    return el
  })
    await queryInterface.bulkInsert('Tags', array, {});
    },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
