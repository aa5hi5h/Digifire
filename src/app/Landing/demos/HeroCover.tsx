"use client"
import React from "react";
import { Cover } from "@/components/ui/cover";

const HeroText = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-6xl 
        font-semibold 
        max-w-7xl 
        mx-auto 
        md:text-center 
        relative 
        z-20 
        bg-clip-text 
        text-transparent bg-gradient-to-b from-white via-slate-300 to-slate-500">
        Elevate your brand with <br /> 
        <Cover>Digifire Marketing Services</Cover>
      </h1>
    </div>
  )
}

export default HeroText;