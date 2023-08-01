import React, { useState, useEffect, useContext } from "react";
import { useProductContext } from "../context/context";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { state, dispatch } = useProductContext();
  let { products, isloading, error, cartState } = state;

  console.log(cartState);

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
              <button
                type="button"
                onClick={() =>
                  dispatch({
                    type: "UPDATE_ITEM_QUANTITY",
                    payload: {
                      id: item.id,
                      quantity: item.quantity,
                    },
                  })
                }
              >
                Add
              </button>
              <button
                type="button"
                onClick={() =>
                  dispatch({
                    type: "REDUCE_ITEM_QUANTITY",
                    payload: {
                      id: item.id,
                      quantity: item.quantity,
                    },
                  })
                }
              >
                Reduce
              </button>
            </div>
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
