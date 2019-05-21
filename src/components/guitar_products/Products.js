import React from "react";
import Sort from "./Sort";
import Items from "./Items";
import { connect } from "react-redux";

const Products = props => {
  return (
    <section className="products">
      <Sort />
      <div className="items-container">
        {props.products.map((items, index) => (
          <Items item={items} key={index} />
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    products: state.filterReducer.products
  };
};

export default connect(
  mapStateToProps,
  null
)(Products);
