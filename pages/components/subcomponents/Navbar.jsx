import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  // State management
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      const isAtTop = currentScrollPos < 10;

      // Only update visibility if there's a significant scroll
      if (Math.abs(prevScrollPos - currentScrollPos) > 10) {
        setVisible(isScrollingUp || isAtTop);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  // Service links for both desktop and mobile
  const serviceLinks = [
    { href: "/services/Media-kit-creation", label: "Media Kit Creation" },
    { href: "/services/brand-deals", label: "Brand Deals Outreach" },
    { href: "/services/verification", label: "PR + Verification Setup" },
    { href: "/services/ugc", label: "UGC Portfolio Setup" },
    { href: "/services/growth", label: "Monthly Influencer Growth Package" },
    {
      href: "/services/social-media-management",
      label: "Social Media Management",
    },
  ];

  return (
    <>
      {/* Navigation Section */}
      <header
        className={`flex bg-black/30 border border-white/20 justify-between items-center backdrop-blur-[2px] fixed top-4 left-1/2 -translate-x-1/2 right-0 px-6 sm:py-4 mt-5 py-0 z-50 rounded-full w-[95%] max-w-[1300px] mx-auto
        transition-all duration-700 ease-in-out transform
        ${
          visible
            ? "translate-y-0 opacity-100 rotate-0 scale-100"
            : "-translate-y-full opacity-0 -rotate-6 scale-95"
        }`}
      >
        {/* DESKTOP VIEW */}
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 mx-10 text-[16px] font-semibold">
          <Link href="/" className="text-white relative group">
            <span>Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#536a26] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about/About" className="text-white relative group">
            <span>About Us</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#536a26] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Desktop Logo */}
        <Link
          href="/"
          className="absolute mt-2 left-[50%] transform -translate-x-1/2 hidden md:flex items-center"
        >
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={60}
            className="object-cover w-[60px] h-full mb-2"
            quality={100}
            priority
          />
        </Link>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4 px-10">
          <Link
            href="/contact/Contact"
            className="relative inline-flex items-center justify-start px-6 py-2.5 overflow-hidden font-semibold rounded-full group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#AFFE14] opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#240141]">
              Enquire Now
            </span>
            <span className="absolute inset-0 border-2 border-[#AFFE14] rounded-full"></span>
          </Link>
        </div>

        {/* MOBILE VIEW */}
        {/* Mobile Logo - Left Aligned */}
        <Link href="/" className="md:hidden flex items-center">
          <div className="relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg transition-colors duration-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {showMobileMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm mt-4 p-6 rounded-2xl md:hidden border border-white/20">
            <nav className="flex flex-col space-y-6">
              <Link
                href="/"
                className="text-white hover:text-[#AFFE14] text-lg font-medium transition-colors duration-300"
                onClick={() => setShowMobileMenu(false)}
              >
                Home
              </Link>
              <Link
                href="/about/About"
                className="text-white hover:text-[#AFFE14] text-lg font-medium transition-colors duration-300"
                onClick={() => setShowMobileMenu(false)}
              >
                About Us
              </Link>
              {/* <div className="h-[1px] bg-white/20"></div>
              <div className="space-y-4">
                <p className="text-[#AFFE14] font-semibold">Our Services</p>
                {serviceLinks.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="block text-white/90 hover:text-[#AFFE14] pl-4 transition-colors duration-300"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div> */}
              <div className="pt-4">
                <Link
                  href="/contact/Contact"
                  className="block w-full py-3 px-6 text-center bg-[#AFFE14] text-black font-semibold rounded-xl hover:bg-[#8CD812] transition-colors duration-300"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Enquire Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
