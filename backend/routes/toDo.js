// Importing required modules
const express = require("express"); // Importing Express.js framework
const router = express.Router(); // Creating a router instance

const UserController = require("../controllers/UserController"); // Importing UserController

// Defining routes for user signup and login
router.post("/signup", UserController.signup); // Route for user signup
router.post("/login", UserController.login); // Route for user login

module.exports = router; // Exporting the router for use in other files
