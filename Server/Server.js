// Loading Environment Variables
require("dotenv").config();
const connectToDb = require("./Config/dbConfig.js");

// Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Creating App
const app = express();

// Built In Middlewares
app.use(bodyParser.json());
app.use(cors());

// IIFE
(async () => {
  await connectToDb();
  const Port = process.env.PORT;
  app.listen(Port, () => {
    console.log(`Listening the server at port ${Port}...`);
  });
})();

require("./Routes/Users.Routes.js")(app);
require("./Routes/Chat.Routes.js")(app);
