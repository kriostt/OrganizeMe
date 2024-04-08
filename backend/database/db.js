// Importing required modules
const mongoose = require("mongoose"); // Importing Mongoose for MongoDB object modeling

// Defining an asynchronous function to connect to the MongoDB database
const connectDb = async () => {
  try {
    // Attempting to connect to the MongoDB Atlas cluster
    await mongoose.connect(
      `mongodb+srv://alessandravendicacion:avjqO1NrPjWqMtQZ@cluster0.s5jpsqe.mongodb.net/OrganizeMe`
    );
    console.log("DB connected successfully"); // Logging success message if connection is successful
  } catch (error) {
    console.log("DB not connected"); // Logging error message if connection fails
  }
};

module.exports = connectDb; // Exporting the function to connect to the database
