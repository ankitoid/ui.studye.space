// import React from "react";
// import { FaCopy } from "react-icons/fa";

// /* ---------------- NAVBAR VARIANTS ---------------- */
// const Navbar1 = () => (
//   <nav className="flex justify-between items-center px-6 py-4 bg-transparent text-gray-900 dark:text-white">
//     <h1 className="text-2xl font-bold mr-3">StudyE</h1>
//     <ul className="flex gap-6 font-medium">
//       <li className="hover:text-blue-600 cursor-pointer">Home</li>
//       <li className="hover:text-blue-600 cursor-pointer">About</li>
//       <li className="hover:text-blue-600 cursor-pointer">Services</li>
//       <li className="hover:text-blue-600 cursor-pointer">Contact</li>
//     </ul>
//   </nav>
// );

// const Navbar2 = () => (
//   <nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg">
//     <h1 className="text-2xl font-bold mr-3">StudyE</h1>
//     <ul className="flex gap-6">
//       <li className="hover:text-gray-200 cursor-pointer">Features</li>
//       <li className="hover:text-gray-200 cursor-pointer">Pricing</li>
//       <li className="hover:text-gray-200 cursor-pointer">Docs</li>
//     </ul>
//     <button className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition ml-4">
//       Contact
//     </button>
//   </nav>
// );

// /* ---------------- SHOWCASE LAYOUT ---------------- */
// export default function NavbarShowcase() {
//   const navbars = [
//     { title: "Minimal Navbar", code: Navbar1.toString(), component: <Navbar1 />, color: "blue" },
//     { title: "Gradient Navbar", code: Navbar2.toString(), component: <Navbar2 />, color: "purple" },
//     { title: "Glassmorphism Navbar", code: Navbar3.toString(), component: <Navbar3 />, color: "cyan" },
//     { title: "Dark Modern Navbar", code: Navbar4.toString(), component: <Navbar4 />, color: "gray" },
//     { title: "Bordered Clean Navbar", code: Navbar5.toString(), component: <Navbar5 />, color: "indigo" },
//     { title: "Pill-style Navbar", code: Navbar6.toString(), component: <Navbar6 />, color: "green" },
//   ];

//   const highlightCode = (code) => {
//     return code
//       .replace(/"(.*?)"/g, `<span class="text-green-600">"$1"</span>`)
//       .replace(/className="[^"]+"/g, `<span class="text-pink-500">$&</span>`)
//       .replace(/<\/[^>]+>/g, `<span class="text-red-500">$&</span>`)
//       .replace(/<[^/][^>]+>/g, `<span class="text-blue-500">$&</span>`);
//   };

//   const copyCode = (code) => {
//     navigator.clipboard.writeText(code);
//     alert("Code copied!");
//   };

//   return (
//     <section className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-[#0a0a0a] dark:via-[#121212] dark:to-[#1a1a1a] py-16">
//       <div className="max-w-7xl mx-auto px-2">
//         <div className="text-center mb-14">
//           <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
//             Navbar Components
//           </h1>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Explore multiple navbar styles with real previews & copy-ready code.
//           </p>
//         </div>

//         <div className="flex flex-col gap-4">
//           {navbars.map((item, idx) => (
//             <div
//               key={idx}
//               className="flex flex-col md:flex-row  bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
//             >
//               {/* Preview */}
//               <div className="flex-1 flex flex-col justify-center items-center p-1 bg-gray-50 dark:bg-gray-800">
//                 <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
//                   {item.title} Preview
//                 </h3>
//                 <div className="w-full border border-dashed border-gray-300 dark:border-gray-600 rounded-lg  bg-white dark:bg-gray-900 shadow-inner">
//                   {item.component}
//                 </div>
//               </div>

