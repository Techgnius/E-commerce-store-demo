import React, { useState, useEffect } from "react";
import { useProductContext } from "../context/context";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// import Backbutton from "../Components/Backbutton/Backbutton"

const DynamicRoute = () => {
  const { state, dispatch } = useProductContext();
  let { products, isloading, error, cartState } = state;
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const searchItem = products.find((item) => item.numericCode === id);
    setProduct(searchItem);
  }, []);
  console.log(product);
  return (
    <>
      <div className="dynamicroute">{/* <Backbutton /> */}</div>
    </>
  );
};

export default DynamicRoute;
