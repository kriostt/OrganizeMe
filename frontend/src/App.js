// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import CalendarPage from './components/CalendarFeature/CalendarPage';
import Favorites from './components/Favorites';
import Trash from './components/Trash';
import HomePage from './components/HomePage';

// App component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>OrganizeMe</h1>
          {/* Navigation Links */}
          <nav>
            <ul>
              <li>
              <Link to="/Home">Homepage</Link>

              </li>
              <li>
                <Link to="/Favorites">Favorites</Link>
              </li>
              <li>
                <Link to="/Trash">Trash</Link>
              </li>
              <li>
                <Link to="/Calendar">Calendar</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {/* Routing Switch */}
          <Switch>
            <Route path="/Favorites">
              <Favorites />
            </Route>
            <Route path="/Trash">
              <Trash />
            </Route>
            <Route path="/Calendar">
              <CalendarPage />
            </Route>
            <Route path="/Homepage">
              <HomePage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
