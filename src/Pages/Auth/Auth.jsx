import React from "react";
import { useLocation } from "react-router-dom";
import Signin from "../../Components/Register/Signin";
import Signup from "../../Components/Register/Singup";
import "./Auth.css" 

const Auth = () => {
  const location=useLocation();
  return (
    <div>
     
        <div class="flex items-center justify-center h-[100vh]">
          <div className="relative mr-10 hidden lg:block">
            <div className=" h-[35.3rem] w-[23rem]">
              <img
              className="h-full w-full"
              src="./img/phone_login.png"
              alt="Instagram Homepage"
            />
            <div className="mobileWallpaper rounded-3xl absolute top-6 h-[33rem] w-[15.7rem] w- right-3">
            </div>

            </div>
            
          </div>

          <div className="form md:w-[35vw] lg:w-[22vw]">

            {location.pathname === "/login" ? <Signin/> :  <Signup/>}
           
          </div>
        </div>
      </div>
    
  );
};

export default Auth;