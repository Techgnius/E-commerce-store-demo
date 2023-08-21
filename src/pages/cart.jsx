import React, { useState, useEffect, useContext } from "react";
import { useProductContext } from "../context/context";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { state, dispatch } = useProductContext();
  const { products, cartState } = state;

  //Calculate the total price of items in the cart
  useEffect(() => {
    setTotal(
      cartState.reduce(
        (acc, curr) => acc + Number(curr.price) * curr.quantity,
        0
      )
    );
  }, [cartState]);

  return (
    <div className="cart-wrapper">
      <div className="cart-items">
        {cartState.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt="item.name" width={135} />
            <p>{item.category}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <select
              className="item-count"
              value={item.quantity}
              onChange={(event) => {
                dispatch({
                  type: "CHANGE_ITEM_QUANTITY",
                  payload: {
                    id: item.id,
                    quantity: event.target.value,
                  },
                });
              }}
            >
              {[...Array(10).keys()].map((number) => {
                const num = number + 1;
                return (
                  <option value={num} key={num}>
                    {num}
                  </option>
                );
              })}
            </select>
            <span
              className="item-del-btn"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item,
                })
              }
            >
              <i className="bx bxs-trash"></i>
            </span>
          </div>
        ))}
      </div>
      <div className="cart-total">
        {cartState.length > 0 ? (
          <div className="cart-item-quantity">
            You Have {cartState.length} Item(s) In Your cart
          </div>
        ) : (
          <div className="cart-item-quantity">Your Cart is Empty</div>
        )}
        <p className="item-total">Subtotal: ${total}</p>
        <button type="button" className="checkout-btn">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
