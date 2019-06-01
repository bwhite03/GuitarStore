import React from "react";
import JSON from "../../products.json";

const Item = props => {
  let id = props.match.params.item_id;
  let item = JSON[id - 1];
  console.log(item);

  return (
    <div>
      <h1>{item.brand}</h1>
    </div>
  );
};

export default Item;
