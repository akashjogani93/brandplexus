import { motion } from "framer-motion";

const menuVariants = {
  hidden: {
    x: "100%",
    opacity: 0,
    rotateY: 90,
    transition: { duration: 0.5 },
  },
  visible: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    rotateY: 90,
    transition: { duration: 0.5 },
  },
};

export default function MobileMenu({ onClose }) {
  return (
    <motion.div
      className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 flex flex-col gap-6 p-6"
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <button
        onClick={onClose}
        className="self-end text-xl font-bold text-gray-600"
      >
        ✕
      </button>
      <a href="/" onClick={onClose}>Home</a>
      <a href="/features" onClick={onClose}>Features</a>
      <a href="/about" onClick={onClose}>About</a>
      <a href="/contact" onClick={onClose}>Contact</a>
    </motion.div>
  );
}
