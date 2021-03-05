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
        "id": 9,
        "name": "Kimbap deluxe",
        "price": 50000,
        "ingredients": "Nasi, udang, Kepiting",
        "VendorId": 1
    },
    {
        "id": 10,
        "name": "Kimbap standar",
        "price": 30000,
        "ingredients": "Nasi, Kepiting",
        "VendorId": 1
    },
    {
        "id": 3,
        "name": "Paha Ayam Bakar Asin",
        "price": 200000,
        "ingredients": "lada, merica, kemiri, garam",
        "VendorId": 2
    },
    {
        "id": 4,
        "name": "Paha Ayam Goreng Asin",
        "price": 20000,
        "ingredients": "lada, merica, kemiri, garam",
        "VendorId": 2
    },
    {
        "id": 11,
        "name": "Ramen",
        "price": 30000,
        "ingredients": "",
        "VendorId": 3
    },
    {
        "id": 12,
        "name": "Salmon Skin Role",
        "price": 30000,
        "ingredients": "Salmon, Wasabi, Nasi",
        "VendorId": 3
    },
    {
        "id": 7,
        "name": "sushi",
        "price": 25000,
        "ingredients": "nasi, salmon, alpukat",
        "VendorId": 4
    },
    {
        "id": 8,
        "name": "Unagi",
        "price": 25000,
        "ingredients": "",
        "VendorId": 4
    },
    {
        "id": 5,
        "name": "kimbap",
        "price": 20000,
        "ingredients": "daging, nasi, udang, kepiting",
        "VendorId": 5
    },
    {
        "id": 6,
        "name": "Udang Goreng",
        "price": 50000,
        "ingredients": "garam, saos tiram, udang, lada",
        "VendorId": 5
    },
    {
        "id": 1,
        "name": "Paha Kambing Bakar Manis",
        "price": 200000,
        "ingredients": "Kecap, kemiri, garam",
        "VendorId": 6
    },
    {
        "id": 2,
        "name": "Paha Kambing Bakar Asin",
        "price": 200000,
        "ingredients": "lada, merica, kemiri, garam",
        "VendorId": 6
    }
]
     array =array.map(el=> {
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })
      await queryInterface.bulkInsert('Dishes', array, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Dishes', null, {});
  }
};
