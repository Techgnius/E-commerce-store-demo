import { useContext, useEffect, useState } from "react";
import { useProductContext } from "./context/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./pages/about";
import Blog from "./pages/blog";
import Cart from "./pages/cart";
import Shop from "./pages/shop";
import Login from "./pages/login";
import Signup from "./pages/signup";
import DynamicRoute from "./pages/dynamicroute";
import Footer from "./Components/Footer/Footer";

function App() {
  const [currentForm, setCurrentForm] = useState("Login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
        <Route path="/DynamicRoute/:id" element={<DynamicRoute />} />
          <Route
            path="/signup"
            element={
              currentForm === "Login" ? (
                <Login onFormswitch={toggleForm} />
              ) : (
                <Signup onFormswitch={toggleForm} />
              )
            }
          />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
