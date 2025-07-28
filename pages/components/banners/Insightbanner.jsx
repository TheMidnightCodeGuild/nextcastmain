"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export default function Webbanner() {
  return (
    <div className="min-h-[15rem] md:h-[25rem] pt-44 md:pt-44 w-full bg-black flex flex-col items-center justify-center overflow-hidden  px-4">
      <h1 className="text-3xl md:text-7xl lg:text-6xl uppercase font-semibold text-center text-white relative z-20">
        Web Design & Development
      </h1>
      <div className="w-full md:w-full h-full relative">
        {/* Gradients */}
        <div className="absolute inset-x-4 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[4px] w-[90%] mx-auto blur-sm" />
        <div className="absolute inset-x-4 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-[90%] mx-auto" />
        <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-[60%] mx-auto blur-sm" />
        <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-[60%] mx-auto" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={1}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#fffff0"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
