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
            <div class="dev-authentication">
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
          <div className="install-app">
            <h3 className="dwld-details-header">Install App</h3>
            <p className="app-download-details">
              Available on google play Services and App Store
            </p>
            <p className="google-play">
              <i className="bx bxl-play-store"></i>
              <b>Google Play</b>
            </p>
            <p className="app-store">
              <i className="bx bxl-apple"></i>
              <b>App Store</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
