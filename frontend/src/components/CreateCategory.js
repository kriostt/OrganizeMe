// import necessary modules
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// component for adding new category
const CreateCategory = () => {
  // hook to navigate between pages
  const navigate = useNavigate();

  // state variables
  const [categories, setCategories] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [category, setCategory] = useState({
    name: "",
    colour: "",
  });

  // get and set categories from server
  const readCategories = async () => {
    try {
      const res = await axios.get("http://localhost:3001/categories");

      if (res.status === 200) {
        setCategories(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // run readCategories on component mount
  useEffect(() => {
    readCategories();
  }, []);

  // event handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  // event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // check if form is valid
    if (validateForm()) {
      handleAdd();
    }
  };

  // add new category
  const handleAdd = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3001/add-category",
        category
      );

      if (res.status === 200) {
        // if successful, reset the form and display success message
        resetForm();
        alert(res.data.message);
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // reset the form
  const resetForm = () => {
    setCategory({
      name: "",
      colour: "",
    });

    setValidationErrors({});
  };

  // validate the form inputs to ensure they are provided
  const validateForm = () => {
    const errors = {};

    if (!category.name.trim()) {
      errors.name = "Please enter the category name.";
    }
    if (!category.colour.trim()) {
      errors.colour = "Please enter the category colour.";
    }

    // set validation errors and return if the form is valid
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // JSX for the form and page elements
  return (
    <div>
      <h2>Add Category</h2>

      {/* display validation errors if there's any */}
      <ul className="text-danger">
        {Object.values(validationErrors).map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>

      {/* category form */}
      <form onSubmit={handleSubmit}>
        {/* label and input for name */}
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={category.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* dropdown for colour */}
        <div className="form-group">
          <label>Colour:</label>
          <select
            name="colour"
            value={category.colour}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select a colour</option>
            <option value="lightcoral" className="red-option">
              Red
            </option>
            <option value="lightsalmon" className="orange-option">
              Orange
            </option>
            <option value="palegoldenrod" className="yellow-option">
              Yellow
            </option>
            <option value="lightgreen" className="green-option">
              Green
            </option>
            <option value="lightblue" className="blue-option">
              Blue
            </option>
            <option value="plum" className="purple-option">
              Purple
            </option>
            <option value="lightpink" className="pink-option">
              Pink
            </option>
            <option value="lightgray" className="gray-option">
              Gray
            </option>
            <option value="tan" className="brown-option">
              Brown
            </option>
          </select>
        </div>

        {/* buttons for adding a category or cancelling addition */}
        <button type="submit" className="btn btn-success btn-lg mr-3">
          Add Category
        </button>

        <button
          onClick={() => navigate(-1)}
          className="btn btn-danger btn-lg mr-3"
        >
          Cancel
        </button>
      </form>

      <h2 id="categories-header">Available Categories</h2>

      {/* check if list of categories exists */}
      {categories && categories.length > 0 ? (
        // display table of available categories
        <table className="table table-bordered">
          {/* table column titles */}
          <thead className="thead-light">
            <tr>
              <th className="col-6">Name</th>
              <th className="col-4">Colour</th>
              <th></th>
            </tr>
          </thead>

          {/* table rows */}
          <tbody>
            {/* map through list of categories and display each item in table row */}
            {categories.map((category) => (
              <tr key={category._id}>
                <td>{category.name}</td>
                <td>{category.colour}</td>
                <td className="text-center">
                    <button
                      onClick={() => navigate("/edit")}
                      className="btn btn-primary mr-2 ml-2 mb-1 mt-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => navigate("/delete")}
                      className="btn btn-danger mr-2 ml-2 mb-1 mt-1"
                    >
                      Delete
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // display message if there's no available categories
        <p>No categories are available.</p>
      )}
    </div>
  );
};

// export CreateCategory component
export default CreateCategory;
