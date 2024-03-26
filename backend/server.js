// import Morgan for HTTP request logging
const morgan = require("morgan");
// import body-parser middleware for parsing request bodies
const bodyParser = require("body-parser");
// import cors for cross-origin resource sharing (security)
const cors = require("cors");

// import custom function for connection to MongoDB
const connectDb = require("./database/db");
// import routes
const toDoRoutes = require("./routes/toDo");
const categoryRoutes = require("./routes/category");

// import Express.js framework
const express = require("express");
// create an instance of Express application
const app = express();

// connect to MongoDB cloud database
connectDb();

// set up middleware
app.use(cors()); // enable cross-origin resource sharing
app.use(morgan("dev")); // use Morgan for logging HTTP requests
app.use(bodyParser.urlencoded({ extended: true })); // parse url-encoded bodies
app.use(bodyParser.json()); // parse JSON bodies

// load routes
app.use("/", toDoRoutes); // mount to do routes on root path
app.use("/", categoryRoutes); // mount category routes on root path

// set port for the server
const PORT = process.env.PORT || 3001;

// start the server and log the port it's running on
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
