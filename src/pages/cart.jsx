import React, { useState, useEffect, useContext } from "react";
import { useProductContext } from "../context/context";

const Cart = () => {
  const { state, dispatch } = useProductContext();
  let { products, cartState } = state;
  let { increaseQuantity, setIncreaseQuantity } = useState();
  console.log(cartState);

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cartState.reduce(
        (acc, curr) => acc + Number(curr.price) * curr.quantity,
        0
      )
    );
  }, []);

  // let increaseItemQuantity = (itemId) => {
  //   setIncreaseQuantity((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  // };

  // const increaseQuantity = (productId) => {
  //   const updatedCart = cartState.map((item) => {
  //     if (item.id === productId && item.quantity) {
  //       const newQuantity = item.quantity + 1;
  //       return {
  //         ...item,
  //         quantity: newQuantity,
  //       };
  //     }
  //   });
  //   dispatch({ type: "UPDATE_CART", payload: updatedCart });
  // };

  return (
    <div className="wrapper">
      <div className="cart">
        {cartState.map((item) => (
          <div className="card" key={item.id}>
            <div className="item-img">
              <img width={200} src={item.image} alt="" />
            </div>
            <h2>{item.title}</h2>
            <p>{item.category}</p>
            {/* <p>{item.description.slice(0, 13)}</p> */}
            <p>Rating:{item.rating.rate}</p>
            <p>${item.price}</p>
            <div className="update-quatity">
              {/* <label>Update Item Quantity:</label>
              <input
                placeholder="Update Item Quantity"
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_ITEM_QUANTITY",
                    payload: {
                      id: item.id,
                      quantity: e.target.value,
                    },
                  })
                }
              /> */}
            </div>
            <button
              onClick={() => increaseItemQuantity(item.id)}
              className="increase-qty"
            >
              +
            </button>
          </div>
        ))}
      </div>
      <div className="cart state">
        <div className="body">
          {cartState.length === 0 ? (
            <div>Your Cart it Empty</div>
          ) : (
            <div>You Have {cartState.length} Item(s) In Your Cart</div>
          )}
          <span className="total-item">Total Amount: ${total}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
