import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isNavHover, setIsNavHover] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 200 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    const handleEnterNav = () => setIsNavHover(true);
    const handleLeaveNav = () => setIsNavHover(false);

    window.addEventListener("mousemove", move);

    const nav = document.querySelector("nav");
    if (nav) {
      nav.addEventListener("mouseenter", handleEnterNav);
      nav.addEventListener("mouseleave", handleLeaveNav);
    }

    return () => {
      window.removeEventListener("mousemove", move);
      if (nav) {
        nav.removeEventListener("mouseenter", handleEnterNav);
        nav.removeEventListener("mouseleave", handleLeaveNav);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`fixed top-0 left-0 w-5 h-5 bg-yellow-500 rounded-full pointer-events-none z-[9999] transition-opacity duration-200 ${
        isNavHover ? "opacity-0" : "opacity-100"
      }`}
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
    />
  );
}
