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
   let array = [
    {
        "id": 2,
        "name": "Ayam Goreng Bu Ina",
        "location": "Jakarta",
        "range_price": "20000-100000",
        "createdAt": "2021-03-05T07:46:54.427Z",
        "updatedAt": "2021-03-05T07:46:54.427Z"
    },
    {
        "id": 5,
        "name": "Dlwlrma",
        "location": "Jakarta",
        "range_price": "10000-50000",
        "createdAt": "2021-03-05T07:48:56.286Z",
        "updatedAt": "2021-03-05T07:48:56.286Z"
    },
    {
        "id": 6,
        "name": "Kambing Bakar Karo",
        "location": "Jakarta",
        "range_price": "10000-500000"
    },
    {
        "id": 4,
        "name": "Kurohige",
        "location": "Jakarta",
        "range_price": "10000-100000"
    },
    {
        "id": 1,
        "name": "Kimbap",
        "location": "Jakarta",
        "range_price": "20000-50000"
    },
    {
        "id": 3,
        "name": "Shirohige",
        "location": "Jakarta",
        "range_price": "40000-100000"
    }
]
     array =array.map(el=> {
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })
      await queryInterface.bulkInsert('Vendors', array, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Vendors', null, {});
  }
};
