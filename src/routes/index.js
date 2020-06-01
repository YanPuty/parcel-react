// Libs
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "../Module/Home";
import LayoutComponent from "../components/layout";

class Router extends Component {

  render() {
    return (
      <LayoutComponent>
        <Switch>
          <Route
            path="/"
            component={Home}
          />
        </Switch>
      </LayoutComponent>
    );
  }
}

export default Router;