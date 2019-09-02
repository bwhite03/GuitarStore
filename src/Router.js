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
import ServicePage from "./pages/services-page/ServicesPage";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { Provider } from "react-redux";
import { store } from "./store/store";

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
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
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
                <Route exact path="/services" component={ServicePage} />
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
