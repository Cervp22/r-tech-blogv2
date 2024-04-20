const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./config/connection");
const register = require("./routes/register");
const login = require("./routes/login");
const logout = require("./routes/logout");
const validateToken = require("./routes/validateToken");
const forgotPassword = require("./routes/forgotpassword");
const resetPassword = require("./routes/reset-Password");

const port = 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); //lets us work with cookies in our server
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Access-Control-Allow-Credentials",
  ],
};
app.use(cors(corsOptions));

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/logout", logout);
app.use("/api/validateToken", validateToken);
app.use("/api/forgotPassword", forgotPassword);
app.use("/api/resetPassword/:id/:token", resetPassword);
app.get("/", (req, res) => {
  res.send("Welcome to the r-tech-blogv2 api...");
});

db.once("open", () => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
});
