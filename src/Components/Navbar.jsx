import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
        <Link to="/cart">
          <i className="bx bxs-cart"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
