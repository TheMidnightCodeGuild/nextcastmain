import React from "react";
import Navbar from "./components/subcomponents/Navbar";
import Testimonials from "./components/homepage/Testimonial";
import Footer from "./components/subcomponents/Footer";
import Marque from "./components/homepage/Marque";
import AboutUs from "./about/About";
import Industries from "./components/homepage/Industries";
import Technologies from "./components/homepage/Technologies";
import BackToTopButton from "./components/subcomponents/Button";
import Why from "./components/homepage/Why";
import Home from "./components/home";
import Test from "./components/test";
// import BlobCursor from "@/lib/BlobCursor";

const Index = () => {
  return (
    <div className="bg-[#000000] overflow-x-auto">
      <Navbar />

      <Home />
      <Marque />
      <AboutUs />
      <Why />
      <Industries />
      <Test />
      {/* <Technologies /> */}
      {/* <Testimonials /> */}
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
