import React from "react";
import Nav from "./nav";
import headerImage from "./images/illustration-working.svg";

const Header = () => {
  return (
    <header>
      <Nav />
      <div className="header-content">
        <img
          src={headerImage}
          alt="illustration-working"
          className="header-image"
        />

        <div className="header-main">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>

          <button>Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
