import React from "react";
import { connect } from "react-redux";
import { selectSort } from "../../actions/filterActions";

const Sort = props => {
  return (
    <div className="sort">
      <div className="sort-header">
        <i className="fas fa-home" />
        <h2>Products</h2>
      </div>
      <div className="sort-body">
        <div>
          <label className="sort-label">Sort:</label>
          <select className="sort-filter" onChange={props.selectSort}>
            <option value="ascending">Price: Ascending</option>
            <option value="descending">Price: Descending</option>
          </select>
        </div>
        <div className="sort-icons">
          <i className="fas fa-bars" />
          <i className="fas fa-th" />
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  {
    selectSort
  }
)(Sort);
