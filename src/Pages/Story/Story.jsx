import React from "react";
import StoryView from "../../Components/StorySetting/StoryView";

const Story = () => {
  const story = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Waterfall_at_Arthur%27s_Pass_National_Park.jpg/800px-Waterfall_at_Arthur%27s_Pass_National_Park.jpg",
    },
    {
      image:
        "https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg",
    },
  ];
  return (
    <div>
      <StoryView stories={story} />
    </div>
  );
};

export default Story;
