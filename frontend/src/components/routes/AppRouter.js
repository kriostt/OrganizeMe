import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";
import Calendar from "../components/CalendarFeature/Calendar";

const AppRouter =() => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={App} exact/>
                <Route path="/calendar" component={Calendar} />
            </Switch>
        </Router>
    );
};

export default AppRouter;