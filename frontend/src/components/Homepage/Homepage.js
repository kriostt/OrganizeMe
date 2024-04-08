// Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; //imports the Homepage.css styling

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h1 className="homepage-title">Welcome to OrganizeMe!</h1>
        <p className="homepage-description">
          OrganizeMe helps you manage your schedule effortlessly. Keep track of your events, mark your favorites, and declutter your calendar with ease.
        </p>
        <div className="homepage-buttons">
          <Link to="/Calendar" className="homepage-button">Calendar</Link>
          
          <Link to="/Favorites" className="homepage-button">View Favorites</Link>
          
          <Link to="/Trash" className="homepage-button">View Trash</Link>
        </div>
      </div>
      <div className="homepage-image">
        
      </div>
    </div>
  );
};

export default Homepage;
