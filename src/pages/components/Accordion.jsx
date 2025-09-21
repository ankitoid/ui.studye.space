import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function AccordionShowcase() {
  const codeString1 = `<div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
  <details className="border-b border-gray-200 dark:border-gray-700">
    <summary className="cursor-pointer py-3 px-4 font-semibold flex justify-between items-center">
      Accordion Item 1 <span>+</span>
    </summary>
    <p className="px-4 pb-4 text-gray-600 dark:text-gray-300">
      Content for item 1 goes here. It provides a simple and clean accordion layout.
    </p>
  </details>
  <details className="border-b border-gray-200 dark:border-gray-700">
    <summary className="cursor-pointer py-3 px-4 font-semibold flex justify-between items-center">
      Accordion Item 2 <span>+</span>
    </summary>
    <p className="px-4 pb-4 text-gray-600 dark:text-gray-300">
      Another item that you can expand and collapse for hidden details.
    </p>
  </details>
</div>`;

  const codeString2 = `<div className="max-w-md mx-auto bg-gradient-to-r from-purple-200 via-purple-100 to-purple-50 dark:from-purple-800 dark:via-purple-900 dark:to-purple-950 rounded-lg shadow-md p-4">
  <div className="border border-purple-300 dark:border-purple-600 rounded-md">
    <details>
      <summary className="cursor-pointer py-3 px-4 font-semibold bg-purple-300/60 dark:bg-purple-700">
        Bordered Item 1
      </summary>
      <p className="px-4 pb-4 text-gray-700 dark:text-gray-200">
        This accordion has a colorful border and gradient background for style.
      </p>
    </details>
    <details>
      <summary className="cursor-pointer py-3 px-4 font-semibold bg-purple-300/60 dark:bg-purple-700">
        Bordered Item 2
      </summary>
      <p className="px-4 pb-4 text-gray-700 dark:text-gray-200">
        Great for separating structured content with visual cues.
      </p>
    </details>
  </div>
</div>`;

  const codeString3 = `<div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">FAQ</h2>
  <details className="mb-3">
    <summary className="cursor-pointer py-2 font-medium flex justify-between items-center">
      What is StudyE? <span>+</span>
    </summary>
    <p className="mt-2 text-gray-600 dark:text-gray-300">
      StudyE is a modern learning platform for coding interviews & tutorials.
    </p>
  </details>
  <details className="mb-3">
    <summary className="cursor-pointer py-2 font-medium flex justify-between items-center">
      Is dark mode supported? <span>+</span>
    </summary>
    <p className="mt-2 text-gray-600 dark:text-gray-300">
      Yes! Our components are fully optimized for light & dark mode.
    </p>
  </details>
</div>`;

  const highlightCode = (code) => {
    return code
      .replace(/"(.*?)"/g, `<span class="text-green-600">"$1"</span>`)
      .replace(/className="[^"]+"/g, `<span class="text-pink-500">$&</span>`)
      .replace(/<\/[^>]+>/g, `<span class="text-red-500">$&</span>`)
      .replace(/<[^/][^>]+>/g, `<span class="text-blue-500">$&</span>`);
  };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied!");
  };

  const accordionData = [
    { title: "Basic Accordion", preview: codeString1, btnColor: "blue", bg: "from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-950" },
    { title: "Bordered Accordion", preview: codeString2, btnColor: "purple", bg: "from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-950" },
    { title: "FAQ Accordion", preview: codeString3, btnColor: "green", bg: "from-green-50 to-green-100 dark:from-green-900 dark:to-green-950" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-[#0a0a0a] dark:via-[#121212] dark:to-[#1a1a1a] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Accordion Components
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore multiple accordion designs with rich previews, copyable code,
            gradient backgrounds, and full dark mode support.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {accordionData.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row gap-8 text-gray-900 dark:text-gray-100 bg-gradient-to-r ${item.bg} border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition`}
            >
              {/* Left: Preview */}
              <div className="flex-1 flex justify-center items-center ">
                <div
                  className="w-full border-2 border-rose-200 py-4 px-4 bg-cyan-700 text-white rounded-2xl"
                  dangerouslySetInnerHTML={{ __html: item.preview }}
                />
              </div>

              {/* Right: Code */}
              <div className="flex-1 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md relative overflow-auto max-h-[80vh] border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <pre className="whitespace-pre-wrap text-xs md:text-sm bg-gray-100 dark:bg-gray-900 p-4 rounded-lg border border-gray-300 dark:border-gray-600">
                  <code
                    dangerouslySetInnerHTML={{
                      __html: highlightCode(item.preview),
                    }}
                  />
                </pre>
                <button
                  onClick={() => copyCode(item.preview)}
                  className={`absolute top-3 right-3 p-2 bg-${item.btnColor}-600 text-white rounded-lg shadow hover:bg-${item.btnColor}-700 transition flex items-center gap-1 text-sm`}
                >
                  Copy <FaCopy />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
