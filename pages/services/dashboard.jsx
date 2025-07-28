import React from "react";
import Image from "next/image";
import Navbar from "../components/subcomponents/Navbar";
import Footer from "../components/subcomponents/Footer";
import Dashboardbanner from "../components/banners/Dashboardbanner";
import Cards from "./Cards";
const Dashboard = () => {
  return (
    <div className="bg-black">
      {/* Banner Section */}
      <Navbar />
      <Dashboardbanner />
      <div className="w-full mx-auto py-6 sm:py-8 md:py-12 lg:py-24 px-4 sm:px-6 lg:px-14 bg-black">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-0 ">
          <div className="flex items-center justify-start md:justify-start lg:ml-8 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-400">
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M17.30 5 22 12m5  75M21 12H0"
              />
            </svg>

            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold mb-2 sm:mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent ml-2 sm:ml-3 md:ml-5 pt-1 sm:pt-2">
              Our Development Process
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
          <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[340px] h-auto md:h-[320px] bg-[#0A1019] text-white p-4 sm:p-6 rounded-2xl shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-blue-400 text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center">
              Step 01
            </h2>
            <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-center">
              Requirements Analysis
            </h3>

            <div className="border-b border-gray-700 w-full mb-3 sm:mb-4 md:mb-6"></div>

            <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg text-center">
              Detailed analysis of dashboard requirements, user roles, and data
              visualization needs.
            </p>
          </div>

          <svg
            className="hidden md:block w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>

          <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[340px] h-auto md:h-[320px] bg-gradient-to-br from-blue-400 to-blue-600 text-white p-4 sm:p-6 rounded-2xl shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center">
              Step 02
            </h2>
            <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-center">
              Design & Development
            </h3>

            <div className="border-b border-white/20 w-full mb-3 sm:mb-4 md:mb-6"></div>

            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg text-center leading-relaxed">
              Creating intuitive interfaces with responsive design and
              implementing robust backend functionality.
            </p>
          </div>

          <svg
            className="hidden md:block w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>

          <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[340px] h-auto md:h-[320px] bg-[#0A1019] text-white p-4 sm:p-6 rounded-2xl shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-blue-400 text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center">
              Step 03
            </h2>
            <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-center">
              Testing & Deployment
            </h3>

            <div className="border-b border-gray-700 w-full mb-3 sm:mb-4 md:mb-6"></div>

            <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg text-center leading-relaxed">
              Rigorous testing and secure deployment with continuous monitoring
              and support.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-14 bg-neutral-900">
        <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <div className="flex items-center justify-start md:justify-start lg:ml-8 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-400">
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M17.30 5 22 12m5  75M21 12H0"
              />
            </svg>

            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold mb-2 sm:mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent ml-2 sm:ml-3 md:ml-5 pt-1 sm:pt-2">
              Our Dashboard Solutions
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-xl font-bold max-w-3xl text-neutral-400 lg:ml-8">
            We specialize in creating powerful, user-friendly dashboards and
            portals that transform complex data into actionable insights. Our
            solutions are tailored to meet your specific business needs.
          </p>
        </div>
        <Cards />
      </div>

      <div className="w-full mx-auto py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-14 mt-10 bg-black">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 lg:gap-14">
          <div className="w-full lg:w-1/2 px-2 sm:px-4 md:px-6 lg:px-12">
            <Image
              src="/images/banner.jpg"
              alt="Dashboard Development Process"
              width={400}
              height={267}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-neutral-200">
              Dashboard Development Features
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base md:text-base mb-4 sm:mb-6 md:mb-8">
              Our dashboard development services include comprehensive features
              designed to provide powerful data visualization and management
              capabilities:
            </p>

            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {[
                {
                  title: "Real-time Analytics",
                  description: "Live data monitoring and instant insights",
                },
                {
                  title: "Custom Visualization",
                  description:
                    "Tailored charts, graphs, and interactive reports",
                },
                {
                  title: "User Management",
                  description: "Role-based access control and permissions",
                },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-neutral-100 p-1.5 rounded-full">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-100 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm md:text-base lg:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-14 bg-black">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 lg:gap-14">
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-neutral-200">
              Technical Expertise
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base md:text-base mb-4 sm:mb-6 md:mb-8">
              Our team brings extensive experience in dashboard and portal
              development, utilizing cutting-edge technologies and best
              practices:
            </p>

            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {[
                {
                  title: "Modern Frameworks",
                  description:
                    "React, Angular, Vue.js for robust frontend development",
                },
                {
                  title: "Data Integration",
                  description:
                    "Seamless integration with multiple data sources and APIs",
                },
                {
                  title: "Performance Optimization",
                  description: "Fast loading times and efficient data handling",
                },
                {
                  title: "Security Implementation",
                  description:
                    "Advanced security measures and data protection protocols",
                },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-neutral-100 p-1.5 rounded-full">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-100 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm md:text-base lg:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-2 sm:px-4 md:px-6 lg:px-12">
            <Image
              src="/images/banner.jpg"
              alt="Dashboard Development Expertise"
              width={400}
              height={267}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
