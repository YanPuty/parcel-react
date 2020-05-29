// Libs
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import SideBar from "../components/sidebar"

class Router extends Component {

  render() {
    return (
      <Switch>
        <Route
          path="/"
          component={SideBar}
        />
      </Switch>
    );
  }
}

export default Router;