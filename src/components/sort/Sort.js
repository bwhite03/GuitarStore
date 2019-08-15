import React from "react";
import "./sort.styles.scss";
import { connect } from "react-redux";
import { selectSort } from "../../store/actions/filterActions";
import { Link } from "react-router-dom";

const Sort = props => {
  return (
    <div className="sort">
      <div className="sort-header">
        <Link to="/">
          <i className="fas fa-home" />
        </Link>

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
