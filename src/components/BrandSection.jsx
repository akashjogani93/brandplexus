import React from "react";
import { motion } from "framer-motion";
const BrandSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden px-6"
      style={{
        backgroundImage: "url('assets/images/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Fixed background for parallax effect
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center">
        
        {/* Main Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#AB7E06] mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Brand Plexus
        </motion.h2>

        {/* Subheading */}
        <motion.h3
          className="text-xl md:text-2xl text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Everything you need to launch, grow, and scale digitally.
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-gray-200 leading-relaxed text-lg max-w-4xl mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </motion.p>

        {/* IoT Section */}
        <motion.div
          className="w-full mt-10"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-[#AB7E06] mb-4">
            Our IoT Innovations
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto mb-10">
            We integrate cutting-edge IoT solutions to connect devices,
            optimize workflows, and bring automation to industries like aerospace,
            smart homes, and manufacturing. Our goal is to create smarter, more
            efficient systems with next-gen IoT technology.
          </p>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto pb-5">
            {/* Image 1 */}
            <motion.div
              className="relative group overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <img
                src="/assets/images/banner3.png"
                alt="IoT Example 1"
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              className="relative group overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
            >
              <img
                src="/assets/images/banner3.png"
                alt="IoT Example 2"
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandSection;
