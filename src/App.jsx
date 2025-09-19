import { Routes, Route } from 'react-router-dom';
import Lenis from "@studio-freight/lenis";
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Home from './pages/Home';
import { useEffect } from 'react';
// import About from './pages/About';
// import Features from './pages/Features';
// import Demo from './pages/Demo';
// import Contact from './pages/Contact';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Navbar />
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}
