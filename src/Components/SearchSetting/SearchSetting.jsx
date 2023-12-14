import React from "react";
import "./SearchSetting.css";
import SearchUser from "./SearchUser";

const SearchSetting = () => {
  return (
    <div className="searchBlock">
      <div className="px-3 pb-5">
        <h1 className="text-xl pb-5">Пошук</h1>
        <input className="searchInput" type="text" placeholder="Пошук" />
      </div>
      <div className="px-3 pt-3">
      <p>Недавні</p>
        {[1, 1, 1, 1, 1].map((item) => (
          <SearchUser />
        ))}
      </div>
    </div>
  );
};

export default SearchSetting;
