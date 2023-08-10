import React, { Children, createContext, useContext, useReducer } from "react";
import { initial_state, productReducer } from "../reducer/reducer";
import { initial_filterstate, filterReducer } from "../reducer/reducer";

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initial_state);
  const [filterstate, filterdispatch] = useReducer(
    filterReducer,
    initial_filterstate
  );

  return (
    <ProductContext.Provider
      value={{ state, dispatch, filterstate, filterdispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
