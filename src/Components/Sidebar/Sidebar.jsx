import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from "./SidebarSetting";
import { useNavigate } from "react-router-dom";
import MainPostFill from "../../Components/MainPosts/MainPostFill";
import { useDisclosure } from "@chakra-ui/react";
import SearchSetting from "../SearchSetting/SearchSetting";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTab, setActiveTab] = useState("");
  const navMenu = useNavigate();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const itemClick = (title) => {
    setActiveTab(title);
    if (title === "Профіль") {
      navMenu("/username");
    } else if (title === "Головна") {
      navMenu("/");
    } else if (title === "Створити") {
      onOpen();
    }
    if (title === "Пошук") {
      setIsSearchVisible(true);
    } else setIsSearchVisible(false);
  };

  return (
    <div className="sticky top-0 h-[100vh] flex">
      <div className={`flex flex-col justify-between h-full ${activeTab==="Пошук"?"px-2":"px-10"}`}>
        {<div>
          {activeTab !== "Пошук" && <div className="pt-10">
            <img
              className="w-40"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
              alt=""
            />
          </div>}
          <div className="mt-10">
            {menu.map((item) => (
              <div
                onClick={() => itemClick(item.title)}
                className="flex items-center mb-5 cursor-pointer text-lg"
              >
                {activeTab === item.title ? item.activeIcon : item.icon}
                {activeTab !== "Пошук" && <p
                  className={`${
                    activeTab === item.title ? "font-bold" : "font-semibolt"
                  }`}
                >
                  {item.title}
                </p>}
              </div>
            ))}
          </div>
        </div>}
        <div className="flex item-center cursor-pointer pb-10">
          <IoReorderThreeOutline className="text-2xl" />
          {activeTab !== "Пошук" && <p className="ml-5">Більше</p>}
        </div>
      </div>
      <MainPostFill onClose={onClose} isOpen={isOpen} />
      {isSearchVisible && <SearchSetting />}
    </div>
  );
};

export default Sidebar;
