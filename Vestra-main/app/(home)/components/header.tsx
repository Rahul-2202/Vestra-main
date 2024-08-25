import { Button } from "@/components/ui/button";
import Image from "next/image";
import AnimatedText from "./AnimateText";

// export const Header = () => {
//   return (
//     <>
//       <header className="flex justify-center md:justify-between md:px-[56px] items-center lg:py-3 md:py-2 md:pb-2">
//         <div className="flex items-center justify-center gap-1">
//           <div className="w-10 h-10 md:w-[60px] md:h-[60px]">
//             <Image
//               height={60}
//               width={60}
//               src="assets/images/vestra.svg"
//               alt="logo"
//             />
//           </div>
//           <span className="font-fauna lg:text-3xl md:text-[28px] gradient-text font-thin">
//             VESTRA
//           </span>
//         </div>
//         <Button
//           variant="outline"
//           className="border-[#E52D27] lg:py-4 lg:px-6 md:py-3 md:px-4 bg-transparent hover:bg-transparent text-base rounded-[80px] lg:h-[56px] lg:w-[148px] md:h-[48px] md:w-[128px] text-white hover:text-white font-ttfir hidden md:block"
//         >
//           Join Waitlist
//         </Button>
//       </header>
//     </>
//   );
// };

export const Header = () => {
  return (
    <header className="flex justify-center md:justify-between items-center p-4 md:px-[56px] ">
      <div className="flex items-center justify-center gap-1">
        <div className="w-12 h-12 md:w-[4rem] md:h-[4rem]">
          <Image
            height={60}
            width={60}
            src="/assets/images/vestra.svg"
            alt="logo"
          />
        </div>
        <span className="font-fauna text-2xl md:text-3xl gradient-text font-thin">
          VESTRA
        </span>
      </div>
      <Button
        variant="outline"
        className="border-[#E52D27] py-2 px-4 md:py-2 md:px-4 md:h-12 bg-transparent hover:bg-transparent hover:text-white text-base text-center rounded-[80px] hidden md:block"
      >
        Join Waitlist
      </Button>
    </header>
  );
};
