import React from "react";
import Recommended from "./Recommended";

const MainArticle = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div>
              <img
                className="w-12 h-12 rounded-full"
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1701993600&semt=sph"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p>username</p>
            </div>
          </div>
          <div>
            <p className="text-blue-500 text-sm font-semibold">Перейти</p>
          </div>
        </div>
        <div className="space-y-5 mt-10">
          {[1, 1, 1, 1].map((item) => (
            <Recommended />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainArticle;
