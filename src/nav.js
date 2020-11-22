import React from "react";
import logo from "./images/logo.svg";

const navToggler = () => {
  var x = document.querySelectorAll(".nav-ul");
  var y = document.querySelector(".hr-nav");
  y.classList.toggle("hidden");
  for (let i = 0; i < x.length; i++) {
    x[i].classList.toggle("responsive");
  }
};

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="Site logo" />
      </div>
      <div className="nav-list">
        <div className="nav-main">
          <ul className="nav-ul">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <hr className="hr-nav hidden" />
          <ul className="nav-ul">
            <li>Login</li>
            <li className="sign-up">Sign Up</li>
          </ul>
        </div>

        <div className="icon" onClick={navToggler}>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
