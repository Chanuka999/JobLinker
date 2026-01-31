import React, { Children } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  DashboardLayout,
  HomeLayout,
  Landing,
  Login,
  Register,
  Error,
  Admin,
} from "./pages";

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index={true} element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="dashboard"
            element={
              <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />
            }
          />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
