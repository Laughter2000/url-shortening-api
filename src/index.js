import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line
import $ from "jquery";
// eslint-disable-next-line
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import { render } from "react-dom";
import "./style.css";
import Header from "./header";
import Form from "./form";
import Feature from "./features";
import Footer from "./footer";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Form />
      <Feature />
      <Footer />
    </div>
  );
};

render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
