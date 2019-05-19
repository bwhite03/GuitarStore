import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./sass/App.scss";
import Home from "./components/home/Home";
import Header from "./components/header_footer/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
