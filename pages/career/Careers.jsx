// import React, { useState } from "react";
// import Navbar from "../components/subcomponents/Navbar";
// import Footer from "../components/subcomponents/Footer";
// import Careerbanner from "../components/banners/Careerbanner";

// const Careers = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     position: "",
//     resume: null,
//     coverLetter: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//   };

//   const openPositions = [
//     { title: "Software Engineer" },
//     { title: "Product Manager" },
//     { title: "UX Designer" },
//     { title: "Marketing Manager" },
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "file" ? files[0] : value,
//     }));
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <Careerbanner />

//       <div className="flex-grow bg-[#171717] py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
//               Join Our Team
//             </h1>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               We're always looking for talented individuals to join our growing
//               team. Check out our open positions below.
//             </p>
//           </div>

//           <div className="mt-16 bg-neutral-800 rounded-2xl p-8 max-w-3xl mx-auto">
//             <h2 className="text-2xl font-bold text-gray-100 mb-4 text-center">
//               Apply for a Position
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-gray-100 text-sm font-medium mb-2">
//                     Full Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full p-3 bg-neutral-700 border-neutral-600 text-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-100 text-sm font-medium mb-2">
//                     Email Address <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full p-3 bg-neutral-700 border-neutral-600 text-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-100 text-sm font-medium mb-2">
//                     Phone Number <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full p-3 bg-neutral-700 border-neutral-600 text-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-100 text-sm font-medium mb-2">
//                     Position <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     name="position"
//                     value={formData.position}
//                     onChange={handleChange}
//                     className="w-full p-3 bg-neutral-700 border-neutral-600 text-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                     required>
//                     <option value="">Select a position</option>
//                     {openPositions.map((position, index) => (
//                       <option key={index} value={position.title}>
//                         {position.title}
//                       </option>
//                     ))}
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-gray-100 text-sm font-medium mb-2">
//                   Resume/CV <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="file"
//                   name="resume"
//                   onChange={handleChange}
//                   accept=".pdf,.doc,.docx"
//                   className="w-full p-3 bg-neutral-700 border-neutral-600 text-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                   required
//                 />
//                 <p className="mt-1 text-sm text-gray-400">
//                   Accepted formats: PDF, DOC, DOCX
//                 </p>
//               </div>

//               <div>
//                 <label className="block text-gray-100 text-sm font-medium mb-2">
//                   Cover Letter
//                 </label>
//                 <textarea
//                   name="coverLetter"
//                   value={formData.coverLetter}
//                   onChange={handleChange}
//                   className="w-full p-3 bg-neutral-700 border-neutral-600 text-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                   rows="4"
//                   placeholder="Tell us why you'd be a great fit..."></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white py-3 px-8 rounded-xl font-medium hover:bg-blue-600/90 transition-all transform hover:scale-[0.99]">
//                 Submit Application
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Careers;
