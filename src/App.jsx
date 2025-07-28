import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Home from './pages/Home';
// import About from './pages/About';
// import Features from './pages/Features';
// import Demo from './pages/Demo';
// import Contact from './pages/Contact';

export default function App() {
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
