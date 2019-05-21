import React from "react";

const Items = props => {
  return (
    <div className="items-item">
      <div className="item-img">
        <img src={props.item.image} />
      </div>
      <div className="title-price">
        <h2>{props.item.title}</h2>
        <h3>${props.item.price}</h3>
      </div>
      <button>Add To Cart</button>
    </div>
  );
};

export default Items;
