import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Ready to supercharge your UI development?
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10">
          Explore a growing collection of components, layouts, and templates built with React and Tailwind. Save time and ship beautiful products faster.
        </p>
        <Link
          to="/components"
          className="inline-block px-10 py-4 bg-white text-blue-700 font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          🚀 Start Exploring
        </Link>

        {/* Extra content */}
        <p className="mt-8 text-gray-100 max-w-md mx-auto">
          Join a community of developers building modern UIs with speed and consistency.
        </p>
      </div>
    </section>
  );
}
