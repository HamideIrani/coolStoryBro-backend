"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "space-1",
          description: "first space",
          backgroundColor: "#148F77",
          color: "#2874A6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "space-2",
          description: "second space",
          backgroundColor: "",
          color: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
