import React, { useContext, useEffect } from "react";
import { useProductContext } from "../context/context";

const Shop = () => {
  const { state, dispatch } = useProductContext();
  let { products, isloading, error } = state;
  console.log(products);

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
                <img width={200} src={product.image} alt="" />
                <h2>{product.title}</h2>
                <p>{product.category}</p>
                <p>{product.description}</p>
                {/* <p>{product.rating}</p> */}
                <p>${product.price}</p>
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: product })
                  }
                >
                  Add to cart
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
