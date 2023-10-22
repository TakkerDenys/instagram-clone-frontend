import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export const Comment = () => {
  const [likedComment, setLikedComment] = useState(false);

  const itemLikedComment = () => setLikedComment(!likedComment);

  return (
    <div>
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center">
          <div>
            <img
              className="w-9 h-9 rounded-full"
              src="https://i.pinimg.com/736x/1c/f4/8f/1cf48f79972f9040b5ab81433f897b2b.jpg"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p>
              <span className="font-semibold">username</span>
              <span className="ml-2">wooow</span>
            </p>
            <div className="flex items-center space-x-3 text-xs opacity-60 pt-2">
              <span>2 хв.</span>
              <span>Позначки «Подобається»: 4</span>
            </div>
          </div>
        </div>
        {likedComment ? (
          <AiFillHeart onClick={itemLikedComment} className="text-xs hover:opacity-50 cursor-pointer text-red-600" />
        ) : (
          <AiOutlineHeart onClick={itemLikedComment} className="text-xs hover:opacity-50 cursor-pointer" />
        )}
      </div>
    </div>
  );
};
