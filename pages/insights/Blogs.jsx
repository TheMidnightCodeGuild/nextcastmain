import React from "react";
import Navbar from "../components/subcomponents/Navbar";
import Footer from "../components/subcomponents/Footer";
import BlogCard from "../components/subcomponents/BlogCard";
import Blogbanner from "../components/banners/Blogbanner";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <Blogbanner />
      <BlogCard />
      <Footer />
    </>
  );
};

export default Blogs;
