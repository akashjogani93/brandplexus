import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

export default function ServiceCard({ service, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
      });
    }
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:shadow-xl"
    >
      {/* Service Image */}
      <img
        src={service.image}
        alt={service.title}
        className="w-20 h-20 object-contain mb-4"
      />

      {/* Title */}
      <h3 className="text-xl font-semibold text-black mb-2">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">
        {service.description}
      </p>

      {/* View More Button */}
      <button
        className="px-4 py-2 rounded-lg text-white font-medium transition-all hover:opacity-90"
        style={{ backgroundColor: "#AB7E06" }}
      >
        View More
      </button>
    </motion.div>
  );
}
