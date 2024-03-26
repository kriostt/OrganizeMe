import React from "react";
import './App.css';
import Calendar from "./components/CalendarFeature/Calendar";

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>OrganizeMe Calendar</h1>
      </header>
      <main>
        <Calendar></Calendar>
      </main>
    </div>
  );
};

export default App;