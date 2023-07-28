import React from "react";
import videoBg from "../videos/backgroundVideo.mp4";

const About = () => {
  return (
    <>
      <div className="about">
        <video src={videoBg} autoPlay loop muted />
        <div className="aboutUs">
          <h1 className="aboutUs-header">About Us</h1>
          <p className="aboutUs-text">
            We are a reliable and authentic brand with speedy delivery on
            products purchased from our platform. Our goal is to ensure that our
            customers are satisfied by providing professional and topnotch
            services. We constantly give discounts on our products and loyal
            customers also get coupons, therefore, the more you shop on our
            platform the more benefits you would receive from us. We try as best
            as we can to keep delivery fees down to the bare minumum, some
            products even get delivered for free depending on the terms and
            conditions applicable to that product. Patronise us today and start
            a life time healthy customer relationship with us!
          </p>
          <div className="go-to-shop-btn">
            <button className="shop-link-btn" type="button">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
