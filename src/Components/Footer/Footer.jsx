import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-card-con">
          <div className="footer-contact">
            <h3 className="foooter-con-header">Contact</h3>
            <p className="footer-details">
              <b>Address: </b>Ajah town, Lekki Lagos.
            </p>
            <p className="footer-details">
              <b>Phone: </b>+2347069335147.
            </p>
            <p className="footer-details">
              <b>Email: </b>nedukwu@gmail.com.
            </p>
            <div className="dev-authentication">
              <p className="dev">
                Copyright &copy; 2023 by Chinedu | All Rights Reserved.
              </p>
              <div className="social-media">
                <i className="bx bxl-github"></i>
                <i className="bx bxl-twitter"></i>
                <i className="bx bxl-facebook-circle"></i>
                <i className="bx bxl-instagram"></i>
              </div>
            </div>
          </div>
          <div className="footer-about">
            <h3 className="footer-abt-header">About</h3>
            <ul>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Fee Policy</li>
            </ul>
          </div>
          <div className="footer-account">
            <h3 className="footer-act-header">Account</h3>
            <ul>
              <li>Profile</li>
              <li>View Cart</li>
              <li>Help</li>
              <li>Payments</li>
              <li>Coupons</li>
            </ul>
          </div>
          <div className="get-paid">
            <h3 className="footer-p-header">Get Paid</h3>
            <ul>
              <li>Sell on Techgnius</li>
              <li>Become a Sales Consultant</li>
              <li>Become a Logistics Service Partner</li>
              <li>Refer a Customer</li>
              <li>Buy One Get One Free</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
