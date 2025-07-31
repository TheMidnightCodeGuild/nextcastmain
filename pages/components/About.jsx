"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutUs = () => {
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate video
    gsap.fromTo(
      videoRef.current,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate content
    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-[80vh] md:min-h-screen bg-gradient-to-b from-black to-black text-[#fffff0] py-10 mt-5 mb-10"
    >
      <div className="lg:max-w-[1300px] mx-auto px-4 mt-14 border-4 border-[#AFFE14] rounded-3xl">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-32 items-center mb-6 sm:mb-10">
          <div
            ref={videoRef}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden"
          >
            <video
              src="/images/about.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div ref={contentRef} className="order-1 md:order-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-2 sm:mb-4">
              About Nexcast
            </h1>
            <div className="h-1 sm:h-1.5 w-16 sm:w-20 md:w-28 bg-[#AFFE14] rounded-full mx-0 mb-3 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 italic">
              We are a creative content consultancy dedicated to empowering
              brands through strategic content solutions and insightful
              guidance. Specializing in crafting compelling narratives and
              implementing data-driven strategies, we help brands connect
              authentically with their target audiences, amplify engagement, and
              achieve measurable growth.
            </p>
            <p className="text-base sm:text-lg text-gray-300 italic">
              Our consultative approach combines creativity with analytics,
              enabling brands to refine their messaging, unlock new
              opportunities, and elevate their digital presence. With a proven
              track record of delivering impactful content strategies and
              creative direction, we are the trusted partner for brands aiming
              to transform their content into meaningful business outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
