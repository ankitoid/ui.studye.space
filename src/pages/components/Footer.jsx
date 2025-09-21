import React from "react";
import { FaCopy } from "react-icons/fa";

/* ---------------- FOOTER COMPONENTS ---------------- */
const Footer1 = () => (
  <footer className="px-6 py-6 bg-gray-900 text-white flex flex-col md:flex-row justify-between items-center">
    <h1 className="text-lg font-bold">StudyE</h1>
    <ul className="flex gap-6 mt-3 md:mt-0">
      <li className="hover:text-blue-400 cursor-pointer">Home</li>
      <li className="hover:text-blue-400 cursor-pointer">About</li>
      <li className="hover:text-blue-400 cursor-pointer">Services</li>
      <li className="hover:text-blue-400 cursor-pointer">Contact</li>
    </ul>
  </footer>
);

const Footer2 = () => (
  <footer className="px-6 py-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white flex justify-between items-center">
    <h1 className="text-lg font-bold">StudyE</h1>
    <p className="text-sm">© 2025 StudyE. All rights reserved.</p>
  </footer>
);

const Footer3 = () => (
  <footer className="px-6 py-10 bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 text-center">
    <h1 className="text-xl font-bold text-gray-800 dark:text-white mb-3">StudyE</h1>
    <ul className="flex justify-center gap-6 text-gray-600 dark:text-gray-300">
      <li className="hover:text-black dark:hover:text-white cursor-pointer">Privacy</li>
      <li className="hover:text-black dark:hover:text-white cursor-pointer">Terms</li>
      <li className="hover:text-black dark:hover:text-white cursor-pointer">Support</li>
    </ul>
  </footer>
);

const Footer4 = () => (
  <footer className="px-6 py-8 bg-gray-100 dark:bg-gray-800">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-lg font-bold text-gray-700 dark:text-white">StudyE</h1>
      <ul className="flex gap-6 text-gray-600 dark:text-gray-300 mt-3 md:mt-0">
        <li className="cursor-pointer hover:text-blue-600">Facebook</li>
        <li className="cursor-pointer hover:text-blue-600">Twitter</li>
        <li className="cursor-pointer hover:text-blue-600">LinkedIn</li>
      </ul>
    </div>
  </footer>
);

const Footer5 = () => (
  <footer className="px-10 py-6 bg-gray-900 text-gray-400 text-sm">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <p>© 2025 StudyE. Built with ❤️ using React & Tailwind</p>
      <ul className="flex gap-4">
        <li className="hover:text-white cursor-pointer">Docs</li>
        <li className="hover:text-white cursor-pointer">API</li>
        <li className="hover:text-white cursor-pointer">Community</li>
      </ul>
    </div>
  </footer>
);

const Footer6 = () => (
  <footer className="px-6 py-8 bg-gradient-to-r from-pink-600 to-blue-500 text-white text-center">
    <h1 className="text-lg font-bold mb-2">StudyE</h1>
    <p className="text-sm">Learn • Apply • Grow</p>
  </footer>
);

/* ---------------- RAW CODE STRINGS ---------------- */
const code1 = `<footer className="px-6 py-6 bg-gray-900 text-white flex flex-col md:flex-row justify-between items-center">...</footer>`;
const code2 = `<footer className="px-6 py-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white flex justify-between items-center">...</footer>`;
const code3 = `<footer className="px-6 py-10 bg-white dark:bg-gray-900 border-t text-center">...</footer>`;
const code4 = `<footer className="px-6 py-8 bg-gray-100 dark:bg-gray-800">...</footer>`;
const code5 = `<footer className="px-10 py-6 bg-gray-900 text-gray-400 text-sm">...</footer>`;
const code6 = `<footer className="px-6 py-8 bg-gradient-to-r from-pink-600 to-blue-500 text-white text-center">...</footer>`;

/* ---------------- SHOWCASE LAYOUT ---------------- */
export default function FooterShowcase() {
  const footers = [
    { title: "Simple Dark Footer", code: code1, component: <Footer1 />, color: "blue" },
    { title: "Gradient Footer", code: code2, component: <Footer2 />, color: "purple" },
    { title: "Centered Clean Footer", code: code3, component: <Footer3 />, color: "gray" },
    { title: "Social Footer", code: code4, component: <Footer4 />, color: "indigo" },
    { title: "Developer Footer", code: code5, component: <Footer5 />, color: "green" },
    { title: "CTA Gradient Footer", code: code6, component: <Footer6 />, color: "pink" },
  ];

  const highlightCode = (code) =>
    code
      .replace(/"(.*?)"/g, `<span class="text-green-600">"$1"</span>`)
      .replace(/className="[^"]+"/g, `<span class="text-pink-500">$&</span>`)
      .replace(/<\/[^>]+>/g, `<span class="text-red-500">$&</span>`)
      .replace(/<[^/][^>]+>/g, `<span class="text-blue-500">$&</span>`);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied!");
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-[#0a0a0a] dark:via-[#121212] dark:to-[#1a1a1a] py-16">
      <div className="max-w-7xl mx-auto px-2">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Footer Components
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore multiple footer styles with real previews & copy-ready code.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {footers.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
            >
              {/* Preview */}
              <div className="flex-1 flex flex-col justify-center items-center p-1 bg-gray-50 dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
                  {item.title} Preview
                </h3>
                <div className="w-full border border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 shadow-inner">
                  {item.component}
                </div>
              </div>

              {/* Code */}
              <div className="flex-1 relative p-4 bg-gray-50 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  {item.title} Code
                </h3>
                <pre className="whitespace-pre-wrap text-xs md:text-sm bg-gray-100 dark:bg-gray-900 p-4 rounded-lg border border-gray-300 dark:border-gray-600 max-h-[70vh] overflow-auto">
                  <code
                    dangerouslySetInnerHTML={{ __html: highlightCode(item.code) }}
                  />
                </pre>
                <button
                  onClick={() => copyCode(item.code)}
                  className={`absolute top-6 right-6 p-2 bg-${item.color}-600 text-white rounded-lg shadow hover:bg-${item.color}-700 transition flex items-center gap-1 text-sm`}
                >
                  <FaCopy /> Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
