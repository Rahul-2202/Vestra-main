// "use client";

// import { ChangeEvent, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { features } from "../../config/features.json";
// import { footerIcons } from "../../config/common-config.json";
// import { toast } from "sonner";
// import { Header } from "./components/header";
// import { Hero } from "./components/hero";
// import { FeatureCards } from "./components/feature-cards";
// import { Footer } from "./components/footer";

// const HomePage = () => {
//   const [email, setEmail] = useState("");

//   const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const joinWaitlist = () => {
//     if (email.length === 0) {
//       toast.warning("Almost there! Just need a valid email.");
//       return;
//     }
//     toast.success("You’re on the waitlist! Big things coming soon. 🎉");
//     setEmail("");
//   };

//   return (
//     <div className="min-h-screen text-white flex flex-col px-4 md:px-6 lg:px-8 max-w-[1312px] relative mx-auto">
//       <Header />
//       <main className="flex flex-grow flex-col items-center justify-center text-center lg:py-8 gap-3 md:py-6">
//         <Hero />
//         <div className="flex w-[90%] max-w-[653px] border border-[#2F2E2D] lg:h-14 h-[48px] items-center rounded-[100px] bg-[#0f0f0f] pl-6 pr-[2px] py">
//           <Input
//             type="email"
//             placeholder="Enter your email address"
//             className="flex-grow mr-2 border-0 focus-visible:ring-transparent shadow-none font-ttfir text-xl"
//             onChange={handleEmailChange}
//             value={email}
//             onKeyDown={(e) => e.key === "Enter" && joinWaitlist()}
//           />
//           <Button
//             variant="outline"
//             className="border-[#E52D27] lg:py-4 md:py-3 lg:px-6 md:px-4 bg-transparent hover:bg-transparent text-base lg:rounded-[36px] md:rounded-[36px] lg:h-12 md:h-[40px] lg:w-[200px] md:w-[160px] text-white hover:text-white font-ttfir"
//             onClick={joinWaitlist}
//           >
//             Join Waitlist
//           </Button>
//         </div>

//         <FeatureCards />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;

"use client";

import { ChangeEvent, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { features } from "../../config/features.json";
import { toast } from "sonner";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { FeatureCards } from "./components/feature-cards";
import { Footer } from "./components/footer";

const HomePage = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const joinWaitlist = () => {
    if (email.length === 0) {
      toast.warning("Almost there! Just need a valid email.");
      return;
    }
    toast.success("You’re on the waitlist! Big things coming soon. 🎉");
    setEmail("");
  };
  // overflow-y-scroll md:overflow-hidden scrollbar-hide

  return (
    <div className="min-h-screen text-white flex flex-col justify-between px-4 md:px-6 lg:px-8 max-w-[1312px] mx-auto">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
        <Hero />
        <div className="flex w-full max-w-[653px] items-center border border-[#2F2E2D] h-[48px] md:h-14 rounded-[100px] bg-[#0f0f0f] pl-4 ">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow border-0 focus-visible:ring-transparent shadow-none font-ttfir text-base md:text-xl"
            onChange={handleEmailChange}
            value={email}
            onKeyDown={(e) => e.key === "Enter" && joinWaitlist()}
          />
          <Button
            variant="outline"
            className="border-[#E52D27] py-2 md:py-3 px-4 md:px-6 bg-transparent hover:bg-transparent text-base rounded-[36px] h-[40px] md:h-12 text-white hover:text-white font-ttfir"
            onClick={joinWaitlist}
          >
            Join Waitlist
          </Button>
        </div>
        <FeatureCards />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

