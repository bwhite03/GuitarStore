import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import ItemPage from "./pages/item-page/ItemPage";
import CartPage from "./pages/cart-page/CartPage";
import LoginPage from "./pages/login-page/LoginPage";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { createStore } from "redux";
import { Provider } from "react-redux";
import combineReducer from "./store/reducers/combineReducer";

// Local storage

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = createStore(
  combineReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

class Router extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            },
            () => console.log(this.state)
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <div className="wrapper">
              <Header currentUser={this.state.currentUser} />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/guitar-products" component={ShopPage} />
                <Route exact path="/cart" component={CartPage} />
                <Route
                  exact
                  path="/login"
                  render={() =>
                    this.state.currentUser ? <Redirect to="/" /> : <LoginPage />
                  }
                />
                <Route exact path="/:item_id" component={ItemPage} />
              </Switch>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Router;
