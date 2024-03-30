const { connect, connection } = require("mongoose");
require("dotenv").config();

connect(process.env.DB_URI).then(() => {
  console.log("MongoDb Connection Successful!!");
});

module.exports = connection;
