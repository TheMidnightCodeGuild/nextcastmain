import React from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Marque from "./components/Marque";
import AboutUs from "./components/About";
import Industries from "./components/Industries";
import Technologies from "./components/Technologies";
import BackToTopButton from "./components/Button";
import Why from "./components/Why";
import Home from "./components/home";
import Test from "./components/test";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

const Index = () => {
  return (
    <>
      <Head>
        <title>NexCast Entertainment - Creative Content Consultancy</title>
        <meta
          name="description"
          content="NexCast Entertainment is a leading creative content consultancy helping businesses grow online through innovative solutions and strategies."
        />
        <meta
          name="keywords"
          content="creative content consultancy, content creation, content strategy, content marketing, content distribution, content analytics"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="NexCast Entertainment - Creative Content Consultancy"
        />
        <meta
          property="og:description"
          content="Transform your online presence with our expert creative content consultancy services."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://nexcast.co.in" />
      </Head>

      <div className="bg-[#000000] overflow-x-hidden">
        <Loader />
        <Navbar />
        <Home />
        <Marque />
        <AboutUs />
        <Why />
        <Industries />
        <div className="hidden md:block">
          <Test />
        </div>
        <Technologies />
        <Contact />
        <Footer />
        <BackToTopButton />
      </div>
    </>
  );
};

export default Index;
