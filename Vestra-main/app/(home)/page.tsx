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

  const joinWaitlist = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length === 0 || !emailRegex.test(email)) {
      toast.warning("Almost there! Just need a valid email.");
      return;
    }

    try {
      console.log(JSON.stringify({ "email": email }));
      const response = await fetch(
        "https://api-hsd6yz4ala-uc.a.run.app/join_waitlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ "email": email }),
        }
      );

      if (response.ok) {
        toast.success("You’re on the waitlist! Big things coming soon. 🎉");
        setEmail("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen text-white flex flex-col justify-between px-4 md:px-6 lg:px-8 max-w-[1312px] mx-auto">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center xl:mb-12">
        <div className="2xl:py-12 flex flex-col md:items-center md:justify-center space-y-4 md:space-y-6 2xl:space-y-12">
          <Hero />
          <div className="flex w-full max-w-[652px] items-center border border-[#2F2E2D] h-[48px] md:h-14 rounded-[100px] bg-[#0f0f0f] pl-4  ">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow flex-shrink border-0 focus-visible:ring-transparent shadow-none font-ttfir text-base md:text-xl"
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

