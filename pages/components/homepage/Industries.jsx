"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const Industries = () => {
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

    // Animate industry cards
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
          delay: index * 0.1, // Smaller stagger for more cards
        }
      );
    });
  }, []);

  return (
    <>
      <section className="w-full lg:px-24 pt-12 sm:pt-16 md:pt-20 bg-black">
        {/* Header section */}
        <div
          ref={headerRef}
          className="flex flex-col justify-start items-start lg:max-w-[1200px] mx-auto pt-4 sm:pt-6 md:pt-10 px-3 sm:px-4 md:px-6 text-left"
        >
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-3 md:mb-5 uppercase leading-tight">
            Industries that we serve
          </h1>
          <p className="text-white text-xs sm:text-sm md:text-base font-normal text-left max-w-3xl sm:block hidden leading-relaxed">
            We achieved the business transformation objectives by utilising
            advanced technology to produce exceptional results.
          </p>
          <div className="w-16 sm:w-20 h-1 bg-[#AFFE14] mt-3 sm:mt-5"></div>
        </div>

        {/* Grid section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative z-10 py-4 sm:py-6 md:py-10 w-full mx-auto bg-black lg:max-w-[1200px] gap-2 md:gap-0">
          {/* Add ref to each industry card */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="flex flex-col py-4 sm:py-6 md:py-10 relative group/feature border-b sm:border-r border-neutral-800"
          >
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none"></div>

            {/* Icon container - adjust size */}
            <div className="mb-2 sm:mb-3 md:mb-4 relative z-10 px-3 sm:px-4 md:px-6 lg:px-10 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                id="Layer_1"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 122.88 112.07"
                fill="currentColor"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M61.44 0 0 60.18l14.99 7.87L61.04 19.7l46.85 48.36 14.99-7.87zM18.26 69.63 61.5 26.38l43.11 43.25v42.43H73.12V82.09H49.49v29.97H18.26z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            {/* Title section - adjust text size and spacing */}
            <div className="text-sm sm:text-base md:text-lg font-bold mb-2 relative z-10 px-3 sm:px-4 md:px-6 lg:px-10">
              <div className="absolute left-0 inset-y-0 h-4 sm:h-5 md:h-6 group-hover/feature:h-6 sm:group-hover/feature:h-7 md:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-600 transition-all duration-200 origin-center"></div>
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100 leading-tight">
                Real Estate
              </span>
            </div>

            {/* Description - adjust text size */}
            <p className="text-xs sm:text-xs md:text-sm text-neutral-300 max-w-xs relative z-10 px-3 sm:px-4 md:px-6 lg:px-10 leading-relaxed">
              We provide comprehensive digital solutions for real estate
              businesses, helping them showcase properties effectively and
              streamline their operations through technology.
            </p>
          </div>
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="flex flex-col py-6 md:py-10 relative group/feature border-b sm:border-r border-neutral-800"
          >
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none"></div>
            <div className="mb-3 md:mb-4 relative z-10 px-6 md:px-10 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                id="Layer_1"
                x="0"
                y="0"
                fill="currentColor"
                version="1.1"
                viewBox="0 0 114.16 122.88"
                className="w-12 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M0 108.01h16.86V.44c0-.99.81 0 1.8 0h76.85c.99 0 1.8-.99 1.8 0v107.57h16.86v14.87H0zm51.48-49.29h11.64c.35 0 .64.29.64.63v14.16c0 .35-.29.64-.64.64H51.48c-.35 0-.64-.29-.64-.64V59.35c0-.35.28-.63.64-.63m-1.25-45.27h13.69v10.86h10.86V38H63.93v10.86h-13.7V38H39.37V24.31h10.86zm16.64-4.22H26.54c-.71 0-1.29.7-1.29 1.54v90.91c0 .84.59 1.54 1.29 1.54h61.09c.71 0 1.29-.69 1.29-1.54V10.77c0-.85-.59-1.54-1.29-1.54zm-3.78 73H51.08c-.36 0-.65.29-.65.65v14.15c0 .36.29.65.65.65h12c.36 0 .65-.29.65-.65V82.88a.64.64 0 0 0-.64-.65m19.78-.01H71.2a.65.65 0 0 0-.65.66v14.15c0 .36.29.65.65.65h11.68c.36 0 .66-.29.66-.65V82.88a.68.68 0 0 0-.67-.66m0-23.46H71.2c-.36 0-.65.29-.65.65v14.15c0 .36.29.66.65.66h11.68c.36 0 .66-.29.66-.65V59.41a.673.673 0 0 0-.67-.65M31.29 82.22h11.68c.36 0 .65.29.65.66v14.15c0 .36-.3.65-.65.65H31.29c-.36 0-.66-.29-.66-.65V82.88c0-.36.3-.66.66-.66m0-23.46h11.68c.36 0 .65.29.65.65v14.15c0 .36-.3.66-.65.66H31.29c-.36 0-.66-.29-.66-.65V59.41c0-.36.3-.65.66-.65"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
              <div className="absolute left-0 inset-y-0 h-5 md:h-6 group-hover/feature:h-7 md:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-600 transition-all duration-200 origin-center"></div>
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                Health care and wellness
              </span>
            </div>
            <p className="text-xs md:text-sm text-neutral-300 max-w-xs relative z-10 px-6 md:px-10">
              Our healthcare solutions focus on improving patient care through
              digital transformation, offering telemedicine platforms and
              healthcare management systems.
            </p>
          </div>
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="flex flex-col py-6 md:py-10 relative group/feature border-b sm:border-r border-neutral-800"
          >
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none"></div>
            <div className="mb-3 md:mb-4 relative z-10 px-6 md:px-10 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                id="Layer_1"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 122.9 122.2"
                className="w-12 h-10"
              >
                <path
                  fill="#A3A3A3"
                  fillRule="evenodd"
                  d="M21.1 0h81.7c1.9 0 3.5 1.6 3.5 3.5S104.7 7 102.8 7H21.1c-1.9 0-3.5-1.6-3.5-3.5S19.2 0 21.1 0m100.5 44.3v4.2c0 .4.1.8.1 1.2 0 7.1-6.6 12.8-14.7 12.8s-14.7-5.7-14.7-12.8v-.9h-.6v.9c0 7.1-6.6 12.8-14.7 12.8s-14.7-5.7-14.7-12.8v-.9h-.6v.9c0 7.1-6.6 12.8-14.7 12.8s-14.7-5.7-14.7-12.8v-.9h-.4v.9c0 7.1-6.6 12.8-14.7 12.8S2.5 56.8 2.5 49.7c0-.3 0-.7.1-1v-4.4zM17.3 10.7h89.9l11.5 24.5H5.4zM3.5 106.9h12.4V71.5h1.2c5.6 0 10.8-1.8 14.9-4.8l.1.1h.1v.1l.2.2.2.1.2.1V99h5.5c.2.6.5 1.2.8 1.8q2.1 4.5 5.4 8.7c1.6 2.1 3.5 4 5.5 5.8s4.1 3.4 6.5 4.9c1.4.9 3 1.3 4.5 1.2 1.4 0 2.9-.5 4.1-1.3 1.7-1 3.2-2.1 4.6-3.3 1.4-1.1 2.7-2.4 3.9-3.7.3-.2.5-.5.7-.8q3.6-4.05 6-8.7c.8-1.5 1.5-3.1 2.1-4.6h5.3V68.6c.9-.5 1.7-1 2.6-1.5l.2-.1h.2l.1-.1.2-.1c4.1 3 9.3 4.9 15 4.9V107h12.4c1.9 0 3.5 3.4 3.5 7.6s-1.6 7.6-3.5 7.6H3.5c-1.9 0-3.5-3.4-3.5-7.6s1.6-7.7 3.5-7.7"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#A3A3A3"
                  fillRule="evenodd"
                  d="M69.8 108.7c-2.1 2.3-4.5 4.3-7.3 6-.3.2-.8.3-1.2 0-4-2.6-7.4-5.7-10.1-9-3.7-4.6-6-9.7-6.8-14.7s-.1-9.8 2.4-13.7c1-1.5 2.2-3 3.8-4.2 3.5-2.8 7.5-4.3 11.5-4.2 3.8 0 7.6 1.5 10.9 4.5 1.2 1 2.1 2.2 2.9 3.6 2.7 4.4 3.3 10 2.1 15.7-1 5.6-3.9 11.3-8.2 16m-8.4-30.9c4.7 0 8.6 3.8 8.6 8.6 0 4.7-3.8 8.6-8.6 8.6-4.7 0-8.6-3.8-8.6-8.6s3.9-8.6 8.6-8.6"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
              <div className="absolute left-0 inset-y-0 h-5 md:h-6 group-hover/feature:h-7 md:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-600 transition-all duration-200 origin-center"></div>
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                Local Business
              </span>
            </div>
            <p className="text-xs md:text-sm text-neutral-300 max-w-xs relative z-10 px-6 md:px-10">
              We empower local businesses with digital tools and strategies to
              compete effectively in their markets, from online presence to
              customer engagement solutions.
            </p>
          </div>
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="flex flex-col py-6 md:py-10 relative group/feature border-b sm:border-r border-neutral-800"
          >
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none"></div>
            <div className="mb-3 md:mb-4 relative z-10 px-6 md:px-10 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 113.79 122.88"
                className="w-12 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M75.64 27a35.4 35.4 0 0 1 8.58 7.07A32.5 32.5 0 0 1 90 43.34a37.5 37.5 0 0 1 1.85 5.93 35 35 0 0 1 .24 14 38.4 38.4 0 0 1-2.16 7.3l-.11.25c-2 5-5.58 9.84-9 14.62-1.74 2.42-3.47 4.81-4.92 7.13a4.71 4.71 0 0 1-4.33 2.18l-27.52 4.09a4.7 4.7 0 0 1-5.21-3.41 39 39 0 0 0-2.53-5.8 24.2 24.2 0 0 0-3-4.48C31.89 83.53 30.44 81.87 29 80a40.6 40.6 0 0 1-4.14-6.92 41.2 41.2 0 0 1-2.8-8 35.6 35.6 0 0 1-.95-8.42 35.8 35.8 0 0 1 1.17-8.73 41.7 41.7 0 0 1 3.41-8.82l.2-.36A35.1 35.1 0 0 1 33 30.09a33.5 33.5 0 0 1 9.43-5.81l.29-.11a35 35 0 0 1 8-2.13 37.6 37.6 0 0 1 8.75-.2 38.6 38.6 0 0 1 8.37 1.71 37.8 37.8 0 0 1 7.8 3.45m-3.88 87.35a17.36 17.36 0 0 1-6.26 6.28 16.36 16.36 0 0 1-7.19 2.19 14.86 14.86 0 0 1-7.39-1.44 15.1 15.1 0 0 1-4.38-3.26zm2.4-14.11v2.22a23.5 23.5 0 0 1 0 3.25l-.5 2.38-30.56 4.54-.53-1.22-1.19-4.88v-1.42l32.7-4.87Zm-18-96.51A3.84 3.84 0 0 1 60.07 0h.26a3.9 3.9 0 0 1 2.47 1.19 3.86 3.86 0 0 1 1.06 2.69 1.3 1.3 0 0 1 0 .2l-.21 8.19a2 2 0 0 1 0 .26 3.81 3.81 0 0 1-3.86 3.52h-.27a3.77 3.77 0 0 1-2.46-1.17 3.84 3.84 0 0 1-1.06-2.7 1.3 1.3 0 0 1 0-.2l.2-8.22ZM14 18.1a3.9 3.9 0 0 1-1.22-2.67 3.83 3.83 0 0 1 3.69-4 3.84 3.84 0 0 1 2.75 1l6.14 5.73a3.85 3.85 0 0 1 .21 5.42 3.9 3.9 0 0 1-2.68 1.22 3.82 3.82 0 0 1-2.74-1zM4 60.32a3.86 3.86 0 0 1-4-3.72 3.78 3.78 0 0 1 1-2.75 3.8 3.8 0 0 1 2.68-1.2l8.38-.28a3.83 3.83 0 0 1 4 3.71v.2a3.86 3.86 0 0 1-1 2.55A3.8 3.8 0 0 1 12.34 60h-.15l-8.28.28Zm105.6-11.89h.13a3.84 3.84 0 0 1 2.65.85 3.9 3.9 0 0 1 1.4 2.59s0 .1 0 .12a3.84 3.84 0 0 1-3.44 4L102 57a3.84 3.84 0 0 1-4.21-3.42 3.84 3.84 0 0 1 3.43-4.21c2.78-.3 5.58-.62 8.37-.89ZM93.08 15.05A3.81 3.81 0 0 1 98.39 14a3.78 3.78 0 0 1 1.61 2.44 3.88 3.88 0 0 1-.57 2.88l-4.67 7A3.84 3.84 0 0 1 88.4 22l4.68-7ZM61.26 54.91h5.89a1.54 1.54 0 0 1 1.54 1.54 1.56 1.56 0 0 1-.26.86l-14 23.93a1.53 1.53 0 0 1-2.11.52 1.55 1.55 0 0 1-.72-1.63l2.07-14.68-7 .12a1.53 1.53 0 0 1-1.56-1.51 1.5 1.5 0 0 1 .21-.81l13.79-23.92a1.55 1.55 0 0 1 2.11-.54 1.52 1.52 0 0 1 .78 1.54l-.7 14.58Z"
                  className="fill-current"
                ></path>
              </svg>
            </div>

            <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
              <div className="absolute left-0 inset-y-0 h-5 md:h-6 group-hover/feature:h-7 md:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-600 transition-all duration-200 origin-center"></div>
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                Tour & Tourism
              </span>
            </div>
            <p className="text-xs md:text-sm text-neutral-300 max-w-xs relative z-10 px-6 md:px-10">
              We create innovative digital solutions for the tourism industry,
              from booking platforms to virtual tour experiences and destination
              marketing tools.
            </p>
          </div>
          <div
            ref={(el) => (cardsRef.current[4] = el)}
            className="flex flex-col py-6 md:py-10 relative group/feature border-b sm:border-r border-neutral-800"
          >
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none"></div>
            <div className="mb-3 md:mb-4 relative z-10 px-6 md:px-10 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 122.88 91.89"
                className="w-12 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M46.82 34.74c-13.7.1-20.43-.88-24.49 10.31a28.6 28.6 0 0 0-1.81 7.82C0 60.94 3.26 55.93 0 78.59h5.65c2.61-20.35 28.26-17.89 29.05 0h36.74a15.44 15.44 0 0 1 26.26-9.25 15.47 15.47 0 0 1 4.43 9.23h15.26a5.28 5.28 0 0 0 5.27-5.27v-12H46.82zM64.59 6h.67a6 6 0 0 1 6 6v4.2H58.57V12a6 6 0 0 1 6-6Zm-3.12 8.81h-1.23V14c0-1.7 0-3.15 1.39-4.64a5 5 0 0 1 1.41-1 11.55 11.55 0 0 0-1.57 6.52Zm4.85-11.59a1.4 1.4 0 0 1-2.79 0V1.4a1.4 1.4 0 1 1 2.79 0zM55.75 8a1.39 1.39 0 0 1-1.38 2.41l-1.58-.91a1.39 1.39 0 0 1 1.38-2.41zm19.73 2.34A1.39 1.39 0 1 1 74.1 8l1.57-1a1.39 1.39 0 1 1 1.39 2.41l-1.58.91ZM59.87 3.92a1.38 1.38 0 0 1-2.4 1.38l-.92-1.58A1.39 1.39 0 0 1 59 2.34l.91 1.58ZM72.38 5.3A1.38 1.38 0 1 1 70 3.92l.91-1.58a1.39 1.39 0 0 1 2.39 1.38zm-23.3 53.9h73.8V20.86a3.6 3.6 0 0 0-3.57-3.56H52.65a3.63 3.63 0 0 0-3.57 3.56zm33.83-34.81h6A2.06 2.06 0 0 1 91 26.44v6.83h6.83a2.05 2.05 0 0 1 2 2v6a2.05 2.05 0 0 1-2 2H91v6.66a2.07 2.07 0 0 1-2.06 2h-6a2.06 2.06 0 0 1-2-2v-6.52H74a2.06 2.06 0 0 1-2.06-2v-6a2.06 2.06 0 0 1 2.06-2h6.83v-6.97a2.05 2.05 0 0 1 2-2.05Zm3.88 44.25a11.63 11.63 0 1 1-11.62 11.62 11.63 11.63 0 0 1 11.62-11.62m0 7.15a4.47 4.47 0 1 1-4.47 4.47 4.47 4.47 0 0 1 4.47-4.47m-66.62-8.18A11.63 11.63 0 1 1 8.55 79.23a11.63 11.63 0 0 1 11.62-11.62m0 7.15a4.47 4.47 0 1 1-4.47 4.47 4.48 4.48 0 0 1 4.47-4.47m13.27-33.9 6.56-.11v12.12H27.85c.6-3.95 2.17-8.62 5.59-12Z"
                  className="fill-current"
                ></path>
              </svg>
            </div>

            <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
              <div className="absolute left-0 inset-y-0 h-5 md:h-6 group-hover/feature:h-7 md:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-600 transition-all duration-200 origin-center"></div>
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                Healthcare
              </span>
            </div>
            <p className="text-xs md:text-sm text-neutral-300 max-w-xs relative z-10 px-6 md:px-10">
              We have extensive experience in the healthcare industry, including
              working with major healthcare providers and pharmaceutical
              companies.
            </p>
          </div>
          <div
            ref={(el) => (cardsRef.current[5] = el)}
            className="flex flex-col py-6 md:py-10 relative group/feature border-b sm:border-r border-neutral-800"
          >
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none"></div>
            <div className="mb-3 md:mb-4 relative z-10 px-6 md:px-10 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                id="Layer_1"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 103.05 122.88"
                className="w-12 h-8"
              >
                <path
                  d="M28.39 28.72c.13.55-.22 1.09-.76 1.21-.55.12-1.09-.22-1.21-.76-.23-.99-.18-1.88.06-2.7.24-.8.66-1.51 1.19-2.16a1.014 1.014 0 0 1 1.56-.01c1.51 1.59 3.25 2.53 4.9 2.78.79.12 1.56.08 2.27-.12.7-.2 1.33-.55 1.88-1.05.9-.85 1.57-2.14 1.84-3.91.08-.55.6-.94 1.15-.85.21.03.39.12.53.25 1.44 1.19 2.85 1.81 4.23 1.87 1.39.06 2.81-.44 4.24-1.49.44-.32 1.05-.23 1.38.18 1.88 2.34 3.69 3.34 5.44 3.16 1.82-.19 3.7-1.63 5.64-4.15.22-.29.58-.43.92-.39 4.14.49 6.63-.72 7.8-2.49.65-.99.9-2.16.8-3.32-.1-1.17-.55-2.3-1.3-3.19-1.25-1.48-3.36-2.3-6.11-1.46-.39.12-.8-.01-1.06-.3-1.5-1.71-2.99-2.92-4.42-3.62-1.14-.57-2.23-.81-3.23-.72-.97.08-1.87.48-2.68 1.19-.71.62-1.35 1.49-1.9 2.6-.24.48-.8.69-1.28.49-.77-.31-1.53-.51-2.28-.61q-1.125-.15-2.25 0c-.48.06-.92-.21-1.08-.64-1.04-2.72-2.43-4.01-4.03-4.36-1.68-.37-3.72.21-5.91 1.22a1 1 0 0 1-1.21-.29c-1.67-1.76-3.65-2.72-5.56-2.98-1.41-.19-2.78-.01-3.96.5-1.16.5-2.14 1.32-2.8 2.42-.74 1.24-1.08 2.85-.8 4.78.08.55-.31 1.07-.86 1.15h-.03c-2.88.33-4.85 1.92-5.67 3.76-.31.7-.46 1.44-.42 2.15.03.69.24 1.35.63 1.94.93 1.4 2.94 2.38 6.2 2.24.56-.02 1.03.41 1.05.97.01.27-.09.53-.26.72-.66.75-1.22 1.52-1.66 2.31-.43.77-.74 1.57-.92 2.4a1.016 1.016 0 0 1-1.99-.41c.22-1.03.6-2.02 1.13-2.97.2-.36.41-.7.65-1.05-2.9-.29-4.83-1.5-5.9-3.09-.6-.9-.92-1.92-.97-2.97-.05-1.02.15-2.08.6-3.07.99-2.21 3.16-4.14 6.3-4.79-.11-1.99.33-3.71 1.17-5.11.88-1.47 2.19-2.57 3.73-3.24 1.52-.66 3.26-.89 5.03-.65 2.17.3 4.39 1.31 6.3 3.14 2.32-1 4.54-1.51 6.55-1.07 2.11.47 3.89 1.93 5.2 4.9.67-.04 1.34-.01 2 .08.64.09 1.28.23 1.91.43.58-.98 1.23-1.79 1.96-2.43 1.14-1 2.44-1.56 3.84-1.69 1.37-.12 2.82.19 4.3.92 1.52.75 3.08 1.96 4.62 3.64 3.35-.8 5.99.33 7.62 2.27 1.03 1.22 1.64 2.76 1.78 4.33.13 1.58-.22 3.21-1.13 4.6-1.49 2.27-4.45 3.86-9.15 3.45-2.17 2.69-4.39 4.24-6.68 4.48-2.26.24-4.47-.78-6.63-3.19-1.56.96-3.13 1.42-4.73 1.35-1.41-.06-2.81-.53-4.19-1.41-.45 1.47-1.19 2.64-2.11 3.5-.79.74-1.71 1.25-2.71 1.53-.99.28-2.04.34-3.12.17-1.76-.27-3.57-1.12-5.2-2.56-.08.17-.15.34-.2.51-.16.5-.19 1.06-.04 1.68M0 117.75h93.74v5.13H0zM46.86 45l-1.11 10.68h12L56.64 45zM15.31 31.27l-1.55 14.92h16.76l-1.55-14.92zm-1.84 17.76-.76 7.32h18.87l-.76-7.32zM12.42 59.2l-1.13 10.59-7.06-1.3v46.7h85.28V84.15l-29.79-5.47-1.01-13.69H44.79l-.68 10.82-10.68-1.96-1.56-14.65zm33.12-1.48L45 62.96h13.5l-.54-5.24zm10.67 33.03h14.25v17.12H56.21zm-18.29 0h14.25v17.12H37.92zm-18.29 0h14.25v17.12H19.63zm57.14-71.22c-.51-.22-.75-.82-.52-1.33.22-.51.82-.75 1.33-.52.37.16.68.37.99.59.55-1.32 1.33-2.41 2.24-3.24 1.13-1.02 2.47-1.64 3.87-1.8s2.86.13 4.22.93c1.21.71 2.34 1.82 3.27 3.36 4.32-.92 7.34.35 9.1 2.46 1.25 1.5 1.83 3.42 1.78 5.28-.05 1.89-.75 3.73-2.07 5.07-1.72 1.74-4.45 2.62-8.11 1.57-.88 1.68-2.18 2.96-3.66 3.76-.98.54-2.04.86-3.09.96-1.08.1-2.15-.04-3.15-.45-1.12-.45-2.14-1.23-2.94-2.36-1.59.58-3.14.95-4.65 1-1.5.05-2.95-.22-4.33-.89-1.66 2.52-3.61 4.04-5.87 4.51-2.04.42-4.27-.04-6.7-1.43v5.31c0 .56-.45 1.02-1.02 1.02h-7.73c-.56 0-1.02-.45-1.02-1.02v-9.34c-1-.09-1.98-.36-2.93-.78-1.25-.56-2.44-1.39-3.59-2.49a1.012 1.012 0 0 1 1.39-1.47c.98.94 1.99 1.65 3.02 2.11.98.44 1.98.65 3.01.64.06.02.09.02.13.02.56 0 1.02.45 1.02 1.02v9.3h5.7v-6.16c0-.2.06-.41.19-.59.32-.46.96-.56 1.41-.24 2.57 1.84 4.81 2.53 6.72 2.13 1.9-.39 3.57-1.88 5.04-4.4l.02-.03c.3-.47.93-.61 1.4-.31 1.27.81 2.64 1.12 4.08 1.08 1.49-.05 3.07-.47 4.7-1.14.48-.22 1.06-.04 1.32.43.61 1.11 1.45 1.83 2.39 2.21.7.28 1.45.38 2.21.31.78-.07 1.57-.32 2.31-.72 1.32-.72 2.46-1.94 3.13-3.57.19-.52.76-.79 1.29-.61 3.24 1.15 5.53.56 6.87-.8.95-.96 1.45-2.31 1.49-3.7.04-1.41-.39-2.84-1.31-3.94-1.39-1.67-3.95-2.61-7.76-1.63-.46.14-.96-.06-1.19-.5-.82-1.56-1.82-2.62-2.89-3.25-.96-.57-1.99-.78-2.97-.66-.98.11-1.93.56-2.74 1.28-.92.83-1.66 2.03-2.08 3.55-.01.05-.03.09-.05.14-.23.51-.82.74-1.33.52-.44-.19-.79-.45-1.14-.7-.29-.19-.56-.38-.8-.49"
                  className="fill-current"
                ></path>
              </svg>
            </div>

            <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
              <div className="absolute left-0 inset-y-0 h-5 md:h-6 group-hover/feature:h-7 md:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-600 transition-all duration-200 origin-center"></div>
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                Manufacturing
              </span>
            </div>
            <p className="text-xs md:text-sm text-neutral-300 max-w-xs relative z-10 px-6 md:px-10">
              We have extensive experience in the manufacturing industry,
              including working with major manufacturers and suppliers.
            </p>
          </div>
          <div
            ref={(el) => (cardsRef.current[6] = el)}
            className="flex flex-col py-6 md:py-10 relative group/feature border-b sm:border-r border-neutral-800"
          >
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none"></div>
            <div className="mb-3 md:mb-4 relative z-10 px-6 md:px-10 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 122.88 111.85"
                width="24"
                height="24"
                stroke="currentColor"
                fill="currentColor"
                className="w-6 h-8"
              >
                <path
                  d="M66.41 90.42h21.91c1.76-1.75 3.69-3.57 5.65-5.42 4.11-3.89 8.4-7.95 12.81-13.03 5.04-5.81 5.58-7.82 7.11-13.51.29-1.07.61-2.27 1.03-3.76l2.62-9.21.03-.1c1.4-4.1 1.51-6.81.93-8.37-.18-.48-.41-.8-.68-.97-.21-.14-.49-.19-.78-.16-.68.07-1.45.5-2.15 1.27l-7.78 18.53c-.07.17-.17.33-.28.47-.46.83-1.08 1.64-1.88 2.41l-13.8 15.39c-.75.84-2.04.91-2.87.16-.84-.75-.91-2.04-.16-2.87l13.81-15.39c.06-.07.12-.14.19-.2 1.43-1.36 1.88-2.83 1.63-3.9-.08-.33-.22-.61-.42-.8a1.3 1.3 0 0 0-.75-.32c-1.23-.13-3.04.78-5.25 3.39-.06.07-.13.14-.2.21l-5.35 4.72-.03.03c-5.79 5.48-8.28 6.78-12.82 9.15-.95.5-1.99 1.04-3.28 1.74-.51.28-1.01.62-1.5.99-.52.4-1.02.81-1.49 1.21-2.4 2.02-3.66 3.66-4.38 5.47-.75 1.88-1.02 4.17-1.39 7.31-.15 1.27-.26 2.52-.35 3.77-.07.61-.1 1.21-.13 1.79m20.88-78.05.13 26.59c.01 1.39-.87 2.58-2.11 3.08v.01l-23.1 9.34c-.2.04-.4.05-.6.05-.45 0-.89-.09-1.3-.26l-22.75-8.7v-.01a3.45 3.45 0 0 1-2.09-3.18l.13-26.25c-.02-.28 0-.56.05-.84.01-.4.09-.8.25-1.17.36-.86 1.05-1.5 1.87-1.83L59.99.25a3.53 3.53 0 0 1 2.71.03L84.89 8.3c1.33.48 2.17 1.67 2.23 2.97.1.36.17.73.17 1.1M57.24 45.86l.17-23.16-17.79-7.69-.38 23.25zm26.25-30.85-19.88 7.7.16 23.13 19.85-7.41zM56.47 90.42H34.55c-1.76-1.75-3.69-3.57-5.65-5.42-4.11-3.89-8.4-7.95-12.81-13.03-5.04-5.81-5.58-7.82-7.11-13.51-.28-1.07-.6-2.26-1.02-3.76l-2.62-9.21-.03-.1c-1.4-4.1-1.51-6.81-.93-8.37.18-.48.41-.8.68-.97.21-.14.49-.19.78-.16.68.07 1.45.5 2.15 1.27l7.78 18.53c.07.17.17.33.28.47.46.83 1.08 1.64 1.88 2.41l13.8 15.39c.75.84 2.04.91 2.87.16.84-.75.91-2.04.16-2.87l-13.8-15.4c-.06-.07-.12-.14-.19-.2-1.43-1.36-1.88-2.83-1.63-3.9.08-.33.22-.61.42-.8.19-.17.44-.29.75-.32 1.23-.13 3.05.78 5.25 3.39.06.07.13.14.2.21l5.35 4.72.03.03c5.79 5.48 8.28 6.78 12.82 9.15.95.5 1.99 1.04 3.28 1.74.51.28 1.01.62 1.5.99.52.4.1.81.62 1.49 1.32 2.21.7.28 1.45.38 2.21.31.78-.07 1.57-.32 2.31-.72 1.32-.72 2.46-1.94 3.13-3.57.19-.52.76-.79 1.29-.61 3.24 1.15 5.53.56 6.87-.8.95-.96 1.45-2.31 1.49-3.7.04-1.41-.39-2.84-1.31-3.94-1.39-1.67-3.95-2.61-7.76-1.63-.46.14-.96-.06-1.19-.5-.82-1.56-1.82-2.62-2.89-3.25-.96-.57-1.99-.78-2.97-.66-.98.11-1.93.56-2.74 1.28-.92.83-1.66 2.03-2.08 3.55-.01.05-.03.09-.05.14-.23.51-.82.74-1.33.52-.44-.19-.79-.45-1.14-.7-.29-.19-.56-.38-.8-.49"
                  className="fill-current"
                ></path>
              </svg>
            </div>

            <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
              <div className="absolute left-0 inset-y-0 h-5 md:h-6 group-hover/feature:h-7 md:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-600 transition-all duration-200 origin-center"></div>
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block  text-neutral-100">
                Logistics
              </span>
            </div>
            <p className="text-xs md:text-sm text-neutral-300 max-w-xs relative z-10 px-6 md:px-10">
              We have extensive experience in the logistics industry, including
              working with government agencies and major logistics companies.
            </p>
          </div>
          <div
            ref={(el) => (cardsRef.current[7] = el)}
            className="flex flex-col py-6 md:py-10 relative group/feature border-b sm:border-r border-neutral-800"
          >
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none"></div>
            <div className="mb-3 md:mb-4 relative z-10 px-6 md:px-10 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                id="Layer_1"
                width="122.88"
                height="100.094"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 122.88 100.094"
                stroke="currentColor"
                fill="#A3A3A3"
                className="w-6 h-8"
              >
                <path d="M97.124 19.813c-.268-.268-.481-.429-.749-.536q-.321-.16-.804-.161c-.483-.001-.589.054-.803.161s-.482.268-.696.482l-.054.054-6.051 6.05c-1.178 1.178-3.052 1.339-4.391.375a40 40 0 0 0-2.195-1.285c-.856-.428-1.66-.857-2.409-1.231-.804-.375-1.66-.75-2.517-1.071-.75-.268-1.606-.589-2.624-.911a3.44 3.44 0 0 1-2.356-3.266V9.21c0-.321-.054-.643-.16-.856-.107-.214-.268-.482-.482-.643a2.5 2.5 0 0 0-.643-.482c-.214-.107-.535-.16-.856-.16H57.661c-.322 0-.589.053-.803.107a2.8 2.8 0 0 0-.75.536c-.214.214-.375.428-.428.643-.107.214-.161.535-.161.856v8.514c0 1.714-1.232 3.106-2.838 3.427-.911.214-1.767.428-2.517.643a46 46 0 0 0-2.517.857c-.803.321-1.66.642-2.463 1.071-.856.375-1.606.803-2.356 1.178a3.4 3.4 0 0 1-4.069-.589l-6.694-6.64c-.053-.054-.053-.054-.053-.107a2.5 2.5 0 0 0-.643-.482c-.215-.107-.429-.107-.75-.107s-.589.054-.803.161c-.268.107-.482.268-.75.536l-8.139 8.192c-.268.268-.428.482-.536.75q-.16.321-.16.803t.16.804c.107.214.268.482.482.696v.054l6.051 6.051c1.178 1.178 1.338 3.052.375 4.391-.428.696-.857 1.392-1.285 2.195-.428.857-.857 1.66-1.231 2.41-.375.803-.75 1.66-1.071 2.517-.268.75-.589 1.606-.911 2.624a3.44 3.44 0 0 1-3.266 2.356h-9.264c-.321 0-.643.053-.856.16-.215.107-.429.268-.643.429-.215.214-.375.429-.429.643-.107.214-.161.535-.161.856v.945a27 27 0 0 0-6.8 3.173v-4.225c0-1.231.214-2.356.643-3.481.428-1.07 1.124-2.034 1.981-2.944.856-.857 1.874-1.553 2.945-1.981s2.249-.643 3.48-.643h6.854c.054-.161.161-.375.214-.535.375-.964.804-1.928 1.232-2.892.482-1.018.91-1.981 1.392-2.838l.161-.322-4.123-4.176c-.857-.857-1.553-1.82-1.981-2.945a8.8 8.8 0 0 1-.696-3.481c0-1.231.214-2.355.696-3.48a9.2 9.2 0 0 1 1.981-2.945l8.139-8.193v-.053a9.6 9.6 0 0 1 2.891-1.981c1.125-.482 2.249-.696 3.481-.696s2.409.268 3.48.696c1.071.481 2.034 1.124 2.838 2.034l4.873 4.819c.161-.054.321-.16.428-.214.91-.429 1.874-.803 2.892-1.231.964-.375 1.981-.696 2.999-1.018.161-.054.268-.107.428-.107V9.049c0-1.231.215-2.41.696-3.48.429-1.071 1.125-2.035 1.981-2.891l.054-.054A8.55 8.55 0 0 1 54.233.696C55.305.268 56.483 0 57.661 0h11.673c1.231 0 2.356.214 3.48.643s2.089 1.125 2.945 1.981 1.553 1.874 1.981 2.945.643 2.249.643 3.48v6.854c.16.054.374.161.535.214.964.375 1.928.804 2.892 1.232 1.017.482 1.981.91 2.838 1.392l.054.054a8.6 8.6 0 0 1 1.928 2.892c.428 1.071.695 2.249.695 3.427v1.749h-1.669c-2.463-2.256-5.264-4.08-8.325-5.35q-.355-.165-.728-.308c-4.021-1.531-7.539-2.177-10.685-2.185-.111-.409-.222-.826-.333-1.243-.268-.803-.535-1.66-.91-2.57 0-.053-.054-.107-.054-.161-.321-.856-.643-1.606-.964-2.356-.375-.803-.75-1.606-1.178-2.356-.75-1.393-.482-2.999.589-4.07l6.64-6.693c0-.054.054-.054.106-.054q.322-.32.482-.643c.107-.214.107-.428.107-.75s-.054-.589-.161-.803c-.106-.268-.268-.482-.535-.75l-8.192-8.139zm-69.79 75.893c-4.405 3.344-9.35 5.998-16.611 3.235C6.015 97.156 2.156 93.027 0 87.825c18.757 8.501 25.473-15.898 3.263-16.633 6.779-8.162 16.777-8.096 24.855-2.11 3.819 2.824 5.967 4.242 8.166 4.861 1.203.356 2.411.424 3.938.427 5.16.018 32.208-.571 37.683-.686 10.309-.202 15.521-16.053 30.184-10.466 4.708 1.785 8.566 5.914 10.723 11.116-18.757-8.501-25.473 15.898-3.263 16.633-6.779 8.162-16.776 8.097-24.854 2.11-3.54-2.632-5.775-5.727-12.759-5.531-4.844.206-31.836.521-36.692.847-1.93.116-3.211.307-4.43.782-2.204.841-4.201 2.555-9.412 6.527zm34.718-61.115c1.768 0 3.534.161 5.248.535 1.659.322 3.319.857 4.979 1.553 1.553.696 3.052 1.5 4.444 2.41s2.677 1.981 3.855 3.159 2.249 2.463 3.159 3.909a23.7 23.7 0 0 1 2.409 4.444c.054.106.054.214.107.268a26.4 26.4 0 0 1 1.303 4.064c-1.53 1.017-2.992 2.128-4.425 3.253h-1.865q-.082-.608-.207-1.213c-.268-1.232-.589-2.356-1.018-3.428-.054-.053-.054-.106-.106-.214-.536-1.231-1.125-2.355-1.82-3.373s-1.446-1.981-2.303-2.838c-.857-.856-1.821-1.66-2.838-2.302-1.018-.696-2.143-1.285-3.374-1.82a19.3 19.3 0 0 0-3.641-1.125c-1.231-.268-2.57-.375-3.909-.375s-2.624.107-3.909.375c-1.231.268-2.355.589-3.427 1.018-.054.054-.107.054-.214.107-1.232.535-2.356 1.124-3.374 1.82s-1.981 1.446-2.838 2.302-1.66 1.821-2.303 2.838c-.696 1.018-1.285 2.142-1.82 3.373a19.3 19.3 0 0 0-1.125 3.642q-.129.592-.209 1.213h-6.892a23 23 0 0 1 .408-2.605c.321-1.66.857-3.32 1.553-4.979a32 32 0 0 1 2.41-4.444c.91-1.393 1.981-2.678 3.159-3.909a24.2 24.2 0 0 1 3.855-3.159 23.8 23.8 0 0 1 4.444-2.41c.107-.053.215-.053.268-.107a26.4 26.4 0 0 1 4.712-1.446c1.713-.321 3.48-.535 5.247-.535h.057z"></path>
              </svg>
              Utilities
            </div>
            <p className="text-xs md:text-sm text-neutral-300 max-w-xs relative z-10 px-6 md:px-10">
              We have extensive experience in the utilities industry, including
              working with government agencies and major utilities companies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
