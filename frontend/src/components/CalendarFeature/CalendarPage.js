// CalendarPage.js
import React from 'react';
import Calendar from './Calendar'; // Import the Calendar component

const CalendarPage = () => {
  return (
    <div>
      <h1>OrganizeMe</h1> 
      <div className="calendar-controls"> 
        <button>Previous</button>
        <button>Today</button>
        <button>Next</button>
      </div>
      
      <Calendar />
    </div>
  );
};

export default CalendarPage;
