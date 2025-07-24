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