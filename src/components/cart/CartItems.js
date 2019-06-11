import React from "react";
import { connect } from "react-redux";
import { deleteItem, selectQuantity } from "../../actions/cartActions";

const CartItems = props => {
  return (
    <tr>
      <td>
        <i
          className="fas fa-trash-alt"
          onClick={props.deleteItem.bind(null, props.item.id)}
        />
      </td>
      <td>
        <img src={props.item.image} alt="cart item" />
      </td>
      <td className="cartItem-title">{props.item.title}</td>
      <td>${props.item.price}</td>
      <td>
        <input type="number" min="1" max="9" onChange={props.selectQuantity} />
      </td>
    </tr>
  );
};

export default connect(
  null,
  { deleteItem, selectQuantity }
)(CartItems);
