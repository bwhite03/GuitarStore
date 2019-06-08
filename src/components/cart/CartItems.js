import React from "react";

const CartItems = props => {
  return (
    <tr>
      <td>
        <i className="fas fa-trash-alt" />
      </td>
      <td>
        <img src={props.item.image} />
      </td>
      <td className="cartItem-title">{props.item.title}</td>
      <td>${props.item.price}</td>
      <td>1</td>
    </tr>
  );
};

export default CartItems;
