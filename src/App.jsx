import { useContext, useEffect, useState } from "react";
import { useProductContext } from "./context/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./pages/about";
import Blog from "./pages/blog";
import Cart from "./pages/cart";
import Shop from "./pages/shop";
import Signup from "./pages/signup";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
