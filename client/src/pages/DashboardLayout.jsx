import React, { createContext, useContext, useState } from "react";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSideBar, SmallSideBar, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const DashboardContext = createContext();
const DashboardLayout = () => {
  const user = { name: "chanuka" };
  const [showSideBar, setShowSideBar] = useState(false);
  const [isDarkTheame, setIsDarkTheame] = useState(false);

  const toggleDarkTheam = () => {
    console.log("toggle dark theam");
  };

  const toggleSidebar = () => {
    setShowSideBar(!showSideBar);
  };
  const logoutUser = async () => {
    console.log("logout user");
  };
  return (
    <DashboardContext.Provider value={user,toggleDarkTheam,toggleSidebar,logoutUser,showSideBar,isDarkTheame}>
    <Wrapper>
      <main className="dashboard">
        <SmallSideBar />
        <BigSideBar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () =>useContext(DashboardContext);


export default DashboardLayout;
