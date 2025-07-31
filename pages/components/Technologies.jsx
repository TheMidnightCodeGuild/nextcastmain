"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  FaInstagram,
  FaSearch,
  FaFileAlt,
  FaEnvelope,
  FaAd,
  FaChartBar,
  FaRobot,
  FaChartLine,
  FaTrademark,
} from "react-icons/fa";

const Technologies = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate header
    gsap.fromTo(
      headerRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate cards
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1, // Reduced delay for smoother animation
        }
      );
    });
  }, []);

  const features = [
    {
      title: "Social Media Marketing",
      description:
        "Strategic social media management across platforms to build brand presence, engage audiences and drive conversions.",
      icon: FaInstagram,
    },
    {
      title: "Search Engine Optimization",
      description:
        "Data-driven SEO strategies to improve search rankings, increase organic traffic and enhance online visibility.",
      icon: FaSearch,
    },
    {
      title: "Content Marketing",
      description:
        "Compelling content creation and distribution to attract, engage and retain target audiences across channels.",
      icon: FaFileAlt,
    },
    {
      title: "Email Marketing",
      description:
        "Personalized email campaigns to nurture leads, drive engagement and maximize customer lifetime value.",
      icon: FaEnvelope,
    },
    {
      title: "Pay-Per-Click Advertising",
      description:
        "Results-focused PPC campaign management across search and social platforms to drive qualified traffic and leads.",
      icon: FaAd,
    },
    {
      title: "Analytics & Reporting",
      description:
        "Comprehensive tracking and analysis of marketing metrics to optimize performance and demonstrate ROI.",
      icon: FaChartBar,
    },
    {
      title: "Marketing Automation",
      description:
        "Automated marketing workflows to streamline processes, nurture leads and deliver personalized experiences.",
      icon: FaRobot,
    },
    {
      title: "Conversion Rate Optimization",
      description:
        "Data-driven CRO strategies to improve website performance and maximize conversion rates across funnels.",
      icon: FaChartLine,
    },
    {
      title: "Brand Strategy",
      description:
        "Strategic brand development and positioning to build strong, memorable brands that resonate with target audiences.",
      icon: FaTrademark,
    },
  ];

  return (
    <section
      id="technologies"
      className="bg-neutral-900 py-16 md:py-24 lg:py-32 lg:px-24"
    >
      <div className="max-w-7xl mx-auto ">
        <div ref={headerRef} className="text-left mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-4 uppercase">
            Our Digital Marketing Services
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            We leverage proven digital marketing strategies to help businesses
            grow their online presence and achieve measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              ref={(el) => (cardsRef.current[index] = el)}
              key={feature.title}
              className="bg-neutral-800 rounded-xl p-6 border border-neutral-600 hover:border-neutral-200 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center text-blue-400">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-neutral-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
