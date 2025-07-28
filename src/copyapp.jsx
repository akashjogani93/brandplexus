import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">
        Tailwind CSS is Working! 🎉
      </h1>
      <p className="text-xl text-yellow-200 bg-gray-800 p-3 rounded-lg shadow-xl">
        Count: {count}
      </p>
      <button
        className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition duration-300 ease-in-out transform hover:-translate-y-1"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <div className="mt-8 flex space-x-4">
        <img src={reactLogo} alt="React Logo" className="w-16 h-16 rotate-12" />
        <img src={viteLogo} alt="Vite Logo" className="w-16 h-16 scale-110" />
      </div>
    </div>
  );
}

export default App;

<nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-2xl font-bold">MyApp</div>

        {/* Center Menu (hidden on mobile) */}
        <div className="hidden md:flex space-x-8 mx-auto">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/features" className="hover:text-blue-400">Features</Link>
          <Link to="/demo" className="hover:text-blue-400">Demo</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>

        {/* Right: Hamburger (mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" /> // X icon
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" /> // Hamburger icon
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-2">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/features" className="hover:text-blue-400">Features</Link>
          <Link to="/demo" className="hover:text-blue-400">Demo</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>
      )}
    </nav>