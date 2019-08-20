import React, { Component } from "react";
import "./products.styles.scss";
import Sort from "../sort/Sort";
import Items from "../items/Items";
import { connect } from "react-redux";
import { fetchData } from "../../store/actions/filterActions";

class Products extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <section className="products">
        <Sort />
        <div className="items-container">
          {this.props.filteredProducts.map((items, index) => (
            <Items item={items} key={index} />
          ))}
        </div>
      </section>
    );
  }
}

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
  if (state.filterReducer.sort === "ascending") {
    newData = newData.slice().sort((a, b) => a.price - b.price);
  }
  if (state.filterReducer.sort === "descending") {
    newData = newData.slice().sort((a, b) => b.price - a.price);
  }
  return {
    filteredProducts: newData
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(Products);
