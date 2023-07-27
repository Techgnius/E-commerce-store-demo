import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/context";
import BlogImg1 from "../images/blog-pic1.jpg";
import BlogImg2 from "../images/blog-pic2.jpg";
import BlogImg3 from "../images/blog-pic3.jpg";
import BlogImg4 from "../images/blog-pic4.jpg";

const Home = () => {
  const { state, dispatch } = useProductContext();
  let { products, isloading, error, cartState } = state;
  const featuredProducts = products.slice(0, 4);
  console.log(featuredProducts);
  return (
    <div className="home-container">
      <div className="home">
        <div className="home-screen">
          <h1>Quality And Affordable Products</h1>
          <h4>
            Guaranteed to leave a big smile
            <br /> on your face
          </h4>
          <p>Save more today with Techgnius</p>
          <button type="button" className="shop-btn">
            Shop Now
          </button>
        </div>
      </div>
      <div className="featured-prod">
        <div className="header">
          <h1>Featured Products</h1>
        </div>
        <div className="items">
          {featuredProducts.map((featured) => (
            <div className="featured-item" key={featured.id}>
              <div className="item-card">
                <img width={150} src={featured.image} alt="" />
                {/* <p>{featured.title}</p> */}
                <p>{featured.category}</p>
                <p>Rating:{featured.rating.rate}</p>
                <p>${featured.price}</p>
                {cartState.find((cart) => cart.id === featured.id) ? (
                  <button
                    className="item-btn"
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: featured })
                    }
                    style={{ backgroundColor: "red", borderRadius: 7 }}
                  >
                    Remove From Cart
                  </button>
                ) : (
                  <button
                    className="item-btn"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: featured })
                    }
                    style={{ borderRadius: 7 }}
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="summer-sales">
        <h4>Summer Sales!</h4>
        <p>
          <span>50%</span> Off on All Products And Accessories
        </p>
        <button type="button" className="sales-btn">
          Explore Now
        </button>
      </div>
      <div className="blog">
        <div className="header">
          <h1>Our Customers Feedbacks</h1>
          <p>We love it when our customers give us feedbacks...</p>
        </div>
        <div className="blog-card-container">
          <div className="blog-card">
            <img src={BlogImg2} width={250} height={230} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
              vel enim. Laborum nisi eaque commodi fugiat quos blanditiis autem
              doloribus eveniet quia esse.
            </p>
            <button type="button" className="blog-btn">
              Learn More
            </button>
          </div>
          <div className="blog-card">
            <img src={BlogImg1} width={250} height={230} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
              vel enim. Laborum nisi eaque commodi fugiat quos blanditiis autem
              doloribus eveniet quia esse.
            </p>
            <button type="button" className="blog-btn">
              Learn More
            </button>
          </div>
          <div className="blog-card">
            <img src={BlogImg3} width={250} height={230} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
              vel enim. Laborum nisi eaque commodi fugiat quos blanditiis autem
              doloribus eveniet quia esse.
            </p>
            <button type="button" className="blog-btn">
              Learn More
            </button>
          </div>
          <div className="blog-card">
            <img src={BlogImg4} width={250} height={230} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
              vel enim. Laborum nisi eaque commodi fugiat quos blanditiis autem
              doloribus eveniet quia esse.
            </p>
            <button type="button" className="blog-btn">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <div className="newsletter-con">
          <div className="newsletter-text">
            <h3>Sign Up for a newsletter</h3>
            <p>
              Get email updates on all our
              <span className="news-l-text"> special offers</span>!
            </p>
          </div>
          <div className="newsletter-form">
            <form>
              <input
                type="email"
                className="signUp-email"
                placeholder="@mail.com..."
              />
              <button type="button" className="news-l-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
