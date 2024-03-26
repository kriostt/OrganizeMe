// import necessary components and modules
import { Route, Routes } from "react-router-dom";
import CreateToDo from "./components/CreateToDo";
import ReadToDoList from "./components/ReadToDoList";
import CreateCategory from "./components/CreateCategory";
import UpdateCategory from "./components/UpdateCategory";
import DeleteCategory from "./components/DeleteCategory";
import "./App.css";

// main component for application
function App() {
  return (
    <Routes>
      {/* route for displaying to do list */}
      <Route path="/" element={<ReadToDoList />} />

      {/* route for adding a new to do list item */}
      <Route path="/add" element={<CreateToDo />} />

      {/* route for adding a new category */}
      <Route path="/add-category" element={<CreateCategory />} />

      {/* route for editing a category */}
      <Route path="/edit-category/:id" element={<UpdateCategory />} />

      {/* route for deleting a category */}
      <Route path="/delete-category/:id" element={<DeleteCategory />} />
    </Routes>
  );
}

// export the App component
export default App;
