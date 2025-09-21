import React from "react";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-hot-toast";

// ✅ helper function for copy
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    toast.success("Code copied!");
  });
}

export default function CourseCard({ course }) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition relative">
      <img
        src={course.cover}
        alt={course.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          {/* Left side */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
              {course.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">{course.author}</p>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {course.lessons} lessons · {course.hours} hrs ·{" "}
              <span className="font-medium">{course.level}</span>
            </div>
          </div>

          {/* Right side */}
          <div className="text-right">
            <div className="text-sm font-bold">{course.price}</div>
            <div className="text-xs text-yellow-600 mt-2">{course.rating} ★</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex items-center gap-3">
          <button className="px-3 py-2 bg-indigo-600 text-white rounded-md text-sm hover:opacity-95 transition">
            Enroll
          </button>
          <button className="px-3 py-2 border rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            Preview
          </button>
          <button
            className="ml-auto flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            onClick={() => copyToClipboard(course.code)}
          >
            <FiCopy /> Copy Code
          </button>
        </div>
      </div>
    </article>
  );
}
