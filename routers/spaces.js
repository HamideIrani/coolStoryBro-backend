const { Router } = require("express");
const Space = require("../models").space;

const router = new Router();

router.get("/", async (request, response) => {
  try {
    const spaces = await Space.findAndCountAll();
    response.send(spaces);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
