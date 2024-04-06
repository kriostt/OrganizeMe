import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from "./components/CalendarFeature/Calendar";
import Homepage from "./components/Homepage/Homepage";
import Favorites from "./components/Favorites/Favorites";
import Trash from "./components/Trash/Trash";

function App(){
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>OrganizeMe</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
