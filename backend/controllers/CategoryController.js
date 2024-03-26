// import the Category model
const Category = require("../models/Category");

// show list of categories
const getCategories = (req, res, next) => {
  Category.find() // MongoDB query to retrieve all categories
    .then((response) => {
      res.status(200).json(response); // send the response as JSON
    })
    .catch((error) => {
      res.status(400).json({
        // send an error message if error occurs
        message:
          "An error occurred! Unable to retrieve the list of categories.",
      });
    });
};

// add new category
const addCategory = (req, res, next) => {
  // create new category with data in request body
  let category = new Category({
    name: req.body.name,
    colour: req.body.colour,
  });

  category
    .save() // MongoDB query to save category into database
    .then((response) => {
      res.status(200).json({
        response,
        // send a success message if category is added successfully
        message: "Category added successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error,
        // send an error message if an error occurs
        message: "An error occurred! Unable to create new category.",
      });
    });
};

// export the controller methods
module.exports = { getCategories, addCategory };
