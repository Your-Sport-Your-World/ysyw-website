import { useState } from "react";
import { NavItem } from "../types/types";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const navElements: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/about" },
  { name: "Connect with us", link: "/contact" },
  { name: "Advertise", link: "/adv" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white px-6 py-6 flex justify-between items-center z-50 shadow-md shadow-black">
      {/* Logo */}
      <div className="text-xl font-bold font-bruno italic tracking-wide">Your Sport Your World</div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center">
        <ul className="flex space-x-8 text-xl font-semibold">
          {navElements.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="hover:text-neon transition duration-200">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="bg-neon py-1 text-lg px-4 rounded-full text-black font-bold ml-8 hover:bg-neon transition duration-200 hover:scale-105">
          Get the App
        </button>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none"
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Menu size={28} />
      </motion.button>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 shadow-lg md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {navElements.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-lg hover:text-neon transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}

        <button className="bg-neon py-1 text-lg px-4 rounded-full text-black font-bold hover:bg-neon transition duration-200 hover:scale-105">
          Get the App
        </button>
      </motion.div>
    </nav>
  );
}

export default Navbar;
