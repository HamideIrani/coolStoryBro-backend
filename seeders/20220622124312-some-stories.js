"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "story-1",
          content: "first story",
          imageUrl:
            "https://www.story.nl/sites/all/themes/custom/story/share.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "story-2",
          content: "second story",
          imageUrl:
            "https://images.ctfassets.net/conz76uve558/4LlcMMeJSOgolZEGF459We/395cddb2519441befe5564745db38171/Story.svg?w=3840&q=75&fm=webp",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "story-3",
          content: "third story",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71E_nPdONKfmpqZZonAgAiRylg5eglP9ugg&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "story-4",
          content: "fourth story",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUgMBlLjBMnemyCsk-la88-b9yBQi9iYG0EQ&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
