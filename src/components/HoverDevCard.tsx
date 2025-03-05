"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface CardType {
  title: string;
  subtitle: string;
  Icon: IconType;
  href?: string;
}

const Card = ({ title, subtitle, Icon, href }: CardType) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 50, scale: 0.9 }} // Start invisible & slightly below
      whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animate when in viewport
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of it is visible
      transition={{ duration: 0, ease: "easeIn" }} // Smooth animation
      className="p-4 border-[1px] border-slate-600 relative group h-[350px] w-[450px] 
                 overflow-hidden bg-gray-500 rounded-2xl shadow-md shadow-green-600"
    >
      {/* Background Gradient Animation */}
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        transition={{ duration: 0, ease: "easeIn" }}
        className="absolute inset-0 bg-gradient-to-r from-neon to-green-500 
                   translate-y-[100%] group-hover:translate-y-[0%] 
                   transition-transform duration-300"
      />

      {/* Large Icon (Rotates on Hover) */}
      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-300 
                      group-hover:text-green-900 group-hover:rotate-12 
                      transition-transform duration-300" />
      
      {/* Small Icon */}
      <Icon className="mb-2 text-2xl text-slate-100 group-hover:text-green-900 
                      transition-colors relative z-10 duration-300" />
      
      {/* Title */}
      <h3 className="text-8xl font-extrabold text-slate-50 group-hover:text-green-900 
                     relative z-10 duration-300 font-bruno">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="text-slate-100 group-hover:text-green-700 relative z-10 
                    duration-300 text-3xl">
        {subtitle}
      </p>
    </motion.a>
  );
};

export default Card;
