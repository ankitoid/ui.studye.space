import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import responsive from "../assets/slider-image/Responsive.svg";
import customization from "../assets/slider-image/customization.svg"; 
import Intractive from "../assets/slider-image/Sailor.svg";

const slides = [
  {
    id: 1,
    title: "Beautiful UI Components",
    desc: "Pre-built React + Tailwind components to kickstart your projects.",
    image: responsive,
    buttonText: "Explore Components",
    buttonLink: "/components",
    reverse: false,
  },
  {
    id: 2,
    title: "Customizable Layouts",
    desc: "Easily tweak layouts and styles to fit your project’s design.",
    image: customization,
    buttonText: "See Features",
    buttonLink: "/features",
    reverse: true,
  },
  {
    id: 3,
    title: "Interactive & Responsive",
    desc: "Fully responsive designs with built-in animations and interactivity.",
    image: Intractive,
    buttonText: "Learn More",
    buttonLink: "/about",
    reverse: false,
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrent(index);

  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center px-6 md:px-12"
          >
            {/* Conditional layout: reverse or not */}
            <div
              className={`flex-1 ${
                slide.reverse ? "order-2 md:order-1" : "order-1"
              } text-center md:text-left md:pr-12`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {slide.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg md:text-xl">
                {slide.desc}
              </p>
              <Link
                to={slide.buttonLink}
                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
              >
                {slide.buttonText}
              </Link>
            </div>

            <div
              className={`flex-1 mt-8 md:mt-0 ${
                slide.reverse ? "order-1 md:order-2" : "order-2"
              } flex justify-center`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full max-w-sm md:max-w-md drop-shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 dark:text-white text-gray-700 p-3 md:p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition z-10"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 dark:text-white text-gray-700 p-3 md:p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition z-10"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              current === index
                ? "bg-blue-600 dark:bg-blue-400"
                : "bg-gray-400 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
