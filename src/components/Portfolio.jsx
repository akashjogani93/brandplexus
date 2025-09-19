import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

// Import Images from src/assets/portfolio
import aerospaceImg from "../assets/portfolio/banner1.png";
import ecommerceImg from "../assets/portfolio/banner1.png";
import restaurantImg from "../assets/portfolio/banner1.png";
import realestateImg from "../assets/portfolio/banner1.png";
import graphicsImg from "../assets/portfolio/banner1.png";
import stocksImg from "../assets/portfolio/banner1.png";


// Portfolio Data
const portfolioData = [
  {
    id: 1,
    title: "Aerospace",
    description: "Building the future of space technology with innovation.",
    image: aerospaceImg,
  },
  {
    id: 2,
    title: "E-commerce",
    description: "Smart solutions to grow your online business globally.",
    image: ecommerceImg,
  },
  {
    id: 3,
    title: "Restaurant",
    description: "Delicious designs to elevate food businesses digitally.",
    image: restaurantImg,
  },
  {
    id: 4,
    title: "Real Estate",
    description: "Transforming real estate businesses through technology.",
    image: realestateImg,
  },
  {
    id: 5,
    title: "Graphics",
    description: "Creative and modern graphic design for brands.",
    image: graphicsImg,
  },
  {
    id: 6,
    title: "Stocks",
    description: "Smart platforms for seamless stock trading.",
    image: stocksImg,
  },
];

const PortfolioCard = ({ item }) => {
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      ref={cardRef}
      className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500"
    >
      {/* Background Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90"></div>

      {/* Text Content */}
      <div className="absolute bottom-5 left-5 right-5 text-white">
        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
        <p className="text-sm text-gray-200">{item.description}</p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section className="w-full py-20 bg-black">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-4"
        >
          Our Portfolio
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12"
        >
          A glimpse of our work across diverse industries.
        </motion.p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
