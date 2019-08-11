import React from "react";
import "./cart-page.styles.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartItems from "../../components/cart-items/CartItems";
import StripeButton from "../../components/stripe-button/StripeButton";

const CartPage = props => {
  return (
    <section className="cart">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-container">
        <div className="cart-display">
          {props.cartItems.length === 0 ? (
            <div className="empty-cart">
              <i className="fa fa-shopping-bag" aria-hidden="true" />
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
                    <th>Brand</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {props.cartItems.map(items => (
                    <CartItems item={items} key={items.id} />
                  ))}
                </tbody>
              </table>
              <div className="cart-total">
                <h1>Subtotal: ${props.total}.00</h1>
                <p>Shipping & taxes calculated at checkout</p>
                <StripeButton price={props.total} />
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
  state.cartReducer.cart.map(item => {
    return (newTotal += item.price);
  });

  return {
    cartItems: state.cartReducer.cart,
    total: newTotal
  };
};

export default connect(
  mapStateToProps,
  null
)(CartPage);
