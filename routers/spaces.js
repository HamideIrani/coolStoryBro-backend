const { Router } = require("express");
const Space = require("../models").space;
const Story = require("../models").story;
const auth = require("../auth/middleware");

const router = new Router();

// Get all spaces

router.get("/", async (request, response) => {
  try {
    const spaces = await Space.findAndCountAll();
    response.send(spaces);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// Post a new story

router.get("/:id", async (request, response) => {
  const { id } = request.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return response.status(400).send({ message: "Space id is not a number" });
  }

  const space = await Space.findByPk(id, {
    include: [Story],
    order: [[Story, "createdAt", "DESC"]],
  });

  if (space === null) {
    return response.status(404).send({ message: "Space not found" });
  }
  console.log(space.stories);

  response.status(200).send({ message: "ok", space });
});

router.post("/:id/stories", auth, async (req, res) => {
  const { name, imageUrl, content } = req.body;

  if (!name) {
    return res.status(400).send({ message: "A story must have a name" });
  }

  const story = await Story.create({
    name,
    imageUrl,
    content,
    spaceId: req.params.id,
  });

  return res.status(201).send({ message: "Story created", story });
});

// Delete a story from my space
router.delete("/:spaceId/stories/:storyId", auth, async (req, res, next) => {
  try {
    const { spaceId, storyId } = req.params;
    const story = await Story.findByPk(storyId, { include: [Space] });
    if (!story) {
      return res.status(404).send("Story not found");
    }

    // Check if this user is the owner of the space
    if (story.space.userId !== req.user.id) {
      return res.status(401).send("You're not authorized to delete this story");
    }

    await story.destroy();

    res.send({ message: "ok", storyId });
  } catch (e) {
    next(e);
  }
});

// Edit my space
router.patch("/:id", auth, async (req, res) => {
  const space = await Space.findByPk(req.params.id);
  if (!space.userId === req.user.id) {
    return res
      .status(403)
      .send({ message: "You are not authorized to edit this space" });
  }

  const { title, description, backgroundColor, color } = req.body;

  await space.update({ title, description, backgroundColor, color });

  return res.status(200).send({ space });
});

module.exports = router;
