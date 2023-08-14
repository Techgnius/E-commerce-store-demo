import React, { useContext, useEffect, useState } from "react";
import { useProductContext } from "../context/context";

const Shop = () => {
  const { state, dispatch, filterstate, filterdispatch } = useProductContext();
  let { products, isloading, error, cartState } = state;
  const { sort, searchQuery } = filterstate;

  const transformProducts = () => {
    let sortedProduts = products;
    if (sort) {
      sortedProduts = sortedProduts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (searchQuery) {
      sortedProduts = sortedProduts.filter((prod) =>
        prod.category.toLowerCase().includes(searchQuery)
      );
    }

    let handleToast = () => {
      toastRef.current.displayToast();
    };

    return sortedProduts;
  };

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
      <div className="shop">
        <div className="shop-topscreen">
          <h1 className="shop-ts-header" data-aos="fade-down">
            <span>50%</span> Off On All Products
          </h1>
          <p data-aos="fade-up">Make Your Order Now We Will Deliver...</p>
        </div>
        <div className="shop-body">
          <div className="filter-section">
            <h1 className="filter-header">Filter Products</h1>
            <form>
              <input
                type="radio"
                value="ascending"
                className="filter-check"
                onChange={() =>
                  filterdispatch({
                    type: "SORT_BY_PRICE",
                    payload: "lowToHigh",
                  })
                }
                checked={sort === "lowToHigh" ? true : false}
              />
              <label>Ascending</label>
              <br />
              <input
                type="radio"
                value="descending"
                className="filter-check"
                onChange={() => {
                  filterdispatch({
                    type: "SORT_BY_PRICE",
                    payload: "highToLow",
                  });
                }}
                checked={sort === "highToLow" ? true : false}
              />
              <label>Descending</label>
              <br />
              <button
                type="button"
                className="filter-btn"
                onClick={() =>
                  filterdispatch({
                    type: "CLEAR_FILTER",
                  })
                }
              >
                Clear Filter
              </button>
            </form>
          </div>
          <div className="shop-content">
            <div className="shop-content-top">
              <div className="search-input">
                <form>
                  <span>
                    <i class="bx bx-search"></i>
                    <input
                      type="text"
                      className="search-prod"
                      placeholder="Search Product Category..."
                      onChange={(event) =>
                        filterdispatch({
                          type: "FILTER_BY_SEARCH",
                          payload: event.target.value,
                        })
                      }
                    />
                  </span>
                </form>
              </div>
            </div>
            {error && <div>Something went wrong</div>}
            <div className="item">
              {isloading ? (
                <div>Loading...</div>
              ) : (
                products.length &&
                transformProducts().map((product) => (
                  <div className="product" key={product.id} data-aos="zoom-in">
                    <div className="item-card">
                      <img width={200} src={product.image} alt={product.name} />
                      <p>{product.category}</p>
                      <p>Rating:{product.rating.rate}</p>
                      <p>${product.price}</p>
                      {cartState.find((cart) => cart.id === product.id) ? (
                        <button
                          className="item-btn"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: product,
                            })
                          }
                          style={{ backgroundColor: "red", borderRadius: 7 }}
                        >
                          Remove From Cart
                        </button>
                      ) : (
                        <button
                          className="item-btn"
                          onClick={() =>
                            dispatch({
                              type: "ADD_TO_CART",
                              payload: product,
                            })
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
        </div>
      </div>
    </>
  );
};

export default Shop;
