// create hero compnent
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AnimatedText from "./AnimateText";

// export const Hero = () => {
//   return (
//     <div className="flex justify-center items-center flex-col ">
//       <div className="lg:text-[80px] p-0 md:text-[68px] text-[68px] md:mb-[-10px] font-medium font-ttfir text-center">
//         Agent Systems
//       </div>
//       <div className="lg:text-[80px]  md:text-[68px] text-[68px] font-medium font-ttfir md:mb-[-5px] text-center items-center flex">
//         Made {<AnimatedText />}
//       </div>
//       <p className="text-[#BFBFBF] lg:text-[20px] md:text-[18px] lg:font-semibold md:font-semibold font-alliance text-center">
//         Build, deploy and monetize AI agent systems in minutes
//       </p>
//     </div>
//   );
// };

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 md:space-y-3">
      <h1 className="text-5xl md:text-6xl lg:text-6xl font-semibold font-ttfir">
        Agent Systems
      </h1>
      <h2 className="text-5xl md:text-6xl lg:text-6xl font-semibold font-ttfir text-center items-center flex gap-2">
        Made {<AnimatedText />}
      </h2>
      <p className="text-[#BFBFBF] text-base md:text-xl lg:text-2xl font-normal">
        Build, deploy and monetize AI agent systems in minutes
      </p>
    </div>
  );
};
