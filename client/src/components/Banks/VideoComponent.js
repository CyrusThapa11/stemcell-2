import React from "react";
import { render } from "react-dom";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
const VideoComponent = () => {
  return (
    <div className=" flex items-center justify-center flex-col bg-teal-600 pb-20 rounded-md">
      <h1 className="text-4xl px-5 pt-10 pb-10 flex justify-center font-serif text-slate-50 font-medium ">
        Can stem cells shape the future of medicine ? | Esther Wolfs | TEDx
        UHasselt
      </h1>
      <div className="w-[50vw] h-[100%] rounded-md">
        <LiteYouTubeEmbed
          aspectHeight={7}
          aspectWidth={10}
          id="ZkTH05BOR5M"
          title="Can stem cells shape the future of medicine? | Esther Wolfs | TEDxUHasselt"
        />
      </div>
    </div>
  );
};

export default VideoComponent;