//               {/* Code */}
//               <div className="flex-1 relative p-4 bg-gray-50 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
//                 <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
//                   {item.title} Code
//                 </h3>
//                 <pre className="whitespace-pre-wrap text-xs md:text-sm bg-gray-100 dark:bg-gray-900 p-4 rounded-lg border border-gray-300 dark:border-gray-600 max-h-[70vh] overflow-auto">
//                   <code
//                     dangerouslySetInnerHTML={{
//                       __html: highlightCode(item.code),
//                     }}
//                   />
//                 </pre>
//                 <button
//                   onClick={() => copyCode(item.code)}
//                   className={`absolute top-6 right-6 p-2 bg-${item.color}-600 text-white rounded-lg shadow hover:bg-${item.color}-700 transition flex items-center gap-1 text-sm`}
//                 >
//                   <FaCopy /> Copy
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { FaCopy } from "react-icons/fa";

/* ---------------- NAVBAR COMPONENTS ---------------- */
const Navbar1 = () => (
  <nav className="flex justify-between items-center px-6 py-4 bg-transparent text-gray-900 dark:text-white">
    <h1 className="text-2xl font-bold mr-3">StudyE</h1>
    <ul className="flex gap-6 font-medium">
      <li className="hover:text-blue-600 cursor-pointer">Home</li>
      <li className="hover:text-blue-600 cursor-pointer">About</li>
      <li className="hover:text-blue-600 cursor-pointer">Services</li>
      <li className="hover:text-blue-600 cursor-pointer">Contact</li>
    </ul>
  </nav>
);

const Navbar2 = () => (
  <nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg">
    <h1 className="text-2xl font-bold mr-3">StudyE</h1>
    <ul className="flex gap-6">
      <li className="hover:text-gray-200 cursor-pointer">Features</li>
      <li className="hover:text-gray-200 cursor-pointer">Pricing</li>
      <li className="hover:text-gray-200 cursor-pointer">Docs</li>
    </ul>
    <button className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition ml-4">
      Contact
    </button>
  </nav>
);

const Navbar3 = () => (
  <nav className="flex justify-between items-center px-8 py-4 bg-blue-400 backdrop-blur-lg border border-white/30 rounded-xl text-white">
    <h1 className="text-2xl font-bold mr-3">StudyE</h1>
    <ul className="flex gap-6">
      <li className="hover:text-blue-300 cursor-pointer">Home</li>
      <li className="hover:text-blue-300 cursor-pointer">Courses</li>
      <li className="hover:text-blue-300 cursor-pointer">Blog</li>
      <li className="hover:text-blue-300 cursor-pointer">Login</li>
    </ul>
  </nav>
);

const Navbar4 = () => (
  <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-gray-200 shadow-md">
    <h1 className="text-xl font-bold text-white">StudyE</h1>
    <ul className="flex gap-8 font-medium">
      <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
      <li className="hover:text-blue-400 cursor-pointer">Projects</li>
      <li className="hover:text-blue-400 cursor-pointer">Teams</li>
      <li className="hover:text-blue-400 cursor-pointer">Settings</li>
    </ul>
  </nav>
);

const Navbar5 = () => (
  <nav className="flex justify-between items-center px-10 py-4 border-b border-gray-300 bg-white dark:bg-gray-900 dark:border-gray-700">
    <h1 className="text-lg font-bold text-gray-800 dark:text-white">StudyE</h1>
    <ul className="flex gap-6 text-gray-600 dark:text-gray-300">
      <li className="hover:text-black dark:hover:text-white cursor-pointer">Home</li>
      <li className="hover:text-black dark:hover:text-white cursor-pointer">About</li>
      <li className="hover:text-black dark:hover:text-white cursor-pointer">Contact</li>
    </ul>
  </nav>
);

const Navbar6 = () => (
  <nav className="flex justify-center items-center px-6 py-4 bg-gray-100 dark:bg-gray-800">
    <ul className="flex gap-4 bg-white dark:bg-gray-900 p-2 rounded-full shadow-md">
      <li className="px-4 py-2 rounded-full bg-blue-600 text-white cursor-pointer">Home</li>
      <li className="px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">Services</li>
      <li className="px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">Blog</li>
      <li className="px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">Contact</li>
    </ul>
  </nav>
);

