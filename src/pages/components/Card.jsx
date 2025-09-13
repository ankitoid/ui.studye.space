import React from "react";
import { FaCopy } from "react-icons/fa";

export default function Card() {
  const codeString1 = `<div className="max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"><img src="img.jpeg" alt="Random" className="w-full h-48 object-cover"/>
  <div className="p-6"> <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Card Title</h2>
   <p className="text-gray-700 dark:text-gray-300 mb-4">This is a basic card component. </p>
    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">Learn More
    </button></div></div>`;

  const codeString2 = `<div className="max-w-sm bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
  <img src="https://images.pexels.com/photos/4861357/pexels-photo-4861357.jpeg" alt="Nature" className="w-full h-48 object-cover"/>
  <div className="p-6">
    <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Nature Card</h2>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      A simple card with a scenic image and extra description text.
    </p>
    <button className="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
      Explore
    </button>
  </div>
</div>`;

  const highlightCode = (code) => {
    return code
      .replace(/({\/\*.*\*\/})/g, `<span class="text-gray-400">$1</span>`) // comments
      .replace(/"(.*?)"/g, `<span class="text-green-600">"$1"</span>`) // strings
      .replace(/className="[^"]+"/g, `<span class="text-pink-500">$&</span>`) // className
      .replace(/<\/[^>]+>/g, `<span class="text-red-500">$&</span>`) // closing tags
      .replace(/<[^/][^>]+>/g, `<span class="text-blue-500">$&</span>`); // opening tags
  };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied!");
  };

  return (
    <>
      {/* First Card */}
      <div className="flex flex-col md:flex-row gap-6 bg-gray-100 dark:bg-[#020202e1] text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen p-6">
        {/* Left: Preview */}
        <div className="flex-1 flex justify-center items-center">
          <div className="max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
            <img
              src="https://images.pexels.com/photos/18165242/pexels-photo-18165242.jpeg"
              alt="Random"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                Card Title
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This is a basic card component.
              </p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Right: Code */}
        <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md relative overflow-auto max-h-[80vh]">
          <pre className="whitespace-pre-wrap text-xs md:text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
            <code
              dangerouslySetInnerHTML={{ __html: highlightCode(codeString1) }}
            />
          </pre>
          <button
            onClick={() => copyCode(codeString1)}
            className="absolute top-2 right-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center gap-1 text-sm"
          >
            Copy <FaCopy />
          </button>
        </div>
      </div>

<h1 className="text-center items-center py-2 text-4xl bg-gray-100">New style</h1>
      {/* Second Card */}
      <div className="flex flex-col md:flex-row gap-6 bg-gray-100 dark:bg-[#020202e1] text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen p-6">
        {/* Left: Preview */}
        <div className="flex-1 flex justify-center items-center">
          <div className="max-w-sm bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
            <img
              src="https://images.pexels.com/photos/4861357/pexels-photo-4861357.jpeg"
              alt="Nature"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Nature Card
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A simple card with a scenic image and extra description text.
              </p>
              <button className="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* Right: Code */}
        <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md relative overflow-auto max-h-[80vh]">
          <pre className="whitespace-pre-wrap text-xs md:text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
            <code
              dangerouslySetInnerHTML={{ __html: highlightCode(codeString2) }}
            />
          </pre>
          <button
            onClick={() => copyCode(codeString2)}
            className="absolute top-2 right-2 p-2 bg-green-600 text-white rounded hover:bg-green-700 transition flex items-center gap-1 text-sm"
          >
            Copy <FaCopy />
          </button>
        </div>
      </div>
    </>
  );
}
