import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiUser,
  FiClock,
  FiStar,
  FiMenu,
  FiX,
  FiCopy,
} from "react-icons/fi";
import { FaGraduationCap, FaBook, FaChalkboardTeacher } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast"; // for toast notification on copy
import CourseCard from "./components/CourseCard";

/**
 * EducationPage
 * Full page UI (Navbar -> Footer) for the "Education" category.
 * Tailwind CSS required. Install react-icons.
 */

const COURSES = [
  {
    id: "react-beg",
    title: "React for Beginners",
    author: "Ankit Singh",
    lessons: 20,
    hours: 5,
    level: "Beginner",
    price: "₹0",
    cover: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
    rating: 4.7,
  },
  {
    id: "js-adv",
    title: "JavaScript: Advanced Patterns",
    author: "Priya Kapoor",
    lessons: 36,
    hours: 12,
    level: "Advanced",
    price: "₹1499",
    cover: "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg",
    rating: 4.8,
  },
  {
    id: "css-master",
    title: "CSS Animations & Layouts",
    author: "Riya Malhotra",
    lessons: 18,
    hours: 6,
    level: "Intermediate",
    price: "₹799",
    cover: "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg",
    rating: 4.6,
  },
  {
    id: "ds-algo",
    title: "DS & Algorithms - Prep",
    author: "John Doe",
    lessons: 48,
    hours: 20,
    level: "Advanced",
    price: "₹1999",
    cover:
      "https://images.pexels.com/photos/17485657/pexels-photo-17485657.png",
    rating: 4.9,
  },
  {
    id: "ux-design",
    title: "Product UX: Design Basics",
    author: "Asha Verma",
    lessons: 14,
    hours: 4,
    level: "Beginner",
    price: "₹499",
    cover: "https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg",
    rating: 4.5,
  },
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  toast.success("Code copied!");
}

