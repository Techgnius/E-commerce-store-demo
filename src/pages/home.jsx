import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/context";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BlogImg1 from "../images/blog-pic1.jpg";
import BlogImg2 from "../images/blog-pic2.jpg";
import BlogImg3 from "../images/blog-pic3.jpg";
import BlogImg4 from "../images/blog-pic4.jpg";
import SalesImg from "../images/item1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const { state, dispatch } = useProductContext();
  let { products, isloading, error, cartState } = state;
  const featuredProducts = products.slice(0, 6);

  const fetchData = async () => {
    dispatch({ type: "START_FETCH" });
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch({ type: "FETCH_SUCCESSFUL", payload: data });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="homeContainer">
      <div className="home-screen">
        <h1 data-aos="fade-down">
          Get Quality,Trendy And
          <br /> Affordable Products
        </h1>
        <h4 data-aos="fade-right">
          Guaranteed to leave a big smile
          <br /> on your face
        </h4>
        <p data-aos="fade-right">Save more today with TechGnius Store.</p>
        <button type="button" className="shop-btn" data-aos="fade-up">
          <Link to="/shop">Shop Now</Link>
        </button>
      </div>
      <div className="quick-ad">
        <marquee>
          Get <span>50%</span> discount on all our products this Summer! Offers
          are valid while stock lasts. Don't miss out on this opportunity!...
        </marquee>
      </div>
      <div className="values-con" data-aos="fade-right">
        <div className="value-card">
          <i className="bx bx-dollar"></i>
          <h4>
            True Moneyback
            <br /> Guarantee
          </h4>
          <p>
            Ordered a wrong product? Get
            <br /> your money back, no problem.
          </p>
        </div>
        <div className="value-card">
          <i className="bx bxs-truck"></i>
          <h4>
            1-Day Free Fast
            <br /> Delivery
          </h4>
          <p>
            Get free next day delivery
            <br /> on orders over $100 within Lagos.
          </p>
        </div>
        <div className="value-card">
          <i className="bx bxs-bank"></i>
          <h4>
            Exceptional Value
            <br /> Savings
          </h4>
          <p>
            Aggressive pricing for compatible
            <br /> official products.
          </p>
        </div>
        <div className="value-card">
          <i className="bx bx-store"></i>
          <h4>
            Guaranteed Product
            <br /> Quality
          </h4>
          <p>
            We work only with official suppliers
            <br /> from all major manufacturers.
          </p>
        </div>
        <div className="value-card">
          <i className="bx bxs-phone-call"></i>
          <h4>
            Friendly 24/7
            <br /> Customer Support
          </h4>
          <p>
            You can easily contact us
            <br /> by phone call or email.
          </p>
        </div>
      </div>
      <div className="featured-prod">
        <div className="header">
          <h1 data-aos="flip-right">
            Featured <span>Products</span>
          </h1>
        </div>
        <div className="featured-p">
          <Carousel responsive={responsive}>
            {featuredProducts.map((featured) => (
              <div
                className="item-card-con"
                data-aos="zoom-in"
                key={featured.id}
              >
                <div className="item-card">
                  <img width={150} src={featured.image} alt="" />
                  <p>{featured.category}</p>
                  <p>Rating:{featured.rating.rate}</p>
                  <p>${featured.price}</p>
                  {cartState.find((cart) => cart.id === featured.id) ? (
                    <button
                      className="item-btn"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: featured,
                        })
                      }
                      style={{ backgroundColor: "red", borderRadius: 7 }}
                    >
                      REMOVE FROM CART
                    </button>
                  ) : (
                    <button
                      className="item-btn"
                      onClick={() =>
                        dispatch({ type: "ADD_TO_CART", payload: featured })
                      }
                      style={{ borderRadius: 7 }}
                    >
                      ADD TO CART
                    </button>
                  )}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="summer-sales">
        <div className="sales-wrapper">
          <div className="sales-text">
            <h4 data-aos="zoom-in">Summer Sales!</h4>
            <p data-aos="fade-right">
              50% Off on All Products And Accessories.
              <br /> Don't miss out on this oppurtunity.
            </p>
            <button type="button" className="sales-btn" data-aos="fade-up">
              <Link to="/shop">Explore Now</Link>
            </button>
          </div>
          <div className="sales-img">
            <img src={SalesImg} width={300} alt="sales-img" />
          </div>
        </div>
      </div>
      <div className="blog">
        <div className="header">
          <h1 data-aos="fade-left">
            Our Customers <span>Feedbacks</span>
          </h1>
          <p data-aos="fade-right">
            We love it when our customers give us feedbacks...
          </p>
        </div>
        <div className="blog-card-container">
          <div className="blog-card" data-aos="zoom-out">
            <img src={BlogImg2} width={250} height={230} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
              vel enim. Laborum nisi eaque commodi fugiat quos blanditiis autem
              doloribus eveniet quia esse.
            </p>
            <button type="button" className="blog-btn">
              Read More
            </button>
          </div>
          <div className="blog-card" data-aos="zoom-out">
            <img src={BlogImg1} width={250} height={230} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
              vel enim. Laborum nisi eaque commodi fugiat quos blanditiis autem
              doloribus eveniet quia esse.
            </p>
            <button type="button" className="blog-btn">
              Read More
            </button>
          </div>
          <div className="blog-card" data-aos="zoom-out">
            <img src={BlogImg3} width={250} height={230} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
              vel enim. Laborum nisi eaque commodi fugiat quos blanditiis autem
              doloribus eveniet quia esse.
            </p>
            <button type="button" className="blog-btn">
              Read More
            </button>
          </div>
          <div className="blog-card" data-aos="zoom-out">
            <img src={BlogImg4} width={250} height={230} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
              vel enim. Laborum nisi eaque commodi fugiat quos blanditiis autem
              doloribus eveniet quia esse.
            </p>
            <button type="button" className="blog-btn">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <div className="newsletter-con">
          <div className="newsletter-text">
            <h3 data-aos="fade-right">Sign Up for a newsletter</h3>
            <p data-aos="fade-right">
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
                data-aos="fade-left"
              />
              <button type="button" className="news-l-btn" data-aos="fade-left">
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
