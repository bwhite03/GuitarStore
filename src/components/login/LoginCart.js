import React, { Component } from "react";
import "./login-cart.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class LoginCart extends Component {
  render() {
    return (
      <div className="login-mycart">
        <Link to="/">
          <i className="fas fa-user-circle" />
          Login
        </Link>
        <Link to="/cart">
          <i className="fas fa-shopping-cart" />
          Cart <span className="items-in-cart">{this.props.cartItems}</span>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let itemsInCart = state.cartReducer.cart.length;
  console.log(itemsInCart);
  return {
    cartItems: itemsInCart
  };
};

export default connect(
  mapStateToProps,
  null
)(LoginCart);
