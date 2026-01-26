import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="chanuka" />
        <FormRow type="text" name="lastname" defaultValue="randitha" />
        <FormRow type="text" name="Location" defaultValue="laxapana" />
        <FormRow type="email" name="email" defaultValue="chanuka@gmail.com" />
        <FormRow type="password" name="password" defaultValue="chanuka" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
