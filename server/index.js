const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const controller = require("./controller.js");

const port = 3001;

app.use(bodyParser());
app.use(cors());

app.get("/api/getCharacters", controller.getChar);
app.post("/api/addCharacters", controller.addChar);

app.listen(port, () => {
  console.log(`Port is running on: ${port}`);
});
