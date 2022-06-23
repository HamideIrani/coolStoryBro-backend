const express = require("express");
const cors = require("cors");

const spaceRouter = require("./routers/");

const app = express();
const PORT = 4000;

const jsonParser = express.json();
app.use(jsonParser);
app.use(cors());

app.use("/", spaceRouter);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
