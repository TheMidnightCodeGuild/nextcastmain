import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ChooseUs = () => {
  const headingRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate heading
    gsap.fromTo(
      headingRef.current,
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
          trigger: headingRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate features with stagger
    gsap.fromTo(
      featuresRef.current.children,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="bg-gradient-to-b from-black to-[#240141] mt-16 min-h-screen">
        <div className="w-full h-full p-2 border-b border-black">
          <div className="lg:max-w-[1300px] px-4 sm:px-6 lg:px-8 py-8 sm:py-14 pt-20 sm:pt-36 mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-20">
              <div ref={headingRef} className="space-y-6 sm:space-y-8">
                <div>
                  <h1 className="text-xl sm:text-2xl text-[#AFFE14] italic font-bold mb-2">
                    Why Choose Us?
                  </h1>
                  <h2 className="text-2xl sm:text-3xl text-white font-extrabold lg:text-4xl">
                    Your Partner in{" "}
                    <span className="text-[#AFFE14] underline">
                      Influencer Growth
                    </span>
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-gray-300">
                    Choose us for comprehensive influencer growth solutions that
                    drive real results. We deliver innovative strategies backed
                    by industry expertise and dedicated support.
                  </p>
                </div>

                <div ref={featuresRef} className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:justify-end">
                    <span className="flex-shrink-0 inline-flex justify-center items-center shadow-md size-[45px] sm:size-[55px] rounded-full border border-[#AFFE14] bg-black text-[#AFFE14] mb-3 sm:mb-0">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6h2v2h-2zm0-8h2v6h-2z" />
                      </svg>
                    </span>
                    <div className="sm:ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold text-white">
                        100% Remote Services
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-gray-300">
                        Work with us from anywhere in the world. Our
                        digital-first approach means you get professional
                        support and guidance without geographical limitations.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-end">
                    <span className="flex-shrink-0 inline-flex justify-center items-center shadow-md size-[45px] sm:size-[55px] rounded-full border border-[#AFFE14] bg-black text-[#AFFE14] mb-3 sm:mb-0">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </span>
                    <div className="sm:ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold text-white">
                        Guaranteed Instagram Verification
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-gray-300">
                        We specialize in securing the coveted blue tick through
                        legitimate PR strategies and proven verification
                        processes.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-end">
                    <span className="flex-shrink-0 inline-flex justify-center items-center shadow-md size-[45px] sm:size-[55px] rounded-full border border-[#AFFE14] bg-black text-[#AFFE14] mb-3 sm:mb-0">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                      </svg>
                    </span>
                    <div className="sm:ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold text-white">
                        Dedicated Growth Experts
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-gray-300">
                        Work directly with experienced social media strategists
                        who understand the influencer landscape and provide
                        personalized guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] ">
                <Image
                  src="/images/choose.png"
                  alt="Influencer growth illustration"
                  fill
                  className="object-contain scale-x-[-1] "
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
