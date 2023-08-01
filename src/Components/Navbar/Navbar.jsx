import React, { useContext } from "react";
import { useProductContext } from "../../context/context";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { state, dispatch } = useProductContext();
  let { products, isloading, cartState } = state;
  return (
    <div className="navbar">
      <div className="logo">
        <label>
          Tech<span>Gnius</span>
        </label>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/signup">
          <i className="fa-solid fa-user"></i>
        </Link>
        <Link to="/cart">
          <i className="bx bxs-cart"></i>
          {cartState.length} Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
