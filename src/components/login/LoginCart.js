import React from "react";
import "./login-cart.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase";

const LoginCart = props => {
  return (
    <div className="login-mycart">
      {props.currentUser ? (
        <div className="sign-out" onClick={() => auth.signOut()}>
          <i className="fas fa-sign-out-alt" /> Sign Out
        </div>
      ) : (
        <Link to="/login">
          <i className="fas fa-user-circle" />
          Login
        </Link>
      )}

      <Link to="/cart">
        <i className="fas fa-shopping-bag" />
        Cart <span className="items-in-cart">{props.cartItems}</span>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  let itemsInCart = state.cartReducer.cart.length;
  return {
    cartItems: itemsInCart
  };
};

export default connect(
  mapStateToProps,
  null
)(LoginCart);
