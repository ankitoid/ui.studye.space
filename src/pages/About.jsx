// src/pages/About.jsx
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About StudyE UI</h1>
          <p className="text-lg md:text-xl">
            A modern library of reusable components built with React & Tailwind CSS.  
            Save time. Build faster. Ship beautiful apps.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          At <span className="font-semibold text-blue-600 dark:text-blue-400">StudyE UI</span>, 
          we aim to empower developers with production-ready UI components 
          that are flexible, accessible, and easy to integrate.  
          Whether you’re building a startup MVP or a large-scale product, our goal is 
          to help you build interfaces that users love — in less time.
        </p>
      </section>

      {/* Values / Features Grid */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3 text-center">
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">⚡ Fast Development</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Pre-built, customizable components that let you ship features at lightning speed.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">🎨 Beautiful Design</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Carefully crafted with modern design trends and dark mode support out of the box.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">🛠 Easy Integration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Built with React + Tailwind CSS, making it easy to drop into your existing projects.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Start Building Today</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Explore our growing collection of components and level up your UI game.
        </p>
        <a
          href="/components"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Browse Components
        </a>
      </section>
    </div>
  );
}
