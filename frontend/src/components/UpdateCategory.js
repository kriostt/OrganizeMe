// import necessary modules
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// component for editing categories
const UpdateCategory = () => {
  // hook to navigate between pages
  const navigate = useNavigate();

  // extract parameters from URL
  let { id } = useParams();

  // state variables
  const [validationErrors, setValidationErrors] = useState({});
  const [category, setCategory] = useState({
    name: "",
    colour: "",
  });

  // get and set a single category from server
  const readCategory = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001/get-category/${id}`
      );

      if (res.status === 200) {
        setCategory(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // run initial data fetching when id changes
  useEffect(() => {
    readCategory();
  }, [id]);

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
      handleEdit();
    }
  };

  // edit existing category
  const handleEdit = async () => {
    try {
      const res = await axios.put(`http://localhost:3001/edit-category/${id}`, category);

      if (res.status === 200) {
        // if successful, reset the form, display success message, and retun to add categories page
        resetForm();
        alert(res.data.message);
        navigate("/add-category");
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
      <h2>Edit Category</h2>

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
          Edit Category
        </button>

        <button
          onClick={() => navigate("/add-category")}
          className="btn btn-danger btn-lg mr-3"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

// export UpdateCategory component
export default UpdateCategory;
