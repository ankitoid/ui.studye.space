import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { HiMenu, HiX, HiClipboard } from "react-icons/hi";

const componentsList = [
  { name: "Button", slug: "button" },
  { name: "Card", slug: "card" },
  { name: "Modal", slug: "modal" },
  { name: "Navbar", slug: "navbar-new" },
  { name: "Footer", slug: "footer" },
  { name: "Form", slug: "form" },
  { name: "Slider", slug: "slider" },
  { name: "CTA Section", slug: "cta" },
  { name: "Features Section", slug: "features" },
  { name: "Hero Section", slug: "hero" },
  { name: "Table", slug: "table" },
  { name: "Tooltip", slug: "tooltip" },
  { name: "Accordion", slug: "accordion" },
];

const Components = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen mt-14 flex bg-gray-100 dark:bg-[#020202e1] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col bg-white dark:bg-gray-900 shadow-md p-4 transition-all duration-300 ${
          isDesktopCollapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          {!isDesktopCollapsed && (
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Components
            </h2>
          )}
          <button
            onClick={() => setIsDesktopCollapsed(!isDesktopCollapsed)}
            className="text-gray-900 dark:text-white focus:outline-none"
          >
            {isDesktopCollapsed ? <HiMenu size={24} /> : <HiX size={24} />}
          </button>
        </div>

        <div className="flex flex-col space-y-2">
          {componentsList.map((comp) => (
            <Link
              key={comp.slug}
              to={`/components/${comp.slug}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition ${
                location.pathname === `/components/${comp.slug}`
                  ? "bg-blue-600 text-white"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              {!isDesktopCollapsed && <span>{comp.name}</span>}
            </Link>
          ))}
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {isMobileSidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50 flex justify-center items-start pt-24">
          <div className="bg-white dark:bg-gray-900 w-3/4 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Components
              </h2>
              <button
                onClick={() => setIsMobileSidebarOpen(false)}
                className="text-gray-900 dark:text-white"
              >
                <HiX size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-2">
              {componentsList.map((comp) => (
                <Link
                  key={comp.slug}
                  to={`/components/${comp.slug}`}
                  className="block px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white text-gray-900 dark:text-white"
                  onClick={() => setIsMobileSidebarOpen(false)}
                >
                  {comp.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 flex flex-col md:flex-row gap-6">
        {/* Mobile top toggle button */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Components</h2>
          <button
            onClick={() => setIsMobileSidebarOpen(true)}
            className="text-gray-900 dark:text-white"
          >
            <HiMenu size={28} />
          </button>
        </div>

        {/* Left: Component Preview */}
        <div className="flex-1 bg-white dark:bg-gray-800  rounded-2xl shadow-md min-h-[80vh] flex flex-col justify-start">
          <Outlet />
          {!location.pathname.includes("/components/") && (
            <div className="flex items-center justify-center h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center">
                Select a component from the sidebar to see its demo.
              </h3>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Components;
