import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./sass/App.scss";
import Home from "./components/home/Home";
import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
