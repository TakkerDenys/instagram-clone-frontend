import React from "react";
import "./AuthPage.css";
import SingIn from "../../Components/Auth/SingIn";
import SingUp from "../../Components/Auth/SingUp";
import { useLocation } from "react-router-dom";

const AuthPage = () => {
  const location = useLocation();
  return (
    <div className="">
      <div className="flex items-center justify-center h-[100vh] space-x-5">
        <div className="relative hidden lg:block">
          <div className="h-[35.3rem] w-[23rem]">
            <img className="h-full w-full" src="/img/phone_login.png" alt="" />
            <div className="phone_slider h-[33rem] w-[15.7rem] absolute top-6 right-3"></div>
          </div>
        </div>
        <div className="w-[40vw] lg:w-[23vw]">
            {location.pathname==="/login" ? <SingIn /> : <SingUp />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
