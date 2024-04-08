// import necessary modules
import React from "react";
import ReactDOM from "react-dom/client";

// import main App component
import App from "./App";

// import BrowserRouter for handling routing in app
import { BrowserRouter } from "react-router-dom";

// render App component wrapped in BrowserRouter to enable routing
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
