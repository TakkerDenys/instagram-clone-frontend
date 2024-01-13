import React, { useEffect } from "react";
import { Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HomePage from "../HomePage/HomePage";
import Profile from "../Profile/Profile";
import StoryPage from "../../Components/Demo/Demo";
import Story from "../Story/Story";
import EditProfilePage from "../EditProfile/EditProfilePage";
import Auth from "../Auth/Auth";

const Routers = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");

  useEffect(() => {
    if (!isAuthenticated && location.pathname !== "/login" && location.pathname !== "/signup") {
      navigate("/login");
    }
  }, [isAuthenticated, location.pathname, navigate]);

  return (
    <div>
      {isAuthenticated ? (
        <div className="flex">
          <div className="sidebarBox border border-l-slate-500 w-[20%]">
            <Sidebar />
          </div>
          <div className="w-[80%]">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/p/:postId" element={<HomePage />} />
              <Route path="/:username" element={<Profile />} />
              <Route path="/demo" element={<StoryPage />} />
              <Route path="/story/:userId" element={<Story />} />
              <Route path="/account/edit" element={<EditProfilePage />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route
            path="/login"  // Оновлено шлях
            element={isAuthenticated ? <Navigate to="/" /> : <Auth />}
          />
          <Route
            path="/signup"  // Оновлено шлях
            element={isAuthenticated ? <Navigate to="/" /> : <Auth />}
          />
        </Routes>
      )}
    </div>
  );
};

export default Routers;