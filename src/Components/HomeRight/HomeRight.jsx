import React from "react";
import { BsDot } from "react-icons/bs";
import { useSelector } from "react-redux";
import SuggestionsUserCard from "./SuggestionsUserCard";

const HomeRight = ({suggestedUser}) => {
  const {user}=useSelector(store=>store);
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center ">
            <img
              className="w-12 h-12 rounded-full"
              src={ user.reqUser?.image ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
              alt=""
            />
            <div className="ml-3">
              <p>{user.reqUser?.username}</p>
              <p className="opacity-70">{user.reqUser?.username}</p>
            </div>
          </div>
          <p className="text-blue-600 font-semibold">Перейти</p>
        </div>
        <div className="flex justify-between py-5 items-center">
          <p className="font-semibold opacity-70">Рекомендовані для вас</p>
          <p className="text-xs font-semibold opacity-95">Переглянути всіх</p>
        </div>

        <div className="space-y-5">
          {suggestedUser.map((item, index) => (
            <SuggestionsUserCard
              key={index}
              image={
                item.userImage || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              username={item.username}
              description={"Стежить за вами"}
            />
          ))}
        </div>
        <div className="opacity-60 text-xs flex items-center flex-wrap mt-10">
            <span>Інформація</span>
            <BsDot/>
            <span>Довідка</span>
            <BsDot/>
            <span>Преса</span>
            <BsDot/>
            <span>API</span>
            <BsDot/>
            <span>Вакансії</span>
            <BsDot/>
            <span>Конфіденційність</span>
            <BsDot/>
            <span>Умови</span>
            <BsDot/>
            <span>Розташування</span>
            <BsDot/>
            <span>Мова</span>
            <BsDot/>
            <span>Meta Verified</span>
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
