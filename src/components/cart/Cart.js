import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Cart = props => {
  return (
    <section className="cart">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-container">
        <div className="cart-display">
          {props.cartItems.length === 0 ? (
            <div className="empty-cart">
              <i className="fas fa-shopping-cart" />
              <p>Your cart is currently empty</p>
              <Link to="/guitar-products">
                <button>Continue Shopping</button>
              </Link>
            </div>
          ) : (
            <p>Cart Items</p>
          )}
        </div>
        <div className="cart-checkout" />
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(Cart);
