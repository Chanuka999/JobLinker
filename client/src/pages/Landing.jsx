import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";

import { Link } from "react-router-dom";
import main from "../assets/images/main.jpg";
import { motion } from "framer-motion";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <Logo />
      <div className="container-page flex flex-col md:flex-row items-center gap-0">
        <div className="info w-full md:w-1/2 flex flex-col items-center text-center">
          <h1>
            job<span>Tracking</span>app
          </h1>

          <p className="text-bold">
            Welcome to JobLinker, your all-in-one platform for managing and
            tracking job applications. Whether you're actively looking for new
            opportunities or just exploring your options, JobLinker helps you
            stay organized and ahead of the game.
          </p>

          <div className="flex gap-4 mt-6">
            <Link to="/register" className="btn register-link">
              Register
            </Link>
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
        </div>

        <motion.img
          src={main}
          alt="job hunt"
          className="
            w-full
            md:w-1/2
            max-w-3xl
            h-86
            object-contain
            p-6
          "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.15 }}
        />
      </div>
    </Wrapper>
  );
};

export default Landing;
