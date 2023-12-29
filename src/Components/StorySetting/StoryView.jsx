import React, { useEffect, useCallback } from "react";
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
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextStory = useCallback(() => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex((prevIndex) => prevIndex + 1);
      setActiveIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentStoryIndex(0);
      setActiveIndex(0);
    }
  }, [currentStoryIndex, stories.length]);

  useEffect(() => {
    const interval = setInterval(handleNextStory, 4000);

    return () => clearInterval(interval);
  }, [handleNextStory]);

  return (
    <div className="relative w-full">
      <StoryViewBlock>
        <StoryMedia src={stories?.[currentStoryIndex].image} />
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
