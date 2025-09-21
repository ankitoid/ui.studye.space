// src/pages/Uis.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiBookOpen, FiShoppingBag, FiHeart, FiCoffee, FiGrid } from "react-icons/fi";

const baseCategories = [
  { id: "education", title: "Education", desc: "Course cards, dashboards, lists", icon: FiBookOpen, count: 12, color: "from-indigo-400 to-indigo-600" },
  { id: "ecommerce", title: "E-commerce", desc: "Product cards & grids", icon: FiShoppingBag, count: 14, color: "from-rose-400 to-rose-600" },
  { id: "fashion", title: "Fashion & Beauty", desc: "Hero banners & galleries", icon: FiHeart, count: 10, color: "from-pink-400 to-pink-600" },
  { id: "food", title: "Food", desc: "Menus & recipe cards", icon: FiCoffee, count: 8, color: "from-amber-400 to-amber-600" },
  { id: "other", title: "Other", desc: "Pricing, testimonials, misc", icon: FiGrid, count: 16, color: "from-slate-400 to-slate-600" },
];

export default function Uis() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured"); // featured | alphabetical | count

  const categories = useMemo(() => {
    let list = baseCategories.filter((c) => {
      const q = query.trim().toLowerCase();
      if (!q) return true;
      return c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q) || c.id.toLowerCase().includes(q);
    });

    if (sortBy === "alphabetical") list = list.sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === "count") list = list.sort((a, b) => b.count - a.count);
    return list;
  }, [query, sortBy]);

  return (
    <section className="py-20  bg-gradient-to-b from-gray-50 to-white dark:from-[#050508] dark:to-[#0b0b0b] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
              UI Library
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">
              Curated UI components for developers — previews, copy-ready code, and full pages to drop into your project.
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center gap-2">
                <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium">Free</span>
                Curated categories
              </span>
              <span>•</span>
              <span>Responsive & Tailwind-friendly</span>
            </div>
          </div>

          {/* search & sort */}
          <div className="flex gap-3 items-center">
            <label htmlFor="search" className="sr-only">Search UIs</label>
            <div className="relative">
              <input
                id="search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search (education, ecommerce, hero...)"
                className="w-64 md:w-80 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                aria-label="Search UI categories"
              />
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">⌘K</div>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              aria-label="Sort categories"
            >
              <option value="featured">Featured</option>
              <option value="alphabetical">A → Z</option>
              <option value="count">Most items</option>
            </select>
          </div>
        </div>

        {/* grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                to={`/uis/${cat.id}`}
                key={cat.id}
                className="group block rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-2xl transform-gpu transition duration-300 motion-safe:hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-700"
                aria-labelledby={`cat-${cat.id}`}
              >
                <div className="relative p-6">
                  {/* colored stripe */}
                  <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${cat.color} opacity-90`} />

                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-white/60 to-white/10 ring-1 ring-white/10 shadow-sm transform transition group-hover:scale-110"
                      aria-hidden
                    >
                      <div className="p-1 rounded-md bg-gradient-to-tr to-white/30 from-black/5">
                        <Icon className="h-7 w-7 text-gray-700 dark:text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 id={`cat-${cat.id}`} className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                        <span>{cat.title}</span>
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800">
                          {cat.count}
                        </span>
                      </h3>

                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{cat.desc}</p>

                      <div className="mt-4 flex items-center gap-3">
                        <span className="inline-flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                          Explore
                          <svg className="h-4 w-4 transition-transform transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>

                        <span className="ml-auto text-xs text-gray-400 dark:text-gray-500">Tailwind</span>
                      </div>
                    </div>
                  </div>

                  {/* subtle decorative bg on large screens */}
                  <div className="pointer-events-none absolute -right-6 -bottom-6 opacity-10 hidden md:block">
                    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-300 dark:text-indigo-700">
                      <circle cx="80" cy="80" r="80" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                {/* footer */}
                <div className="border-t border-gray-100 dark:border-gray-800 px-6 py-3 bg-gradient-to-b from-white/0 to-white/5 dark:from-transparent dark:to-black/5">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-2 bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded text-xs">Preview</span>
                      <span className="text-xs">Copy-ready JSX</span>
                    </div>

                    <span className="text-xs text-gray-400">→ open</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* empty state */}
        {categories.length === 0 && (
          <div className="mt-10 text-center text-gray-500">
            No results for "<span className="font-medium text-gray-700 dark:text-gray-200">{query}</span>"
          </div>
        )}
      </div>
    </section>
  );
}

/* Optional: If you want richer animations, install framer-motion and wrap cards with <motion.div>
   Example (commented):
   import { motion } from "framer-motion";
   <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ type: "spring", stiffness: 200 }}>
     ...card...
   </motion.div>
*/
