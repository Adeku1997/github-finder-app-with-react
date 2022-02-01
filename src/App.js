import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Alert from "./components/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import NotFound from "./components/pages/NotFound";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
const App = () => {

  return (
    <GithubState>
      <AlertState>
        <div>
          <Navbar title="Github Finder" />
          <Alert />
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route path="/about" component={About} />
            <Route path="/users/:login" component={User} />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </AlertState>
    </GithubState>
  );
};

export default App;
