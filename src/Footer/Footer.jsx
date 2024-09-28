import React from "react";
import "./Footer.css"; // Create this CSS file for custom styles

const Footer = ({logofooter , faicon , linicon , twiticon }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logofooter} alt="Flora Logo" className="logo-img" />
          <p>
            Lorem ipsum dolor sit amet, consectetur <br/> 
            adipiscing elit. Imperdiet
            tempus <br/> felis vitae sit est quisque.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Service</h4>
            <ul>
              <li><a href="/">Payment & Tax</a></li>
              <li><a href="/">Features</a></li>
              <li><a href="/">View Booking</a></li>
              <li><a href="/">Support</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">News</a></li>
              <li><a href="/">Pricing</a></li>
              <li><a href="/">New Property</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Our Location</h4>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
            <div className="social-icons">
              <a href="/"><img src= {faicon}alt="Facebook" className="icon" /></a>
              <a href="/"><img src={twiticon} alt="Twitter" className="icon" /></a>
              <a href="/"><img src={linicon} alt="LinkedIn" className="icon" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
        <p12>Copyright 2024 Flora. All Rights Reserved</p12>
        </div>
       
        <div className="footer-bottom-links">
          <a href="/">Terms & Conditions</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
