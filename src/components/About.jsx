import { useEffect, useState } from "react";

export default function About() {
  const [showIcons, setShowIcons] = useState(false);

  // Trigger icon animations
  useEffect(() => {
    const timer = setTimeout(() => setShowIcons(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const highlights = [
    { emoji: "⚡", title: "Fast Development", desc: "Ship UIs quickly with ready-to-use components." },
    { emoji: "🎨", title: "Customizable", desc: "Easily tweak Tailwind classes to match your style." },
    { emoji: "📱", title: "Responsive", desc: "Works perfectly on mobile, tablet, and desktop." },
    { emoji: "🌙", title: "Dark Mode Ready", desc: "Your UI looks amazing in light or dark mode." },
  ];

  return (
    <section id="about" className="bg-white dark:bg-[#020202e1] relative py-20 px-6 transition-colors duration-300 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1200px] h-[1200px] bg-blue-100/10 dark:bg-blue-500/20 rounded-full -z-10 animate-pulse"></div>
      
      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          About <span className="text-blue-600">StudyE UI</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-12">
          At StudyE, we provide a library of ready-to-use React + Tailwind components. Build dashboards, landing pages, and apps faster, with a modern and consistent design system. Your UI, made easy!
        </p>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg transition transform hover:scale-105 hover:shadow-xl`}
            >
              <div className={`text-5xl mb-4 transition-transform duration-700 ${showIcons ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}`}>
                {item.emoji}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Animated callout */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl shadow-xl text-white max-w-2xl mx-auto animate-bounce">
          <h3 className="text-2xl font-bold mb-2">✨ Fun Fact!</h3>
          <p>
            Every component you use is fully responsive and ready for dark mode. Plus, animations and hover effects are built in to make your UI lively and interactive!
          </p>
        </div>
      </div>
    </section>
  );
}
