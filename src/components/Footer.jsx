import slogo from "../assets/favicon-w.png"
export default function Footer() {

  return (
    <footer className="bg-gray-800 dark:bg-[#020202e1] text-gray-200 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and description */}
        <div>
          <h1 className="flex gap-2  text-2xl font-bold text-blue-500 mb-2">
            <span>
              <img src={slogo} alt="studye logo " className="h-6 w-6 mt-1" />
            </span>
            StudyE UI</h1>
          <p className="text-gray-400">
            Build modern, responsive, and beautiful UIs faster with ready-to-use React + Tailwind components.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
            <li><a href="/components" className="hover:text-blue-500 transition">Components</a></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Connect</h2>
          <p className="text-gray-400 mb-3">Email: support@studye.space</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition">🌐</a>
            <a href="#" className="hover:text-blue-500 transition">🐦</a>
            <a href="#" className="hover:text-blue-500 transition">💼</a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-500">
        © {new Date().getFullYear()} StudyE UI. All rights reserved.
      </div>
    </footer>
  );
}
