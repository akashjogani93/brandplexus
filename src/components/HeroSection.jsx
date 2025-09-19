import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import banner1 from '../assets/images/banner1.png'
import banner2 from '../assets/images/banner2.png'
import banner3 from '../assets/images/banner3.png'

const banners = [
  {
    image: banner1,
    title: "Innovating the Future",
    subtitle: "We build technology that drives progress 🚀",
  },
  {
    image: banner2,
    title: "Your Vision, Our Mission",
    subtitle: "Transforming ideas into powerful solutions",
  },
  {
    image: banner3,
    title: "Scaling New Heights",
    subtitle: "Delivering excellence through innovation",
  },
];
export default function HeroSection() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);
    return (
        <div className="relative w-full h-screen overflow-hidden">
        {/* Image Slider */}
        <AnimatePresence>
            <motion.img
            key={current}
            src={banners[current].image}
            alt={banners[current].title}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
            />
        </AnimatePresence>

        {/* Dark Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

        {/* Text Section (Left Side) */}
        <div className="absolute inset-0 flex items-center px-10 md:px-20">
            <div className="text-white max-w-xl">
            <AnimatePresence mode="wait">
                <motion.div
                key={current}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.8 }}
                >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                    {banners[current].title}
                </h1>
                <p className="text-lg md:text-2xl drop-shadow-md">
                    {banners[current].subtitle}
                </p>
                </motion.div>
            </AnimatePresence>
            </div>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
            {banners.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? "bg-white scale-125" : "bg-gray-400"
                }`}
            ></button>
            ))}
        </div>
        </div>
    );
}