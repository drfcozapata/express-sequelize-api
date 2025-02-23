"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Francisco Zapata",
        email: "drfcozapata@gmail.com",
        password:
          "$2a$10$uvnCeNMUg/68fWYj74/Ec.py3q2mkc0iqOCliM.0En8Zb7ajwHUsu", // 'password' (literal)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "James Bond",
        email: "bond007@mi5.gov.uk",
        password:
          "$2a$10$uvnCeNMUg/68fWYj74/Ec.py3q2mkc0iqOCliM.0En8Zb7ajwHUsu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "John Doe",
        email: "john@example.com",
        password:
          "$2a$10$uvnCeNMUg/68fWYj74/Ec.py3q2mkc0iqOCliM.0En8Zb7ajwHUsu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jane Doe",
        email: "jane@example.com",
        password:
          "$2a$10$uvnCeNMUg/68fWYj74/Ec.py3q2mkc0iqOCliM.0En8Zb7ajwHUsu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete("Users", null, {});
    };
  },
};
