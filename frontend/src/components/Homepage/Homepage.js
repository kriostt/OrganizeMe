// Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Import homepage styling

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h1 className="homepage-title">Welcome to OrganizeMe!</h1>
        <p className="homepage-description">
          OrganizeMe helps you manage your schedule effortlessly. Keep track of your events, mark your favorites, and declutter your calendar with ease.
        </p>
        <div className="homepage-buttons">
          <Link to="/calendar" className="homepage-button">Start Organizing</Link>
          <Link to="/favorites" className="homepage-button">View Favorites</Link>
        </div>
      </div>
      <div className="homepage-image">
        {/* Add an image or illustration here */}
      </div>
    </div>
  );
};

export default Homepage;
