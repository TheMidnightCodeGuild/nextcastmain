// import React, { useEffect, useState } from "react";

// const Loader = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!isVisible) return null;

//   return (
//     <>
//       <div
//         aria-label="Loading..."
//         role="status"
//         className="flex items-center space-x-2 justify-center h-screen absolute top-0 left-0 w-full z-50 bg-black">
//         <svg
//           className="h-20 w-20 animate-spin stroke-gray-500"
//           viewBox="0 0 256 256">
//           <line
//             x1="128"
//             y1="32"
//             x2="128"
//             y2="64"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="24"></line>
//           <line
//             x1="195.9"
//             y1="60.1"
//             x2="173.3"
//             y2="82.7"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="24"></line>
//           <line
//             x1="224"
//             y1="128"
//             x2="192"
//             y2="128"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="24"></line>
//           <line
//             x1="195.9"
//             y1="195.9"
//             x2="173.3"
//             y2="173.3"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="24"></line>
//           <line
//             x1="128"
//             y1="224"
//             x2="128"
//             y2="192"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="24"></line>
//           <line
//             x1="60.1"
//             y1="195.9"
//             x2="82.7"
//             y2="173.3"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="24"></line>
//           <line
//             x1="32"
//             y1="128"
//             x2="64"
//             y2="128"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="24"></line>
//           <line
//             x1="60.1"
//             y1="60.1"
//             x2="82.7"
//             y2="82.7"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="24"></line>
//         </svg>
//         <span className="text-4xl font-medium text-gray-500">Loading...</span>
//       </div>
//     </>
//   );
// };

// export default Loader;
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".loading-text span", {
      duration: 0,
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "power2.out",
    });

    tl.to(".loading", {
      duration: 0.5,
      opacity: 0,
      display: "none",
      delay: 1,
      onComplete: () => setIsLoading(false),
    });
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading ">
      <div className="loading-text">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
      <style jsx>{`
        .loading {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #ffffff;
          z-index: 9999;
        }

        .loading-text {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          text-align: center;
          width: 100%;
          height: 100px;
          line-height: 100px;
        }
        .loading-text span {
          display: inline-block;
          margin: 0 5px;
          color: #000000;
          font-family: "Quattrocento Sans", sans-serif;
        }
        .loading-text span:nth-child(1) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 0s infinite linear alternate;
          animation: blur-text 1.5s 0s infinite linear alternate;
        }
        .loading-text span:nth-child(2) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 0.2s infinite linear alternate;
          animation: blur-text 1.5s 0.2s infinite linear alternate;
        }
        .loading-text span:nth-child(3) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 0.4s infinite linear alternate;
          animation: blur-text 1.5s 0.4s infinite linear alternate;
        }
        .loading-text span:nth-child(4) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 0.6s infinite linear alternate;
          animation: blur-text 1.5s 0.6s infinite linear alternate;
        }
        .loading-text span:nth-child(5) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 0.8s infinite linear alternate;
          animation: blur-text 1.5s 0.8s infinite linear alternate;
        }
        .loading-text span:nth-child(6) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 1s infinite linear alternate;
          animation: blur-text 1.5s 1s infinite linear alternate;
        }
        .loading-text span:nth-child(7) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 1.2s infinite linear alternate;
          animation: blur-text 1.5s 1.2s infinite linear alternate;
        }

        @-webkit-keyframes blur-text {
          0% {
            filter: blur(0px);
          }
          100% {
            filter: blur(4px);
          }
        }

        @keyframes blur-text {
          0% {
            filter: blur(0px);
          }
          100% {
            filter: blur(4px);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
