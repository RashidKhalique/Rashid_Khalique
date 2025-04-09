import React from 'react';
import Nav from './Nav';
import { motion } from "framer-motion";

const Head = () => {
  return (
    <header
      className="min-h-screen bg-[#673AB7] bg-cover bg-center flex items-center w-full overflow-hidden cursor-pointer"
      id="Header"
    >
      <Nav/>
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="container mx-auto px-6 py-4 md:px-10 lg:px-20 flex flex-col md:flex-row gap-10 items-center"
      >
        {/* Content Section */}
        <div className="text-white flex-1 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-[82px] font-bold leading-tight md:mt-20 hover:animate-pulse">
            Rashid Khalique
          </h1>
          <p className="mt-4 text-lg max-w-xl mx-auto md:mx-0">
          I am Rashid Khalique, a MERN Stack Developer with 7 months of experience as a Frontend Developer at Icreativez Technology. With expertise in Node.js and React, I am passionate about creating dynamic and responsive applications and contributing to innovative development teams.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <a href="#Project" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-[#673AB7] transition">
              Project
            </a>
            <a href="#Contact" className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 transition">
              Contact Us
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-md pt-4">
          <img
            src="https://res.cloudinary.com/cloudpip/image/upload/v1742887796/ubbidzm64q8ffcdfn1vq.png"
            alt="Mern Stack Developer"
            className="  "
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Head;