const express = require("express");
const cors = require("cors");
const db = require("./config/connection");
const register = require("./routes/register");

const port = 3001;

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/register", register);

app.get("/", (req, res) => {
  res.send("Welcome to the r-tech-blogv2 api...");
});

db.once("open", () => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
});