const Navbar7 = () => (
  <nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-blue-500 text-white shadow-lg">
    <h1 className="text-2xl font-bold">StudyE</h1>
    <ul className="flex gap-8">
      <li className="hover:text-gray-200 cursor-pointer">Home</li>
      <li className="hover:text-gray-200 cursor-pointer">Features</li>
      <li className="hover:text-gray-200 cursor-pointer">Pricing</li>
      <li className="hover:text-gray-200 cursor-pointer">Docs</li>
    </ul>
    <button className="bg-white text-pink-600 px-2 py-1 rounded-lg font-semibold hover:bg-gray-100">
      Sign Up
    </button>
  </nav>
);

// Navbar 8 (Minimal Floating Glass Effect)
const Navbar8 = () => (
  // <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center w-[80%] md:w-[50%] px-6 py-3 bg-white backdrop-blur-md border border-white/30 rounded-2xl text-gray-900 dark:text-white shadow-lg z-50">
   <nav className="flex justify-between items-center w-full px-6 py-3 bg-blue-500/90 backdrop-blur-md border border-white/30 rounded-2xl text-gray-200 dark:text-white shadow-lg">
  <h1 className="text-lg font-bold">StudyE</h1>
    <ul className="flex gap-6 text-sm font-medium">
      <li className="hover:text-blue-100 cursor-pointer">Home</li>
      <li className="hover:text-blue-100 cursor-pointer">Courses</li>
      <li className="hover:text-blue-100 cursor-pointer">Community</li>
      <li className="hover:text-blue-100 cursor-pointer">Contact</li>
    </ul>
  </nav>
);

/* ---------------- RAW CODE STRINGS ---------------- */
const code1 = `<nav className="flex justify-between items-center px-6 py-4 bg-transparent text-gray-900 dark:text-white">
  <h1 className="text-2xl font-bold mr-3">StudyE</h1>
  <ul className="flex gap-6 font-medium">
    <li className="hover:text-blue-600 cursor-pointer">Home</li>
    <li className="hover:text-blue-600 cursor-pointer">About</li>
    <li className="hover:text-blue-600 cursor-pointer">Services</li>
    <li className="hover:text-blue-600 cursor-pointer">Contact</li>
  </ul>
</nav>`;

const code2 = `<nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg">
  <h1 className="text-2xl font-bold mr-3">StudyE</h1>
  <ul className="flex gap-6">
    <li className="hover:text-gray-200 cursor-pointer">Features</li>
    <li className="hover:text-gray-200 cursor-pointer">Pricing</li>
    <li className="hover:text-gray-200 cursor-pointer">Docs</li>
  </ul>
  <button className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition ml-4">
    Contact
  </button>
</nav>`;

// Navbar 3 (Glassmorphism Blue)
const code3 = `<nav className="flex justify-between items-center px-8 py-4 bg-blue-400/80 backdrop-blur-lg border border-white/30 rounded-xl text-white shadow-lg">
  <h1 className="text-2xl font-bold mr-3">StudyE</h1>
  <ul className="flex gap-6">
    <li className="hover:text-blue-200 cursor-pointer">Home</li>
    <li className="hover:text-blue-200 cursor-pointer">Courses</li>
    <li className="hover:text-blue-200 cursor-pointer">Blog</li>
    <li className="hover:text-blue-200 cursor-pointer">Login</li>
  </ul>
</nav>`;

// Navbar 4 (Dark Mode Professional)
const code4 = `<nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-gray-200 shadow-md">
  <h1 className="text-xl font-bold text-white">StudyE</h1>
  <ul className="flex gap-8 font-medium">
    <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
    <li className="hover:text-blue-400 cursor-pointer">Projects</li>
    <li className="hover:text-blue-400 cursor-pointer">Teams</li>
    <li className="hover:text-blue-400 cursor-pointer">Settings</li>
  </ul>
</nav>`;

// Navbar 5 (Light/Dark Minimal Border)
const code5 = `<nav className="flex justify-between items-center px-10 py-4 border-b border-gray-300 bg-white dark:bg-gray-900 dark:border-gray-700">
  <h1 className="text-lg font-bold text-gray-800 dark:text-white">StudyE</h1>
  <ul className="flex gap-6 text-gray-600 dark:text-gray-300">
    <li className="hover:text-black dark:hover:text-white cursor-pointer">Home</li>
    <li className="hover:text-black dark:hover:text-white cursor-pointer">About</li>
    <li className="hover:text-black dark:hover:text-white cursor-pointer">Contact</li>
  </ul>
</nav>`;

