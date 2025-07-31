import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase"; // Import the initialized db instance

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    website: "",
    industry: "",
    source: "",
    budget: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: new Date(),
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        company: "",
        email: "",
        website: "",
        industry: "",
        source: "",
        budget: "",
      });

      alert("Thank you for your submission!");
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-black to-gray-900"
      id="contact"
    >
      <div className="max-w-4xl mx-auto py-32 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/20">
          <h2 className="text-5xl font-bold text-white mb-2 text-center bg-clip-text bg-gradient-to-r from-[#AFFE14] to-green-400">
            Let&apos;s Create Together
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Tell us about your project and let&apos;s start something amazing
          </p>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-sm font-medium text-[#AFFE14] mb-2 tracking-wide uppercase">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 hover:bg-white/10"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#AFFE14] mb-2 tracking-wide uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  placeholder="Enter 10 digit number"
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 hover:bg-white/10"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-[#AFFE14] mb-2 tracking-wide uppercase">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 hover:bg-white/10"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#AFFE14] mb-2 tracking-wide uppercase">
                  Business Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  placeholder="you@company.com"
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 hover:bg-white/10"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-[#AFFE14] mb-2 tracking-wide uppercase">
                  Website URL
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 hover:bg-white/10"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#AFFE14] mb-2 tracking-wide uppercase">
                  Industry
                </label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder="e.g. Technology, Healthcare"
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 hover:bg-white/10"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#AFFE14] mb-2 tracking-wide uppercase">
                How did you hear about us?
              </label>
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white hover:bg-white/10"
              >
                <option value="" className="bg-gray-900">
                  Select...
                </option>
                <option value="search" className="bg-gray-900">
                  Search Engine
                </option>
                <option value="social" className="bg-gray-900">
                  Social Media
                </option>
                <option value="referral" className="bg-gray-900">
                  Referral
                </option>
                <option value="advertisement" className="bg-gray-900">
                  Advertisement
                </option>
                <option value="other" className="bg-gray-900">
                  Other
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#AFFE14] mb-2 tracking-wide uppercase">
                Monthly Marketing Budget
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white hover:bg-white/10"
              >
                <option value="" className="bg-gray-900">
                  Select Budget Range...
                </option>
                <option value="under25k" className="bg-gray-900">
                  Under ₹25,000
                </option>
                <option value="25to50k" className="bg-gray-900">
                  ₹25,000 - ₹50,000
                </option>
                <option value="50to1lakh" className="bg-gray-900">
                  ₹50,000 - ₹1,00,000
                </option>
                <option value="above1lakh" className="bg-gray-900">
                  Above ₹1,00,000
                </option>
              </select>
            </div>

            <div className="text-center pt-8">
              <button
                type="submit"
                className="px-12 py-4 bg-gradient-to-r from-[#AFFE14] to-green-400 text-black font-bold rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#AFFE14] focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Let&apos;s Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
