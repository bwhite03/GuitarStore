import React from "react";
import "./item-page.styles.scss";
import { connect } from "react-redux";
import { addItem } from "../../store/actions/cartActions";

const ItemPage = props => {
  let id = parseInt(props.match.params.item_id);
  let currentItem = props.item.filter(item => {
    return item.id === id;
  });
  currentItem = currentItem[0];
  return (
    <div className="product-item">
      <h1>{currentItem.title}</h1>
      <div className="item-container">
        <div className="product-img">
          <img src={currentItem.itemImg} alt="guitar" />
        </div>
        <div className="product-info">
          <div className="product-description">
            <h1>Product Description</h1>
            <p>{currentItem.description}</p>
          </div>
          <div className="product-in-stock">
            <h1>In Stock & Ready to Ship</h1>
            <p>
              Most orders placed before noon ET ship same day (except weekends
              and holidays)
            </p>
          </div>
          <div className="product-icons">
            <p>
              <i className="fas fa-headphones-alt" /> Protect Your Gear
            </p>
            <p>
              <i className="fas fa-shipping-fast" /> Free Shipping
            </p>
            <p>
              <i className="fas fa-globe-americas" /> International Shipping
            </p>
            <p>
              <i className="fas fa-undo" /> Returns Up To 30 Days
            </p>
          </div>
          <div className="product-brand">
            <img src={currentItem.logo} alt="logo" />
          </div>
        </div>
        <div className="product-cart">
          <div className="product-questions">
            <h1>Have Questions?</h1>
            <p>
              Call Us <i className="fas fa-phone" /> 555-555-5555
            </p>
            <p>
              Call our experts for product info and phone-only specials or chat
              now.
            </p>
          </div>
          <div className="product-add-to-cart">
            <h1>Price:</h1>
            <h2>${currentItem.price}</h2>
            <button
              onClick={
                props.cartItem.includes(currentItem.id)
                  ? null
                  : props.addItem.bind(null, currentItem)
              }
            >
              Add to Cart
            </button>
            {props.cartItem.includes(currentItem.id) && (
              <h1>Item is in cart</h1>
            )}
          </div>
          <div className="product-shipping">
            <i className="fas fa-store-alt" />
            <div className="product-shipping-container">
              <h1>Ship to Store:</h1>
              <p>Available for Pick Up: 3-5 business days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  let itemId = state.cartReducer.cart.map(item => item.id);
  return {
    cartItem: itemId,
    item: state.filterReducer.products
  };
};

export default connect(
  mapStateToProps,
  { addItem }
)(ItemPage);
