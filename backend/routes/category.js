// import Express.js framework
const express = require("express");
// create router instance for defining routes
const router = express.Router();

// import CategoryController for handling category-related operations
const CategoryController = require("../controllers/CategoryController");

// define routes and associate them with controller methods

// handle GET requests for retrieving list of categories
router.get("/categories", CategoryController.getCategories);

// handle POST requests for adding a new category
router.post("/add-category", CategoryController.addCategory);

// export the router to be used in main application
module.exports = router;
