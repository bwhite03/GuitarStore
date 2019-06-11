import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginCart extends Component {
  render() {
    return (
      <div className="login-mycart">
        <a href="/">
          <i className="fas fa-user-circle" />
          Login
        </a>
        <Link to="/cart">
          <i className="fas fa-shopping-cart" />
          Cart
        </Link>
      </div>
    );
  }
}

export default LoginCart;
