const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const cookieParser = require("cookie-parser");
const db = require("./config/connection");
const register = require("./routes/register");
const login = require("./routes/login");
const logout = require("./routes/logout");
const totalUsers = require("./routes/totaluser");
const validateToken = require("./routes/validateToken");
const forgotPassword = require("./routes/forgotpassword");
const resetPassword = require("./routes/reset-Password");
const profilePic = require("./routes/profilepic");
const posts = require("./routes/posts");
const users = require("./routes/users");

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

//socket io server
const server = http.createServer(app);

//socket io new server line
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    //data equals to room emmited from the front end
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("disconnect", () => {
    console.log(`User Dis-connected: ${socket.id}`);
  });
});

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/logout", logout);
app.use("/api/validateToken", validateToken);
app.use("/api/forgotPassword", forgotPassword);
app.use("/api/resetPassword/:id/:token", resetPassword);

//Profile pics
app.use("/api/profilepics", profilePic);

//User/ post / Likes CRUD
app.use("/api/posts", posts);
app.use("/api/users", users);
app.use("/api/totalusers", totalUsers);

app.get("/", (req, res) => {
  res.send("Welcome to the r-tech-blogv2 api...");
});

db.once("open", () => {
  server.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
});
