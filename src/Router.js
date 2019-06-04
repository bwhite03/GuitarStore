import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./sass/App.scss";
import Home from "./components/home/Home";
import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import GuitarProducts from "./components/guitar_products/GuitarProducts";
import Cart from "./components/cart/Cart";
import Item from "./components/guitar_products/Item";
import { createStore } from "redux";
import { Provider } from "react-redux";
import combineReducer from "./reducers/combineReducer";

const store = createStore(
  combineReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/guitar-products" component={GuitarProducts} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/:item_id" component={Item} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
