import React, { Fragment } from "react";
import Router from "../routes";
import { Router as MainRouter, BrowserRouter } from "react-router-dom";

// Components
import Routes from "../routes";
import { history } from "../shared/utils/history";


export class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <MainRouter history={history}>
            <Routes />
          </MainRouter>
        </Fragment>
      </BrowserRouter>
    );
  };
}