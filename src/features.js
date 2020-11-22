import React from "react";
import Brand from "./images/icon-brand-recognition.svg";
import Detail from "./images/icon-detailed-records.svg";
import Full from "./images/icon-fully-customizable.svg";

const Feature = () => {
  return (
    <section>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div className="features">
        <div className="feature-item">
          <div className="feature-img">
            <img src={Brand} alt="" />
          </div>

          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div className="hr-div"></div>

        <div className="feature-item feature-second">
          <div className="feature-img">
            <img src={Detail} alt="" />
          </div>

          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="hr-div"></div>

        <div className="feature-item feature-third">
          <div className="feature-img">
            <img src={Full} alt="" />
          </div>

          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>

      <div className="booster">
        <div>
          <h2> Boost your links today</h2>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Feature;
