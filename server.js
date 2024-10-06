// server instantiate
const express = require("express");
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json req body
app.use(express.json());

// import routes for TODO aPI
const todoRoutes = require("./routes/todos");

// Mount/Append the todo API routes
app.use("/api/v1", todoRoutes);

// start the server
app.listen(PORT, () => {
  console.log("Server listening on port ");
});

//connect to DB
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/", (req, res) => {
  res.send(`<h1> This is Homepage</h1>`);
});
