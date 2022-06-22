import React from "react";
import PropTypes from "prop-types";

import "./Login.css";

import LoginEnterCard from "./LoginEnterCard";
import LoginFooter from "./LoginFooter";

const Login = ({ signup }) => (
  <div className="login_container">
    <div className="login_container_layer">
      <div className="login_header_logo">
        <a href="/">
          <h2>EntertainmentHub</h2>
        </a>
      </div>
      <LoginEnterCard signup={signup} />
      <LoginFooter />
    </div>
  </div>
);

Login.propTypes = {
  signup: PropTypes.bool,
};

Login.defaultProps = {
  signup: false,
};

export default Login;
