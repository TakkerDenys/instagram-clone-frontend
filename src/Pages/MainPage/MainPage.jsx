import React from "react";
import StoryCircle from "../../Components/Story/StoryCircle";
import MainArticle from "../../Components/MainArticle/MainArticle";
import MainPosts from "../../Components/MainPosts/MainPosts";

const MainPage = () => {
  return (
    <div>
      <div className="mt-10 flex w[100%] justify-center">
        <div className="w-[60%] px-10">
          <div className="story flex space-x-2 p-4 rounded-md justify-start w-full">
            {[1, 1, 1].map((item) => (
              <StoryCircle />
            ))}
          </div>
          <div className="space-y-10 w-full mt-10">
            {[1, 1].map((item) => (
              <MainPosts />
            ))}
          </div>
        </div>
        <div className="w-[35%]">
          <MainArticle />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
