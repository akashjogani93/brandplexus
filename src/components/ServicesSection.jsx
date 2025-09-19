import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

// Import images
import designImg from "../assets/services/banner1.png";
import developmentImg from "../assets/services/banner1.png";
import marketingImg from "../assets/services/banner1.png";
import seoImg from "../assets/services/banner1.png";
import analyticsImg from "../assets/services/banner1.png";
import supportImg from "../assets/services/banner1.png";

const services = [
  {
    image: designImg,
    title: "Creative Design",
    description: "Modern, user-focused designs that capture attention and convert visitors.",
  },
  {
    image: developmentImg,
    title: "Web Development",
    description: "Robust, scalable web solutions tailored to your business needs.",
  },
  {
    image: marketingImg,
    title: "Digital Marketing",
    description: "Strategies to help your brand grow and reach the right audience.",
  },
  {
    image: seoImg,
    title: "SEO Optimization",
    description: "Boost your online presence with our expert SEO services.",
  },
  {
    image: analyticsImg,
    title: "Data Analytics",
    description: "Gain insights into your data to make informed business decisions.",
  },
  {
    image: supportImg,
    title: "24/7 Support",
    description: "Reliable support to keep your digital presence running smoothly.",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center"
          style={{ color: "#AB7E06" }}
        >
          Our Services
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mt-4 mb-12 text-lg"
        >
          Everything you need to launch, grow, and scale digitally.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
