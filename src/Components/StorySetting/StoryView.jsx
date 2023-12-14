import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import StoryEvolve from "./StoryEvolve";

const StoryViewBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;
const StoryMedia = styled.img`
  max-height: 90vh;
  object-fit: contain;
`;

const StoryView = ({ stories }) => {
  const [curentStoryIndex, setCurentStoryIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextStory = () => {
    if (curentStoryIndex < stories.length - 1) {
      setCurentStoryIndex(curentStoryIndex + 1);
      setActiveIndex(activeIndex + 1);
    } else if (curentStoryIndex === stories.length - 1) {
      setCurentStoryIndex(0);
      setActiveIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextStory();
    }, 4000);
    return () => clearInterval(interval);
  }, [curentStoryIndex]);

  return (
    <div className="relative w-full">
      <StoryViewBlock>
        <StoryMedia src={stories?.[curentStoryIndex].image} />
        <div className="absolute top-0 flex w-full">
          {stories.map((item, index) => (
            <StoryEvolve
              key={index}
              duration={4000}
              index={index}
              activeIndex={activeIndex}
            />
          ))}
        </div>
      </StoryViewBlock>
    </div>
  );
};

export default StoryView;
