import React, { useEffect, useState } from "react";
import { TbCircleDashed } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { followUserAction, unFollowUserAction } from "../../Redux/User/Action";
// import { isReqUser } from '../../Config/Logic'

const UserDetailCard = ({ user, isRequser, isFollowing }) => {

  const token = localStorage.getItem("token");
  const { post } = useSelector((store) => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isFollow,setIsFollow]=useState(false);

  const goToAccountEdit = () => {
    navigate("/account/edit");
  };

  console.log("user --- ", user);
  

  const data = {
    jwt: token,
    userId: user?.id,
  };

  const handleFollowUser = () => {
    dispatch(followUserAction(data));
    console.log("follow");
    setIsFollow(true)
  };

  const handleUnFollowUser = () => {
    dispatch(unFollowUserAction(data));
  };

  useEffect(()=>{
setIsFollow(isFollowing)
  },[isFollowing])

  return (
    <div className="py-10">
      <div className="flex items-center">
        <div className="w-[15%]">
           <img
          className="w-32 h-32 rounded-full"
          src={
            user?.image ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt=""
        />
        </div>
       

        <div className="ml-10 space-y-5 text-xs">
          <div className=" flex space-x-10 items-center">
            <p className="text-base">{user?.username}</p>
            <button className="text-xs py-1 px-5 bg-slate-100 hover:bg-slate-300 rounded-md font-semibold">
              {isRequser ? (
                <span onClick={goToAccountEdit}>Редагувати профіль</span>
              ) : isFollow ? (
                <span onClick={handleUnFollowUser}>Не стежити </span>
              ) : (
                <span onClick={handleFollowUser}>Стежити</span>
              )}
            </button>
            <button className="text-xs py-1 px-5 bg-slate-100 hover:bg-slate-300 rounded-md font-semibold">
              {isRequser ? "Додати інструменти" : "Повідомлення"}
            </button>
            <TbCircleDashed className="text-xl" />
          </div>

          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">
                {post?.reqUserPost?.length || 0}
              </span>
              <span>пости</span>
            </div>

            <div>
              <span className="font-semibold mr-2">
                {user?.follower?.length}
              </span>
              <span>читачі</span>
            </div>
            <div>
              <span className="font-semibold mr-2">
                {user?.following?.length}
              </span>
              <span>стежить</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">{user?.name}</p>
            <p className="font-thin text-sm">{user?.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailCard;
