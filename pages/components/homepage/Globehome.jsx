"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Cover } from "../ui/cover";

const World = dynamic(
  () => import("@/pages/components/ui/globe").then((m) => m.World),
  { ssr: false }
);

export default function GlobeDemo() {
  useEffect(() => {
    const generateStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.cssText = `
        position: fixed;
        width: ${Math.random() * 3}px;
        height: ${Math.random() * 3}px;
        background: #ffffff;
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        animation: twinkle ${Math.random() * 5 + 3}s linear infinite;
        border-radius: 50%;
        z-index: 0;
      `;
      document.body.appendChild(star);
      return star;
    };

    // Create initial stars
    const stars = Array(200).fill(null).map(generateStar);

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes twinkle {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      stars.forEach(star => star.remove());
      style.remove();
    };
  }, []);

  const globeConfig = {
    pointSize: 10,
    globeColor: "blue",
    showAtmosphere: true,
    atmosphereColor: "#4B79A1",
    atmosphereAltitude: 0.1,
    emissive: "#4B79A1",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "#1B2735",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1200,
    arcLength: 0.95,
    rings: 10,
    maxRings: 10,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 2
  };

  const colors = ["#00c6fb", "#3b82f6", "#4f46e5"];

  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.15,
      color: colors[0]
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.25,
      color: colors[1]
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.55,
      color: colors[2]
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.25,
      color: colors[0]
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.35,
      color: colors[1]
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.35,
      color: colors[2]
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.35,
      color: colors[0]
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.35,
      color: colors[1]
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.35,
      color: colors[2]
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.55,
      color: colors[0]
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.75,
      color: colors[1]
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.15,
      color: colors[2]
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.35,
      color: colors[0]
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.25,
      color: colors[1]
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.25,
      color: colors[2]
    }
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-black relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black z-0" />
      <div className="max-w-[1500px] mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4 sm:px-6 md:px-20 flex flex-col md:flex-row z-10">
        <div className="w-full md:w-1/2 flex flex-col justify-center mt-8 sm:mt-12 md:mt-56">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-[1300px] mb-8 sm:mb-10 md:mb-0 mt-20 sm:mt-32 md:mt-44 text-center md:text-left"
          >
            <h2 className="text-sm sm:text-base md:text-base font-medium bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent uppercase tracking-wider mb-3 sm:mb-4">
              Creative content marketing solutions
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-bold text-white mb-6 sm:mb-8 leading-tight uppercase">
              Helping Influencers To Get Their{" "}
              <span className="text-[#AFFE14] font-extrabold">First Brand Deal</span> & Grow{" "}
              <span className="text-[#AFFE14] font-extrabold">Faster</span> With{" "}
              <Cover className="text-[#AFFE14]">Nexcast</Cover>
            </h1>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 relative h-[700px] sm:h-[400px] md:h-auto">
          <div className="absolute w-full bottom-0 inset-x-0 h-40 z-40" />
          <div className="h-full md:mt-20 md:ml-32 -mt-8 sm:-mt-12 cursor-grab scale-75 sm:scale-90 md:scale-100">
            <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
        </div>
      </div>
    </div>
  );
}
