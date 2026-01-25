import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import error1 from "../assets/images/error.jpg";

const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={error1} alt="not found" />
        <h3>Ohh! page not found</h3>
        <p>we can't seem to find the page you are looking for</p>
        <Link to="/dashboard">back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
