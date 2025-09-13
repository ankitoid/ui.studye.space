// src/pages/Button.jsx
import React from "react";
import { FaCopy } from "react-icons/fa";

export default function Button() {
  const codeString = `<button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
  Primary Button
</button>
<button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition">
  Secondary Button
</button>`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    alert("Code copied!");
  };

  // Highlight JSX tags & classNames
  const highlightedCode = codeString
    .replace(/<[^>]+>/g, (match) =>
      match.startsWith("</")
        ? `<span class="text-red-500">${match}</span>`
        : `<span class="text-blue-500">${match}</span>`
    )
    .replace(/className="[^"]+"/g, (match) => `<span class="text-pink-500">${match}</span>`);

  return (
    <div className="flex flex-col md:flex-row gap-6   p-1 dark:bg-[#020202e1] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Left: Preview */}
      <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col gap-6">
        <h1 className="text-3xl font-bold mb-4">Button Component</h1>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Primary Button
          </button>
          <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            Secondary Button
          </button>
        </div>
      </div>

      {/* Right: Code */}
      <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md relative overflow-auto max-h-[70vh]">
        <pre className="whitespace-pre-wrap text-sm md:text-base bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
        <button
          onClick={copyCode}
          className="absolute top-2 right-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-1 text-sm"
        >
          Copy <FaCopy />
        </button>
      </div>
    </div>
  );
}
