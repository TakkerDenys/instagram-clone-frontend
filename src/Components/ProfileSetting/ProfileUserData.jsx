import React from "react";
import { IoIosSettings } from "react-icons/io";

export const ProfileUserData = () => {
  return (
    <div className="py-10 w-full">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            className="w-32 h-32 rounded-full"
            src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p>username</p>
            <button>Редагувати профіль</button>
            <IoIosSettings className="text-2xl cursor-pointer" />
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">0</span>
              <span>дописів</span>
            </div>
            <div>
              <span>Читачі:</span>
              <span className="font-semibold ml-2">0</span>
            </div>
            <div>
              <span>Стежить:</span>
              <span className="font-semibold ml-2">0</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">Повне імʼя</p>
            <p className="font-thin text-sm">Опис</p>
          </div>
        </div>
      </div>
    </div>
  );
};
