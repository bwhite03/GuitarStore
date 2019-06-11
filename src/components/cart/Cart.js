import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";

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
            <div className="full-cart">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th />
                    <th>Product</th>
                    <th />
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {props.cartItems.map((items, index) => (
                    <CartItems item={items} key={items.id} />
                  ))}
                </tbody>
              </table>
              <div className="cart-total">
                <h1>Subtotal: ${props.total}.00</h1>
                <p>Shipping & taxes calculated at checkout</p>
                <button>
                  <i className="far fa-check-square" /> Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  let newTotal = state.cartReducer.total;
  let newQuantity = state.cartReducer.quantity;
  state.cartReducer.cart.map(item => {
    return (newTotal += item.price * newQuantity);
  });

  return {
    cartItems: state.cartReducer.cart,
    total: newTotal
  };
};

export default connect(
  mapStateToProps,
  null
)(Cart);
