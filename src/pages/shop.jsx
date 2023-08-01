import React, { useContext, useEffect, useState } from "react";
import { useProductContext } from "../context/context";
import { Link } from "react-router-dom";

const Shop = () => {
  const { state, dispatch } = useProductContext();
  let { products, isloading, error, cartState } = state;
  const [filterproduct, setFilterproduct] = useState("");

  // const filteredProducts = (productCategory) => {
  //   const filteredResult = products.map((product) => {
  //     if (product.category === productCategory) {
  //       setFilterproduct(filteredResult);
  //     }
  //     return filteredProducts;
  //   });
  // };

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

  // const handleCategoryFilter = (category) => {
  //   setSelectedCategory(category);
  //   filterData(search, category);
  // };

  // const filterData = (searchTerm, category) => {
  //   let filteredItems = products;

  //   if (searchTerm) {
  //     filteredItems = filteredItems.filter((item) =>
  //       item.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   }

  //   if (category) {
  //     filteredItems = filteredItems.filter((item) =>
  //       item.category.toLowerCase().includes(category.toLowerCase())
  //     );
  //   }
  //   setFilteredData(filteredItems);
  // };

  return (
    <>
      <div className="shop">
        <div className="shop-topscreen">
          <h1 className="shop-ts-header">
            <span>50%</span> Off On All Products
          </h1>
          <p>Make Your Order Now We Will Deliver...</p>
        </div>
        <div className="shop-body">
          {/* <div className="filter-section">
            <h1 className="filter-header">Filter Products</h1>
            <div className="filter-prod">
              <button
                onClick={() =>
                  dispatch({
                    type: "FILTER_PRODUCTS",
                    payload: {
                      id: products.id,
                      category: products.category,
                    },
                  })
                }
              >
                Men's Clothing
              </button>
            </div>
          </div> */}
          <div className="shop-content">
            <div className="filter-prod">
              <h1>Filter Products</h1>
              <div className="categories">
                {/* <button
                  onClick={() =>
                    dispatch({
                      type: "FILTER_PRODUCTS",
                      payload: products,
                    })
                  }
                >
                  Men
                </button> */}
              </div>
            </div>
            {error && <div>Something went wrong</div>}
            <div className="item">
              {isloading ? (
                <div>Loading...</div>
              ) : (
                products.length &&
                products.map((product) => (
                  // <Link to={`/dynamicroute/${product.id}`}>
                  <div className="product" key={product.id}>
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
                  // </Link>
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
