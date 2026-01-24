import React from "react";
import logo from "../assets/images/logo.png";
const Logo = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="joblinker" className="w-40 h-20 object-contain" />
      </nav>
    </div>
  );
};

export default Logo;
