import React from "react";
import Facebook from "./images/icon-facebook.svg";
import Instagram from "./images/icon-instagram.svg";
import Pinterest from "./images/icon-pinterest.svg";
import Twitter from "./images/icon-twitter.svg";
import Logo from "./images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" className="footer-logo" />
      <div className="footer-main">
        <div className="footer-link">
          <p>Features</p>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div className="footer-link">
          <p>Resources</p>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div className="footer-link">
          <p>Company</p>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div className="social-icon">
          <img src={Facebook} alt="facebook-logo" />
          <img src={Twitter} alt="twitter-logo" />
          <img src={Pinterest} alt="pinterest-logo" />
          <img src={Instagram} alt="instagram-logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
