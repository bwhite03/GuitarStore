import React from "react";
import Sort from "./Sort";
import Items from "./Items";
import { connect } from "react-redux";

const Products = props => {
  return (
    <section className="products">
      <Sort />
      <div className="items-container">
        {props.filteredProducts.map((items, index) => (
          <Items item={items} key={index} />
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  let newData = state.filterReducer.products;
  if (state.filterReducer.type !== "all") {
    newData = newData.filter(item => item.type === state.filterReducer.type);
  }
  if (state.filterReducer.price !== "all") {
    newData = newData.filter(item => item.price >= state.filterReducer.price);
  }
  if (state.filterReducer.brand !== "all") {
    newData = newData.filter(item => item.brand === state.filterReducer.brand);
  }
  return {
    filteredProducts: newData
  };
};

export default connect(
  mapStateToProps,
  null
)(Products);
