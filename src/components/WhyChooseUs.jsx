import { motion } from "framer-motion";
import { Shield, Rocket, Users, Award, Star, TrendingUp } from "lucide-react"; // modern icons

const whyChooseUsData = [
  {
    id: 1,
    icon: <Shield size={30} />,
    title: "Reliable & Secure",
    description: "We prioritize data security and ensure reliable solutions to keep your business safe."
  },
  {
    id: 2,
    icon: <Rocket size={30} />,
    title: "Fast Deployment",
    description: "Launch your digital products quickly with our streamlined development process."
  },
  {
    id: 3,
    icon: <Users size={30} />,
    title: "Expert Team",
    description: "Our team of professionals brings creativity and technical expertise to every project."
  },
  {
    id: 4,
    icon: <Award size={30} />,
    title: "Proven Track Record",
    description: "With years of experience, we have a history of delivering exceptional results."
  },
  {
    id: 5,
    icon: <Star size={30} />,
    title: "Top Quality",
    description: "We focus on quality in every detail to ensure your success in the digital world."
  },
  {
    id: 6,
    icon: <TrendingUp size={30} />,
    title: "Scalable Solutions",
    description: "Our solutions are built to scale with your business growth seamlessly."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-800 mb-4"
        >
          Why Choose Us
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-12"
        >
          Discover what makes us stand out in the digital landscape.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.id * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-[#AB7E06] text-white rounded-xl shadow-lg p-8 relative cursor-pointer transition-transform duration-300 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="absolute -top-5 -left-5 bg-white text-[#AB7E06] p-3 rounded-full shadow-md">
                {item.icon}
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/90 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
