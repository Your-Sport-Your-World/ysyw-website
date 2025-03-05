"use client";
// import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
      {/* Background Image with Halftone Effect */}
      <div
        style={{ backgroundImage: "url('/bg-bw.jpg')" }} // Replace with your image path
        className="absolute inset-0 bg-cover bg-center filter h-screen w-screen contrast-150 brightness-75"
      />

      {/* Overlay to Darken Background */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-white px-6">
        
        <h1 className="text-5xl md:text-7xl font-extrabold font-bruno uppercase leading-tight">
          One Game. <br /> One Passion.
        </h1>
        <h1 className="text-5xl md:text-7xl text-neon font-extrabold font-bruno uppercase leading-tight">
          One Goal!. <br /> 
        </h1>

        {/* Green Highlight */}
        <div className="w-48 h-1 bg-neon mx-auto mt-3"></div>

        <p className="text-lg mt-4">
          Challenge yourself, grow with us, and become <br /> part of our community.
        </p>

        {/* Call-to-Action Button */}
        <button className="mt-6 bg-neon text-black font-bold py-3 px-6 rounded-full text-lg transition-transform hover:scale-105">
          Join Us Now!
        </button>
      </div>
    </section>
  );
}

export default Hero;
