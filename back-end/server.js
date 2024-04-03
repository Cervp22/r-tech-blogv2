const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./config/connection");
const register = require("./routes/register");
const login = require("./routes/login");
const logout = require("./routes/logout");
const validateToken = require("./routes/validateToken");

const port = 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); //lets us work with cookies in our server
app.use(express.json());
app.use(cors());

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/logout", logout);
app.use("/api/validateToken", validateToken);

app.get("/", (req, res) => {
  res.send("Welcome to the r-tech-blogv2 api...");
});

db.once("open", () => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
});
