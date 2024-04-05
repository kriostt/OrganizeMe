import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h2>Welcome to OrganizeMe!</h2>
      <p>This is the homepage of your OrganizeMe application.</p>
      <p>You can use this application to organize your tasks, events, and more.</p>
      <p>Feel free to explore and start organizing!</p>

      <h3>Quick Links:</h3>
      <ul>
        <li>
          <Link to="/calendar">Go to Calendar</Link>
        </li>
        <li>
          <Link to="/favorites">View Favorites</Link>
        </li>
        <li>
          <Link to="/trash">View Trash</Link>
        </li>
      </ul>
    </div>
  );
};

export default Homepage;
