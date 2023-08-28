import React from "react";
import { Link } from "react-router-dom";
import AboutImage from "../images/about-img.jpg";

const About = () => {
  return (
    <>
      <div className="about-us">
        <div className="about-topscreen">
          <h1 data-aos="flip-right">
            Get To Know <span>Us</span>...
          </h1>
          <p data-aos="zoom-in">
            We have got the best products
            <br /> and services for you.
          </p>
        </div>
        <div className="about-content">
          <h1 data-aos="fade-down">
            About <span>Us</span>
          </h1>
          <div className="about-card">
            <div className="about-img" data-aos="fade-right">
              <img src={AboutImage} alt="about-img" />
            </div>
            <div className="about-txt">
              <p data-aos="fade-left">
                We are a reliable and authentic brand with speedy delivery on
                products purchased from our platform. Our gooal is to ensure
                that our customers are satisfied by providing professional and
                topnotch services. We constantly give discounts on our products
                and loyal customers get coupons, therefore,the more you shop
                here the more benefits you get from us. Our delivery fees are
                really affordable. Some deliveries can even be free depending on
                the terms and conditions applicable to that product.Patronise us
                today and start a life time healthy customer relationship with
                us.
              </p>
              <button type="button" className="shop-btn" data-aos="fade-up">
                <Link to="/shop">Start Shopping</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
