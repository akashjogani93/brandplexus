import { useState } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import MobileMenu from "./MobileMenu";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "About", "Services", "Products", "Contact"]

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
        
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="z-10 cursor-pointer"
        >
          <img src="/assets/headerlogo.png" alt="Logo" className="w-32" />
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium absolute left-1/2 transform -translate-x-1/2">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer relative group"
            >
              <span className="text-[#333] group-hover:text-[#AB7E06] transition-colors duration-300">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#AB7E06] group-hover:w-full transition-all duration-500"></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden cursor-pointer"
        >
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>
      </div>

       {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </nav>
  );
}
