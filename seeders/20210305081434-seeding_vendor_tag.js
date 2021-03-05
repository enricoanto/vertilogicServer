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
        "TagId": 4,
        "VendorId": 2
    },
    {
        "TagId": 9,
        "VendorId": 2
    },
    {
        "TagId": 9,
        "VendorId": 5
    },
    {
        "TagId": 3,
        "VendorId": 5
    },
    {
        "TagId": 11,
        "VendorId": 6
    },
    {
        "TagId": 9,
        "VendorId": 6
    },
    {
        "TagId": 5,
        "VendorId": 4
    },
    {
        "TagId": 11,
        "VendorId": 4
    },
    {
        "TagId": 9,
        "VendorId": 1
    },
    {
        "TagId": 3,
        "VendorId": 1
    },
    {
        "TagId": 5,
        "VendorId": 3
    },
    {
        "TagId": 11,
        "VendorId": 3
    }

]
     array =array.map(el=> {
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })
      await queryInterface.bulkInsert('Vendor_Tags', array, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Vendor_tags', null, {});
  }
};
