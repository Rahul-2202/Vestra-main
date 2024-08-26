import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex justify-center md:justify-between items-center p-4 xl:pt-5 md:px-[56px] ">
      <div className="flex items-center justify-center gap-1">
        <div className="w-12 h-12 md:w-[4rem] md:h-[4rem]">
          <Image
            height={60}
            width={60}
            src="/assets/images/vestra.svg"
            alt="logo"
          />
        </div>
        <span className="font-fauna text-2xl md:text-3xl lg:text-4xl gradient-text font-thin">
          VESTRA
        </span>
      </div>
      <Button
        variant="outline"
        className="border-[#E52D27] py-2 px-4 md:py-2 md:px-4 lg:py-3 lg:px-6 md:h-12 lg:h-[3.25rem] bg-transparent hover:bg-transparent hover:text-white text-base text-center rounded-[80px] hidden md:block"
      >
        Join Waitlist
      </Button>
    </header>
  );
};