function Navbar({ onOpenMobile }) {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm mt-[64px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="rounded-md bg-indigo-600 text-white p-2 shadow">
                <FaGraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-gray-900 dark:text-white">
                  StudyE UI
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 -mt-0.5">
                  Education
                </p>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600"
              to="/uis/education"
            >
              Courses
            </Link>
            <Link
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600"
              to="/uis/education#dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600"
              to="/uis/education#faq"
            >
              FAQ
            </Link>
            <button className="ml-2 px-4 py-2 rounded-md bg-indigo-600 text-white shadow hover:opacity-95">
              Get Started
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1">
              <FiSearch className="text-gray-500" />
              <input
                className="bg-transparent outline-none text-sm w-48 text-gray-700 dark:text-gray-200 placeholder-gray-400"
                placeholder="Search courses..."
                aria-label="Search courses"
              />
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button className="text-gray-700 dark:text-gray-200">
                Sign in
              </button>
              <button className="px-3 py-1 border rounded-md text-gray-700 dark:text-gray-200">
                Sign up
              </button>
            </div>

            {/* mobile menu button */}
            <button
              onClick={onOpenMobile}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              aria-label="Open menu"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transform ${
        open ? "translate-x-0" : "translate-x-full"
      } transition-transform`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-lg">Menu</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800"
          >
            <FiX />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <Link to="/uis/education" onClick={onClose} className="py-2">
            Courses
          </Link>
          <Link
            to="/uis/education#dashboard"
            onClick={onClose}
            className="py-2"
          >
            Dashboard
          </Link>
          <Link to="/uis/education#faq" onClick={onClose} className="py-2">
            FAQ
          </Link>
          <Link to="/uis" onClick={onClose} className="py-2">
            All UI categories
          </Link>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white dark:from-[#071024] dark:to-[#071028]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Learn the skills companies are hiring for.
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-lg">
              Curated courses, guided learning paths and real-world projects —
              crafted for busy developers and designers.
            </p>

            <div className="mt-6 flex gap-3">
              <button className="px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:opacity-95">
                Browse Courses
              </button>
              <button className="px-5 py-3 border rounded-lg text-gray-700 dark:text-gray-200">
                For Teams
              </button>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="inline-flex items-center gap-2">
                <FiClock className="w-5 h-5 text-indigo-600" />
                <span>Self-paced · 24/7 access</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <FiUser className="w-5 h-5 text-indigo-600" />
                <span>Mentor support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg p-4">
              <img
                src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg"
                alt="Education hero"
              />
              <div className="mt-3 px-2">
                <div className="font-semibold">Featured Path</div>
                <div className="text-sm text-gray-500">
                  Full-stack Developer · 120 hrs
                </div>
                <div className="mt-3 flex items-center gap-3 text-sm">
                  <div className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full text-xs">
                    Beginner → Advanced
                  </div>
                  <div className="text-xs">Project-based</div>
                </div>
              </div>
            </div>

            <div className="hidden md:block absolute -right-8 -bottom-4 w-40 h-40  bg-indigo-50 dark:bg-indigo-900/40 shadow-lg transform rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      icon: FaBook,
      title: "Curated paths",
      desc: "Step-by-step learning with checkpoints.",
    },
    {
      icon: FaChalkboardTeacher,
      title: "Mentor support",
      desc: "1:1 feedback & code reviews.",
    },
    {
      icon: FiStar,
      title: "Industry projects",
      desc: "Build real products you can show.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <div
              key={it.title}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-md bg-indigo-50 dark:bg-indigo-900/30 mb-3">
                <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />
              </div>
              <h4 className="font-semibold text-lg">{it.title}</h4>
              <p className="text-sm text-gray-500 mt-2">{it.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// function CourseCard({ course }) {
//   return (
//     <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition">
//       <img src={course.cover} alt={course.title} className="w-full h-40 object-cover" />
//       <div className="p-4">
//         <div className="flex items-start justify-between gap-4">
//           <div>
//             <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{course.title}</h3>
//             <p className="text-xs text-gray-500 mt-1">{course.author}</p>
//             <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//               {course.lessons} lessons · {course.hours} hrs · <span className="font-medium">{course.level}</span>
//             </div>
//           </div>
//           <div className="text-right">
//             <div className="text-sm font-bold">{course.price}</div>
//             <div className="text-xs text-yellow-600 mt-2">{course.rating} ★</div>
//           </div>
//         </div>

//         <div className="mt-4 flex items-center gap-3">
//           <button className="px-3 py-2 bg-indigo-600 text-white rounded-md text-sm">Enroll</button>
//           <button className="px-3 py-2 border rounded-md text-sm">Preview</button>
//           <button className="ml-auto text-xs text-gray-500">Share</button>
//         </div>
//       </div>
//     </article>
//   );
// }

// function CourseGrid() {
//   const [filter, setFilter] = useState("all");
//   const [rows, setRows] = useState(3);
//   const [query, setQuery] = useState("");

//   const filtered = useMemo(() => {
//     let list = COURSES.filter((c) =>
//       `${c.title} ${c.author} ${c.level}`.toLowerCase().includes(query.toLowerCase())
//     );
//     if (filter !== "all") list = list.filter((c) => c.level.toLowerCase() === filter);
//     return list.slice(0, rows);
//   }, [filter, rows, query]);

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-10">
//       <div className="flex items-center justify-between mb-6 gap-4">
//         <div className="flex items-center gap-3">
//           <div className="text-sm font-semibold">Show</div>
//           <div className="inline-flex rounded-md overflow-hidden border bg-white dark:bg-gray-800">
//             <button onClick={() => setRows(3)} className={`px-3 py-2 text-sm ${rows === 3 ? "bg-indigo-600 text-white" : "text-gray-700 dark:text-gray-200"}`}>3</button>
//             <button onClick={() => setRows(4)} className={`px-3 py-2 text-sm ${rows === 4 ? "bg-indigo-600 text-white" : "text-gray-700 dark:text-gray-200"}`}>4</button>
//             <button onClick={() => setRows(5)} className={`px-3 py-2 text-sm ${rows === 5 ? "bg-indigo-600 text-white" : "text-gray-700 dark:text-gray-200"}`}>5</button>
//           </div>

//           <div className="ml-6 text-sm flex items-center gap-2">
//             <label className="text-sm">Filter:</label>
//             <select value={filter} onChange={(e) => setFilter(e.target.value)} className="px-3 py-2 border rounded-md text-sm dark:bg-gray-800">
//               <option value="all">All levels</option>
//               <option value="beginner">Beginner</option>
//               <option value="intermediate">Intermediate</option>
//               <option value="advanced">Advanced</option>
//             </select>
//           </div>
//         </div>

//         <div className="flex items-center gap-3">
//           <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
//             <FiSearch className="text-gray-500" />
//             <input
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Search courses..."
//               className="bg-transparent outline-none text-sm placeholder-gray-400 text-gray-700 dark:text-gray-200"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filtered.length ? (
//           filtered.map((c) => <CourseCard key={c.id} course={c} />)
//         ) : (
//           <div className="col-span-3 text-center text-gray-500">No courses found.</div>
//         )}
//       </div>

//       <div className="mt-6 text-sm text-gray-500">
//         Showing <span className="font-medium">{filtered.length}</span> of <span className="font-medium">{COURSES.length}</span> courses
//       </div>
//     </section>
//   );
// }

function DashboardSummary() {
  return (
    <section id="dashboard" className="max-w-7xl mx-auto px-6 py-10">
      <h3 className="text-2xl font-semibold mb-4">Your Learning Summary</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border shadow-sm">
          <div className="text-sm text-gray-500">Courses enrolled</div>
          <div className="mt-2 text-2xl font-bold">4</div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border shadow-sm">
          <div className="text-sm text-gray-500">Hours completed</div>
          <div className="mt-2 text-2xl font-bold">28</div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border shadow-sm">
          <div className="text-sm text-gray-500">Projects completed</div>
          <div className="mt-2 text-2xl font-bold">3</div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "How long do I have access to courses?",
      a: "Lifetime access — learn at your own pace.",
    },
    {
      q: "Do I get a certificate?",
      a: "Yes — certificates are issued upon course completion.",
    },
    {
      q: "Can I get mentor help?",
      a: "You can request 1:1 reviews and mentor support on pro plans.",
    },
  ];
  return (
    <section id="faq" className="max-w-7xl mx-auto px-6 py-10">
      <h3 className="text-2xl font-semibold mb-4">Frequently asked</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg border"
          >
            <div className="font-medium">{f.q}</div>
            <div className="text-sm text-gray-500 mt-2">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-bold">StudyE UI</h4>
            <p className="text-sm text-gray-500 mt-2">
              A curated UI library for developers — copy-ready Tailwind
              components.
            </p>
          </div>

          <div>
            <h5 className="font-medium mb-3">Product</h5>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/docs">Docs</Link>
              </li>
              <li>
                <Link to="/uis">UI Library</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-medium mb-3">Contact</h5>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              hello@studye.space
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              © {new Date().getFullYear()} StudyE — All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function EducationPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filteredCourses = useMemo(() => {
    let list = COURSES.filter((c) =>
      `${c.title} ${c.author} ${c.level}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    if (filter !== "all")
      list = list.filter((c) => c.level.toLowerCase() === filter);
    return list;
  }, [filter, query]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar and Mobile Menu */}
      <Navbar onOpenMobile={() => setMobileOpen(true)} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Features */}
        <Features />

        {/* Course Grid with search and filter */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex items-center gap-3">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-3 py-2 border rounded-md text-sm dark:bg-gray-800"
              >
                <option value="all">All levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
                <FiSearch />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search courses..."
                  className="bg-transparent outline-none text-sm placeholder-gray-400 text-gray-700 dark:text-gray-200"
                />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.length ? (
              filteredCourses.map((c) => <CourseCard key={c.id} course={c} />)
            ) : (
              <div className="col-span-3 text-center text-gray-500">
                No courses found.
              </div>
            )}
          </div>
        </section>

        {/* Dashboard Summary */}
        <DashboardSummary />
        {/* FAQ */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast notifications */}
      <Toaster position="top-right" />
    </div>
  );
}
