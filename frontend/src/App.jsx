import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./contexts/AuthContext";

// Main App component
const App = () => {
  // Using authentication context to check if user is authenticated
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          // If user is not authenticated, render Register component, otherwise navigate to Dashboard
          element={
            !isAuthenticated ? <Register /> : <Navigate to="/dashboard" />
          }
        />
        <Route
          path="/login"
          // If user is not authenticated, render Login component, otherwise navigate to Dashboard
          element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          // If user is authenticated, render Dashboard component, otherwise redirect to Login
          element={isAuthenticated ? <Dashboard /> : <Login />}
        />
      </Routes>
    </Router>
  );
};

export default App;
