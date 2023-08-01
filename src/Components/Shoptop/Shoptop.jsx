import React from "react";
import { useProductContext } from "../context/context";

const ShopTop = () => {
  const { state, dispatch } = useProductContext();
  let { products, isloading, error, cartState } = state;
  const [filterproduct, setFilterproduct] = useState("");

  const filteredProducts = (productCategory) => {
    const filteredResult = products.map((product) => {
      if (product.category === productCategory) {
        setFilterproduct(filteredResult);
      }
    });
  };

  return <>{products.map((products) => {})}</>;
};

export default ShopTop;
