import React, { Component } from "react";

class LoginCart extends Component {
  render() {
    return (
      <div className="login-mycart">
        <a href="#">
          <i className="fas fa-user-circle" />
          Login
        </a>
        <a href="#">
          <i className="fas fa-shopping-cart" />
          Cart
        </a>
      </div>
    );
  }
}

export default LoginCart;
