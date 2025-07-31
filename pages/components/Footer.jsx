import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#AFFE14] transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#AFFE14] transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              href="mailto:contact@example.com"
              className="text-gray-400 hover:text-[#AFFE14] transition-colors duration-300"
            >
              <MdEmail size={24} />
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            Contact us at: hello@nexcast.co.in
          </p>
          <p className="text-gray-400 text-sm">
            Designed and Developed by{" "}
            <span className="text-[#AFFE14]">
              <Link href="https://www.noxalgo.com" target="_blank">
                Noxalgo
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
