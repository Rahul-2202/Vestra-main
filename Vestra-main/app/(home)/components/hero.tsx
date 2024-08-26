// create hero compnent
import React from "react";
import AnimatedText from "./AnimateText";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center  xl:pb-5 space-y-2 md:space-y-3">
      <h1 className="text-5xl md:text-6xl lg:text-6xl xl:pb-2 font-semibold font-ttfir">
        Agent Systems
      </h1>
      <h2 className="text-5xl md:text-6xl lg:text-6xl font-semibold xl:pb-5 font-ttfir text-center items-center flex gap-2">
        Made {<AnimatedText />}
      </h2>
      <p className="text-[#BFBFBF] text-base md:text-xl lg:text-2xl font-normal">
        Build, deploy and monetize AI agent systems in minutes
      </p>
    </div>
  );
};
