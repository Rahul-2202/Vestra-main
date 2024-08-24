import { Button } from "@/components/ui/button";
import Image from "next/image";
import AnimatedText from "./AnimateText";

export const Header = () => {
  return (
    <>
      <header className="flex justify-center md:justify-between md:px-[56px] items-center py-5 md:py-3 md:pb-2">
        <div className="flex items-center justify-center gap-1">
          <div className="w-10 h-10 md:w-[60px] md:h-[60px]">
            <Image
              height={60}
              width={60}
              src="assets/images/vestra.svg"
              alt="logo"
            />
          </div>
          <span className="font-fauna text-xl md:text-[28px] gradient-text font-thin">
            VESTRA
          </span>
        </div>
        <Button
          variant="outline"
          className="border-[#E52D27] py-4 px-6 md:py-3 md:px-4 bg-transparent hover:bg-transparent text-base rounded-[80px] h-[56px] w-[148px] md:h-[48px] md:w-[128px] text-white hover:text-white font-ttfir hidden md:block"
        >
          Join Waitlist
        </Button>
      </header>
      <div className="flex justify-center items-center flex-col py-3 md:py-3 md:pt-0">
        <div className="text-[80px] p-0 md:text-[68px] mb-[-5px] md:mb-[-10px] font-medium font-ttfir text-center">
          Agent Systems
        </div>
        <div className="text-[80px]  md:text-[68px] font-medium font-ttfir md:mb-[-5px] text-center flex">
          Made {<AnimatedText />}
        </div>
        <p className="text-[#BFBFBF] text-[20px] md:text-[18px] font-medium md:font-semibold font-alliance text-center">
          Build, deploy and monetize AI agent systems in minutes
        </p>
      </div>
    </>
  );
};

