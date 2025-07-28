import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const Banner = () => {
  const [direction, setDirection] = useState("left");
  const [speed, setSpeed] = useState(40);

  const promises = [
    {
      title: "Clear Communication and Reporting",
      description: "Regular updates and transparent reporting on campaign performance",
    },
    {
      title: "Tailored Strategies",
      description: "Customized solutions aligned with your business goals",
    },
    {
      title: "Guaranteed Views",
      description: "Proven track record of delivering targeted audience reach",
    },
    {
      title: "High Production Value",
      description: "Premium quality content that elevates your brand",
    },
    {
      title: "Customer Satisfaction",
      description: "Committed to exceeding client expectations",
    },
    {
      title: "Long Term Partnership",
      description: "Building lasting relationships through consistent results",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(prev => prev === "left" ? "right" : "left");
      setSpeed(prev => Math.random() * 30 + 30); // Random speed between 30-60
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-4 bg-[#000000]">
      <Marquee
        gradient={false}
        speed={speed}
        direction={direction}
        className="bg-[#000000] py-5 mb-2 rounded-full "
      >
        <div className="flex space-x-16 mx-8">
          {promises.map((promise, index) => (
            <span
              key={index}
              className="text-[#fffff0] text-lg font-bold whitespace-nowrap hover:text-[#AFFE14] transition-colors duration-300"
            >
              {promise.title}
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Banner;
