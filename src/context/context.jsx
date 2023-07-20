import React, { Children, createContext, useContext, useReducer } from "react";
import { initial_state, productReducer } from "../reducer/reducer";

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initial_state);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
