import React from "react";

const Sort = () => {
  return (
    <div className="sort">
      <div className="sort-header">
        <i className="fas fa-home" />
        <h2>Products</h2>
      </div>
      <div className="sort-body">
        <div>
          <label className="sort-label">Sort:</label>
          <select className="sort-filter">
            <option value="ascending">Price: Ascending</option>
            <option value="descending">Price: Descending</option>
            <option value="a-z">A to Z</option>
            <option value="z-a">Z to A</option>
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

export default Sort;
