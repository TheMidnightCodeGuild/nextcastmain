import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaSnapchat,
  FaPinterest,
  FaWhatsapp,
  FaTelegram,
  FaChartBar,
  FaAd,
  FaSearch,
  FaFileAlt,
  FaVideo,
  FaCamera,
  FaPalette,
  FaTrademark,
  FaBullhorn,
  FaUsers,
  FaChartLine,
  FaRocket,
  FaFire,
  FaHashtag,
  FaHeart,
  FaUserFriends,
  FaChartPie,
  FaSeedling,
  FaExchangeAlt,
  FaPercentage,
  FaChartArea,
} from "react-icons/fa";

const Test = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full overflow-hidden md:h-[90vh] h-[28rem] relative flex justify-end items-center flex-col bg-black text-white border-b-2">
      {/* Spinning Social Media & Marketing Icons Circle */}
      <motion.div
        animate={{ rotate: 400 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex items-center justify-center absolute md:top-3/4 top-1/2"
      >
        <div className="relative w-[30rem] h-[30rem] md:h-96 md:w-96 rounded-full flex justify-center items-center">
          {[...Array(31)].map((_, index) => {
            const angle = (index * 360) / 30;
            const icons = [
              { Icon: FaInstagram, color: "#E4405F" },
              { Icon: FaFacebook, color: "#1877F2" },
              { Icon: FaTwitter, color: "#1DA1F2" },
              { Icon: FaLinkedin, color: "#0A66C2" },
              { Icon: FaYoutube, color: "#FF0000" },
              { Icon: FaTiktok, color: "#000000" },
              { Icon: FaSnapchat, color: "#FFFC00" },
              { Icon: FaPinterest, color: "#E60023" },
              { Icon: FaWhatsapp, color: "#25D366" },
              { Icon: FaTelegram, color: "#26A5E4" },
              { Icon: FaChartBar, color: "#4CAF50" },
              { Icon: FaAd, color: "#FF9800" },
              { Icon: FaSearch, color: "#2196F3" },
              { Icon: FaFileAlt, color: "#607D8B" },
              { Icon: FaVideo, color: "#F44336" },
              { Icon: FaCamera, color: "#9C27B0" },
              { Icon: FaPalette, color: "#673AB7" },
              { Icon: FaTrademark, color: "#3F51B5" },
              { Icon: FaBullhorn, color: "#FF5722" },
              { Icon: FaUsers, color: "#795548" },
              { Icon: FaChartLine, color: "#009688" },
              { Icon: FaRocket, color: "#E91E63" },
              { Icon: FaFire, color: "#FF5722" },
              { Icon: FaHashtag, color: "#00BCD4" },
              { Icon: FaHeart, color: "#F44336" },
              { Icon: FaUserFriends, color: "#8BC34A" },
              { Icon: FaChartPie, color: "#CDDC39" },
              { Icon: FaSeedling, color: "#4CAF50" },
              { Icon: FaExchangeAlt, color: "#FFC107" },
              { Icon: FaPercentage, color: "#9E9E9E" },
              { Icon: FaChartArea, color: "#03A9F4" },
            ];
            const { Icon, color } = icons[index];

            return (
              <motion.div
                key={index}
                className="absolute rounded-full p-3"
                style={{
                  transform: `rotate(${angle}deg) translate(${
                    isMobile ? "2rem" : "36rem"
                  })`,
                  transformOrigin: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                }}
              >
                <Icon
                  className="md:w-12 md:h-12 w-6 h-6 rotate-90"
                  style={{ color: color }}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Decorative Circles */}
      <div className="flex justify-center items-center absolute top-full translate-y-1/2 scale-[2.5]">
        <div className="md:h-[22rem] h-36 md:w-[22rem] w-36 mx-auto absolute border-[1px] border-[#AFFE14] rounded-full animate-pulse"></div>
        <div className="md:h-[19rem] md:w-[19rem] w-28 h-28 mx-auto absolute border-[1px] border-[#AFFE14] rounded-full"></div>
        <div className="md:h-64 md:w-64 h-20 w-20 mx-auto absolute border-[1px] border-[#AFFE14] rounded-full"></div>
        <div className="md:h-64 md:w-64 h-20 w-20 mx-auto absolute bg-[#AFFE14]/20 rounded-full backdrop-blur-sm"></div>
      </div>

      {/* Background Gradient */}
      <div className="from-20% via-30% to-90% to-transparent absolute bottom-0 w-full z-0 h-full"></div>

      {/* Content Section */}
      <div className="w-full flex justify-center items-center flex-col pb-20 px-4">
        <button className="inline-flex items-center text-sm rounded-full py-2 px-4 bg-black/80 border border-[#AFFE14] z-20 hover:bg-[#AFFE14] hover:text-black transition-all duration-300">
          <span className="h-2.5 w-2.5 rounded-full bg-[#AFFE14] mr-2"></span>
          <span>Our Services</span>
        </button>

        <h1 className="text-white md:text-6xl text-4xl text-center my-6 md:leading-[4rem] font-bold z-20 bg-gradient-to-r from-[#AFFE14] to-white bg-clip-text text-transparent">
          Elevate Your Digital Presence
        </h1>

        <p className="font-normal max-w-4xl text-center z-20 my-6 md:text-lg text-sm text-gray-300">
          Transform your brand with our cutting-edge social media management and
          content creation services. From viral campaigns to engaging content,
          we help you connect with your audience and drive real results.
        </p>

        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium bg-[#AFFE14] text-black shadow-lg hover:bg-[#8BFF14] px-8 py-3 z-20 transition-all duration-300 hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Test;
