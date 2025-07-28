"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Aboutbanner() {
  return (
    <div className="min-h-[15rem] md:h-[25rem] pt-44 md:pt-40 w-full bg-black flex flex-col items-center justify-center overflow-hidden px-4">
      <h1 className="text-3xl md:text-7xl lg:text-7xl uppercase font-semibold text-center text-white relative z-20">
        Career
      </h1>
      <div className="w-full md:w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-4 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-4 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
