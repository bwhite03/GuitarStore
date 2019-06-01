import React from "react";
import { Link } from "react-router-dom";

const Items = props => {
  return (
    <Link to={"/" + props.item.id}>
      <div className="items-item">
        <div className="item-img">
          <img src={props.item.image} alt="guitar" />
        </div>
        <div className="title-price">
          <h2>{props.item.title}</h2>
          <h3>${props.item.price}</h3>
        </div>
        {/* <button>Add To Cart</button> */}
      </div>
    </Link>
  );
};

export default Items;
