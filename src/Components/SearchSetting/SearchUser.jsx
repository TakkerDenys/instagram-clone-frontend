import React from "react";

const SearchUser = () => {
  return (
    <div className="py-2 cursor-pointer">
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full"
          src="https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt=""
        />

        <div className="ml-3">
          <p>username</p>
          <p className="opacity-70">Повне імʼя</p>
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
