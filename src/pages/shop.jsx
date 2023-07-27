import React, { useContext, useEffect } from "react";
import { useProductContext } from "../context/context";

const Shop = () => {
  const { state, dispatch } = useProductContext();
  let { products, isloading, error, cartState } = state;

  // console.log(featuredProducts);
  const fetchData = async () => {
    dispatch({ type: "START_FETCH" });
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch({ type: "FETCH_SUCCESSFUL", payload: data });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="app">
        {error && <div>Something went wrong</div>}
        <div className="item">
          {isloading ? (
            <div>Loading...</div>
          ) : (
            products.length &&
            products.map((product) => (
              <div className="product" key={product.id}>
                <div className="item-card">
                  <img width={200} src={product.image} alt="" />
                  {/* <h2>{product.title}</h2> */}
                  <p>{product.category}</p>
                  {/* <p>{product.description}</p> */}
                  <p>Rating:{product.rating.rate}</p>
                  <p>${product.price}</p>
                  {cartState.find((cart) => cart.id === product.id) ? (
                    <button
                      className="item-btn"
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: product })
                      }
                      style={{ backgroundColor: "red", borderRadius: 7 }}
                    >
                      Remove From Cart
                    </button>
                  ) : (
                    <button
                      className="item-btn"
                      onClick={() =>
                        dispatch({ type: "ADD_TO_CART", payload: product })
                      }
                      style={{ borderRadius: 7 }}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
