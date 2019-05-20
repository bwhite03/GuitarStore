import React from "react";

const Items = () => {
  return (
    <div className="items-container">
      <div className="items-item">
        <div className="item-img">
          <img src="img/featured/slider1.jpg" />
        </div>
        <div className="title-price">
          <h2>Gibson Les Paul Standard '60s Electric Guitar</h2>
          <h3>$100.00</h3>
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Items;
