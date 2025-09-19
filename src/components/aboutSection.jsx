import { motion } from "framer-motion";
import aboutImg from "../assets/images/banner1.png"; // Replace with your image

export default function AboutSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Center Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ color: "#AB7E06" }}
        >
          Who We Are
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-black">
              Building Innovation & Excellence
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We are passionate about creating solutions that drive real impact.
              With a strong commitment to innovation, our team blends
              creativity, technology, and expertise to deliver world-class
              products and services.  
              <br /><br />
              Our mission is to transform ideas into reality and help businesses
              grow through cutting-edge digital solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg text-white font-medium shadow-lg transition-all"
              style={{ backgroundColor: "#AB7E06" }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* RIGHT SIDE - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={aboutImg}
              alt="About Us"
              className="rounded-2xl shadow-lg max-w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
