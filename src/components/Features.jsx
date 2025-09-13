export default function Features() {
  const features = [
    {
      title: "Ready-made UI",
      desc: "Access pre-built components with clean React + Tailwind code.",
      icon: "💻",
    },
    {
      title: "Copy & Paste",
      desc: "Grab code snippets and integrate them instantly.",
      icon: "⚡",
    },
    {
      title: "Responsive Design",
      desc: "Components adapt beautifully to mobile, tablet, and desktop.",
      icon: "📱",
    },
    {
      title: "Customizable",
      desc: "Easily tweak classes to match your project's branding.",
      icon: "🎨",
    },
    {
      title: "Dark Mode Ready",
      desc: "All components look amazing in both light and dark mode.",
      icon: "🌙",
    },
    {
      title: "Accessible",
      desc: "Built with accessibility in mind for all users.",
      icon: "♿",
    },
  ];

  return (
    <section className="py-28 bg-gray-50 dark:bg-[#020202e1] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          Why choose <span className="text-blue-600">StudyE UI?</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          A comprehensive library of ready-to-use UI components, layouts, and templates built with React + Tailwind. Save time, stay consistent, and ship faster.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                {f.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