// Navbar 6 (Rounded Pills Centered)
const code6 = `<nav className="flex justify-center items-center px-6 py-4 bg-gray-100 dark:bg-gray-800">
  <ul className="flex gap-4 bg-white dark:bg-gray-900 p-2 rounded-full shadow-md">
    <li className="px-4 py-2 rounded-full bg-blue-600 text-white cursor-pointer">Home</li>
    <li className="px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">Services</li>
    <li className="px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">Blog</li>
    <li className="px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">Contact</li>
  </ul>
</nav>`;

// Navbar 7 (Gradient + Button CTA)
const code7 = `<nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-pink -600 to-blue-500 text-white shadow-lg">
  <h1 className="text-2xl font-bold">StudyE</h1>
  <ul className="flex gap-8">
    <li className="hover:text-gray-200 cursor-pointer">Home</li>
    <li className="hover:text-gray-200 cursor-pointer">Features</li>
    <li className="hover:text-gray-200 cursor-pointer">Pricing</li>
    <li className="hover:text-gray-200 cursor-pointer">Docs</li>
  </ul>
  <button className="bg-white text-pink-600 ppx-2 py-1 rounded-lg font-semibold hover:bg-gray-100 transition">
    Sign Up
  </button>
</nav>`;

// Navbar 8 (Minimal Floating Glass Effect)
const code8 = `<nav className="fixed top-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center w-[90%] md:w-[70%] px-6 py-3 bg-blue-700 backdrop-blur-md border border-white/30 rounded-2xl text-gray-900 dark:text-white shadow-lg z-50">
  <h1 className="text-lg font-bold">StudyE</h1>
  <ul className="flex gap-6 text-sm font-medium">
    <li className="hover:text-blue-500 cursor-pointer">Home</li>
    <li className="hover:text-blue-500 cursor-pointer">Courses</li>
    <li className="hover:text-blue-500 cursor-pointer">Community</li>
    <li className="hover:text-blue-500 cursor-pointer">Contact</li>
  </ul>
</nav>`;


/* ---------------- SHOWCASE LAYOUT ---------------- */
export default function NavbarShowcase() {
  const navbars = [
    { title: "Minimal Navbar", code: code1, component: <Navbar1 />, color: "blue" },
    { title: "Gradient Navbar", code: code2, component: <Navbar2 />, color: "purple" },
    { title: "Glassmorphism Blue", code: code3, component: <Navbar3 />, color: "purple" },
    { title: "Dark Mode Professional", code: code4, component: <Navbar4 />, color: "purple" },
    { title: "Light/Dark Minimal Border", code: code5, component: <Navbar5 />, color: "purple" },
    { title: "Rounded Pills Centered", code: code6, component: <Navbar6 />, color: "purple" },
    { title: "Gradient + Button CTA", code: code7, component: <Navbar7 />, color: "purple" },
    { title: "Minimal Floating Glass Effect", code: code8, component: <Navbar8 />, color: "  " },

  ];

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

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-[#0a0a0a] dark:via-[#121212] dark:to-[#1a1a1a] py-16">
      <div className="max-w-7xl mx-auto px-2">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Navbar Components
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore multiple navbar styles with real previews & copy-ready code.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {navbars.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
            >
              {/* Preview */}
              <div className="flex-1 flex flex-col justify-center items-center p-6 bg-gray-50 dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
                  {item.title} Preview
                </h3>
                <div className="w-full border border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 shadow-inner">
                  {item.component}
                </div>
              </div>

              {/* Code */}
              <div className="flex-1 relative p-6 bg-gray-50 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  {item.title} Code
                </h3>
                <pre className="whitespace-pre-wrap text-xs md:text-sm bg-gray-100 dark:bg-gray-900 p-4 rounded-lg border border-gray-300 dark:border-gray-600 max-h-[70vh] overflow-auto">
                  <code
                    dangerouslySetInnerHTML={{
                      __html: highlightCode(item.code),
                    }}
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
