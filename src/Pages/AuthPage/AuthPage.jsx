import React from "react";
import "./AuthPage.css";
import SingIn from "../../Components/Auth/SingIn";

const AuthPage = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div>
        <div className="relative hidden lg:block">
          <div className="h-[35.3rem] w-[23rem]">
            <img className="h-fuul w-full" src="/img/phone_login.png" alt="" />
            <div className="phone_slider h-[33rem] w-[15.7rem] absolute top-6 right-3"></div>
          </div>
        </div>
        <div>
          <SingIn />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
