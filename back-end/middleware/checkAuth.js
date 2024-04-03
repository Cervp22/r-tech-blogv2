const jwt = require("jsonwebtoken");
require("dotenv").config();

export const checkAuth = (req, res, next) => {
  const token = req.cookies.LP_access_token;
  if (!token) {
    return res.status(401).json({ message: "No token Found" });
  }

  jwt.verify(token, process.env.JWT_SECRET_LOSPATOJOSV2, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = {
      _id: user,
    };

    next();
  });
};
