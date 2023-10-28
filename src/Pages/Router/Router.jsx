import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import Profile from "../Profile/Profile";
import AuthPage from "../AuthPage/AuthPage";

const Router = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/singup" && (
        <div className="flex">
          <div className="w-[25%] border border-l-slate-500">
            <Sidebar />
          </div>
          <div className="w-full">
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/username" element={<Profile />}></Route>
            </Routes>
          </div>
        </div>
      )}
      {(location.pathname === "/login" || location.pathname === "/singup") && (
        <div>
          <Routes>
            <Route path="/signup" element={<AuthPage />}></Route>
            <Route path="/login" element={<AuthPage />}></Route>
          </Routes>
        </div>
      )}
    </div>
  );
};

export default Router;
