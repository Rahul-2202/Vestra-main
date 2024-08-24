"use client";

import { ChangeEvent, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { features } from "../../config/features.json";
import { footerIcons } from "../../config/common-config.json";
import { toast } from "sonner";
import { Header } from "./components/header";
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

  return (
    <div className="h-screen text-white flex flex-col px-6 max-w-[1312px] relative scrollbar-hide mx-auto">
      <Header />
      <main className="flex flex-col items-center text-center lg:py-8 md:py-6">
        <div className="flex w-[90%] max-w-[653px] border border-[#2F2E2D] lg:h-14 h-[48px] items-center rounded-[100px] bg-[#0f0f0f] pl-6 pr-[2px] py">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow mr-2 border-0 focus-visible:ring-transparent shadow-none font-ttfir text-xl"
            onChange={handleEmailChange}
            value={email}
            onKeyDown={(e) => e.key === "Enter" && joinWaitlist()}
          />
          <Button
            variant="outline"
            className="border-[#E52D27] lg:py-4 md:py-3 lg:px-6 md:px-4 bg-transparent hover:bg-transparent text-base lg:rounded-[36px] md:rounded-[36px] lg:h-12 md:h-[40px] lg:w-[200px] md:w-[160px] text-white hover:text-white font-ttfir"
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

