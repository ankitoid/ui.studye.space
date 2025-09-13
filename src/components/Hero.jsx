// src/components/Hero.jsx
import heroImage from "../assets/hero.svg"; // put an image inside src/assets

export default function Hero() {
  return (
   <section id="hero" className="bg-gray-50 dark:bg-[#020202e1] pt-20 pb-12 transition-colors duration-300 min-h-screen">
  <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
        Build UI <span className="text-blue-600">Faster</span> with  
        <br /> React + Tailwind
      </h1>
      <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-md">
        Ready-to-use components, charts, and layouts for developers. 
        Save time and ship beautiful products faster.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Get Started
        </button>
        <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          View Components
        </button>
      </div>
    </div>
    <div className="flex-1 mt-10 md:mt-0 flex justify-center">
      <img 
        src={heroImage} 
        alt="UI Illustration" 
        className="w-full max-w-md drop-shadow-lg"
      />
    </div>
  </div>
</section>

  );
}
