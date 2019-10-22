import React from "react";
import Welcome from "./pages/Welcome";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";

export default () => {
  return (
  <Router>
        <Switch>
          <Route path="/" exact component={Welcome} />
        </Switch>
    </Router>
  );
};
