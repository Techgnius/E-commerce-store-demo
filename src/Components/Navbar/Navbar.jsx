import React, { useContext, useRef } from "react";
import { useProductContext } from "../../context/context";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { state, dispatch } = useProductContext();
  let { cartState } = state;
  const navRef = useRef();
  const showNavRef = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  const removeNavRef = () => {
    navRef.current.classList.remove("responsive-nav");
  };

  return (
    <header>
      <div className="logo">
        <label>
          <Link to="/">
            Tech<span>Gnius</span>
          </Link>
        </label>
      </div>
      <div className="navbar">
        <nav ref={navRef} onClick={removeNavRef}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/signup">
            <i className="fa-solid fa-user"></i>
          </Link>
          <Link to="/cart">
            <i className="bx bxs-cart cart-q">
              <span className="cartstate-length">{cartState.length}</span>
            </i>
          </Link>
          <span onClick={showNavRef}>
            <i className="fa-solid fa-x menu-bar close-bar"></i>
          </span>
        </nav>
        <span onClick={showNavRef}>
          <i className="fa-solid fa-bars menu-bar"></i>
        </span>
      </div>
    </header>
  );
};

export default Navbar;
