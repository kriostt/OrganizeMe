import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Register from "./components/UserRegistration/Register";
import Login from "./components/UserRegistration/Login";
import CreateToDo from "./components/CreateToDo";
import ReadToDoList from "./components/ReadToDoList";
import CreateCategory from "./components/TaskCategorization/CreateCategory";
import UpdateCategory from "./components/TaskCategorization/UpdateCategory";
import DeleteCategory from "./components/TaskCategorization/DeleteCategory";
import Calendar from "./components/CalendarFeature/Calendar";
import Trash from "./components/Trash/Trash";
import Homepage from "./components/Homepage/Homepage";
import "./App.css";
import { useAuth } from "./contexts/AuthContext";
import Favourites from "./components/Favourites/Favourites";

// Main App component
const App = () => {
  // Using authentication context to check if user is authenticated
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <div>
        <Routes>
          {/* display navigation bar */}
          <Route
            path="/"
            // If user is not authenticated, render Register component, otherwise navigate to Dashboard
            element={!isAuthenticated ? <Register /> : <Navigate to="/home" />}
          />
          <Route
            path="/login"
            // If user is not authenticated, render Login component, otherwise navigate to Dashboard
            element={!isAuthenticated ? <Login /> : <Navigate to="/home" />}
          />
          <Route
            path="/home"
            // If user is authenticated, render Dashboard component, otherwise redirect to Login
            element={isAuthenticated ? <ReadToDoList /> : <Login />}
          />
          <Route path="/welcome" element={<Homepage />} />
          <Route path="/add" element={<CreateToDo />} />
          <Route path="/add-category" element={<CreateCategory />} />
          <Route path="/edit-category/:id" element={<UpdateCategory />} />
          <Route path="/delete-category/:id" element={<DeleteCategory />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
