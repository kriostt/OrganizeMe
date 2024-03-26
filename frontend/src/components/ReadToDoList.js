// import necessary modules
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// component for getting to do list
const ReadToDoList = () => {
  // state to store to do list
  const [toDoList, setToDoList] = useState([]);

  // get and set to do list from server
  const readToDoList = async () => {
    try {
      const res = await axios.get("http://localhost:3001/");

      if (res.status === 200) {
        setToDoList(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // run readToDoList on component mount
  useEffect(() => {
    readToDoList();
  }, []);

  // function to format date to MM/DD/YYYY HH:MM
  const formatDate = (dateString) => {
    // if no date input, return empty string
    if (!dateString) {
      return "";
    }

    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formattedDate = date.toLocaleString(undefined, options);
    return formattedDate;
  };

  return (
    <div>
      {/* link to navigate to Add To Do page */}
      <Link to="/add" className="btn btn-primary mb-3">
        Add To Do
      </Link>

      {/* check if to do list exists */}
      {toDoList && toDoList.length > 0 ? (
        // display table with to do list
        <table className="table table-bordered">
          {/* table column titles */}
          <thead className="thead-light">
            <tr>
              <th className="column-header" scope="col">
                Category
              </th>
              <th className="column-header" scope="col">
                Title
              </th>
              <th className="column-header" scope="col">
                Description
              </th>
              <th className="column-header" scope="col">
                Due Date
              </th>
            </tr>
          </thead>

          {/* table rows */}
          <tbody>
            {/* map through to do list and display each item in table row */}
            {toDoList.map((toDo) => (
              <tr key={toDo._id}>
                <td
                  className={`category-${
                    toDo.category && toDo.category.colour
                      ? toDo.category.colour
                      : "default"
                  }`}
                >
                  {/* Check if toDo.category exists before accessing its properties */}
                  {toDo.category && toDo.category.name
                    ? toDo.category.name
                    : ""}
                </td>
                <td>{toDo.title}</td>
                <td>{toDo.description}</td>
                <td>{formatDate(toDo.dueDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // display messsage if there's no to do list
        <p>All caught up!</p>
      )}
    </div>
  );
};

// export ReadToDoList component
export default ReadToDoList;
