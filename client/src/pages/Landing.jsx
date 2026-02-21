import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
import main from "../assets/images/main.jpg";
import { motion } from "framer-motion";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav className="nav-center">
        <Logo />
      </nav>

      <div className="container page">
        {/* Main Hero Content */}
        <div className="info">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Job <span>Tracking</span> Made Simple
          </motion.h1>

          <p>
            Stop losing track of your career progress.{" "}
            <strong>JobLinker</strong> is a powerful, intuitive platform
            designed to organize your job search and help you land your dream
            role faster.
          </p>

          <div className="btn-container">
            <Link to="/register" className="btn btn-primary">
              Get Started Free
            </Link>
            <Link to="/login" className="btn btn-secondary">
              Sign In
            </Link>
          </div>
        </div>

        {/* Visual Element */}
        <div className="main-img-container">
          <motion.div
            className="img-overlay"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={main} alt="job search" className="img main-img" />
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
