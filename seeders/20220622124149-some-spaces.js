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
          color: "#154360",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "space-2",
          description: "second space",
          backgroundColor: "#F9E79F",
          color: "#641E16",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "space-3",
          description: "third space",
          backgroundColor: "#E8DAEF",
          color: "#2C3E50",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "space-4",
          description: "fourth space",
          backgroundColor: "#A3E4D7",
          color: "#34495E",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
