import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";

const SmallSideBar = () => {
  const data = useDashboardContext();
  console.log(data);

  return <Wrapper>small sidebar</Wrapper>;
};

export default SmallSideBar;
