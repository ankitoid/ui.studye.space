import React, { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa";

export default function TableShowcase() {
  const [copied, setCopied] = useState(false);
  const [copiedLabel, setCopiedLabel] = useState("");

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  const code1 = `<div className="overflow-x-auto p-4">
  <table className="min-w-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-lg">
    <thead>
      <tr className="bg-gray-100 dark:bg-gray-700">
        <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-600 dark:text-gray-300">ID</th>
        <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-600 dark:text-gray-300">Name</th>
        <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-600 dark:text-gray-300">Role</th>
        <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-600 dark:text-gray-300">Experience</th>
        <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-600 dark:text-gray-300">Location</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
        <td className="py-3 px-4 border-b text-sm text-gray-700 dark:text-gray-200">1</td>
        <td className="py-3 px-4 border-b text-sm">Ankit</td>
        <td className="py-3 px-4 border-b text-sm">Frontend Dev</td>
        <td className="py-3 px-4 border-b text-sm">2 yrs</td>
        <td className="py-3 px-4 border-b text-sm">India</td>
      </tr>
      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
        <td className="py-3 px-4 border-b text-sm text-gray-700 dark:text-gray-200">2</td>
        <td className="py-3 px-4 border-b text-sm">Riya</td>
        <td className="py-3 px-4 border-b text-sm">Backend Dev</td>
        <td className="py-3 px-4 border-b text-sm">3 yrs</td>
        <td className="py-3 px-4 border-b text-sm">USA</td>
      </tr>
      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
        <td className="py-3 px-4 border-b text-sm text-gray-700 dark:text-gray-200">3</td>
        <td className="py-3 px-4 border-b text-sm">John</td>
        <td className="py-3 px-4 border-b text-sm">Fullstack</td>
        <td className="py-3 px-4 border-b text-sm">4 yrs</td>
        <td className="py-3 px-4 border-b text-sm">UK</td>
      </tr>
    </tbody>
  </table>
</div>`;

  const code2 = `<div className="overflow-x-auto p-4">
  <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
    <thead>
      <tr className="bg-white/60 dark:bg-gray-700">
        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300">Name</th>
        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300">Email</th>
        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300">Status</th>
        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300">Joined</th>
      </tr>
    </thead>
    <tbody>
      <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
        <td className="py-3 px-4 border-b text-sm">Riya</td>
        <td className="py-3 px-4 border-b text-sm">riya@example.com</td>
        <td className="py-3 px-4 border-b text-sm">
          <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-800">Active</span>
        </td>
        <td className="py-3 px-4 border-b text-sm">Jan 2024</td>
      </tr>
      <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
        <td className="py-3 px-4 border-b text-sm">Sara</td>
        <td className="py-3 px-4 border-b text-sm">sara@example.com</td>
        <td className="py-3 px-4 border-b text-sm">
          <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Pending</span>
        </td>
        <td className="py-3 px-4 border-b text-sm">Mar 2024</td>
      </tr>
      <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
        <td className="py-3 px-4 border-b text-sm">Alex</td>
        <td className="py-3 px-4 border-b text-sm">alex@example.com</td>
        <td className="py-3 px-4 border-b text-sm">
          <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-red-100 text-red-800">Blocked</span>
        </td>
        <td className="py-3 px-4 border-b text-sm">Nov 2023</td>
      </tr>
    </tbody>
  </table>
</div>`;

  const code3 = `<div className="p-4">
  <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
    <table className="min-w-full">
      <thead>
        <tr className="bg-gray-50 dark:bg-gray-800">
          <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 dark:text-gray-300">#</th>
          <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 dark:text-gray-300">Project</th>
          <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 dark:text-gray-300">Owner</th>
          <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 dark:text-gray-300">Progress</th>
          <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 dark:text-gray-300">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
          <td className="py-3 px-4 border-b text-sm text-gray-700 dark:text-gray-200">1</td>
          <td className="py-3 px-4 border-b">
            <div className="font-medium text-gray-900 dark:text-gray-100">Website Redesign</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Revamp landing & pricing</div>
          </td>
          <td className="py-3 px-4 border-b text-sm text-gray-700 dark:text-gray-200">John</td>
          <td className="py-3 px-4 border-b">
            <div className="w-full max-w-xs">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                <div className="rounded-full h-2.5 w-[60%] bg-green-500 dark:bg-green-400"></div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">60%</div>
            </div>
          </td>
          <td className="py-3 px-4 border-b">
            <div className="flex items-center gap-2">
              <button type="button" className="px-3 py-1 text-sm rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800">Edit</button>
              <button type="button" className="px-3 py-1 text-sm rounded-md border text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900">Delete</button>
            </div>
          </td>
        </tr>

        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
          <td className="py-3 px-4 border-b text-sm text-gray-700 dark:text-gray-200">2</td>
          <td className="py-3 px-4 border-b">
            <div className="font-medium text-gray-900 dark:text-gray-100">Mobile App</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">User flows & onboarding</div>
          </td>
          <td className="py-3 px-4 border-b text-sm text-gray-700 dark:text-gray-200">Priya</td>
          <td className="py-3 px-4 border-b">
            <div className="w-full max-w-xs">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                <div className="rounded-full h-2.5 w-[30%] bg-yellow-400 dark:bg-yellow-300"></div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">30%</div>
            </div>
          </td>
          <td className="py-3 px-4 border-b">
            <div className="flex items-center gap-2">
              <button type="button" className="px-3 py-1 text-sm rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800">Edit</button>
              <button type="button" className="px-3 py-1 text-sm rounded-md border text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`;

  const code4 = `<div className="overflow-x-auto p-4">
  <table className="min-w-full text-sm bg-white dark:bg-gray-800 rounded-lg">
    <thead>
      <tr className="bg-gray-50 dark:bg-gray-800">
        <th className="py-3 px-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300">Item</th>
        <th className="py-3 px-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300">Qty</th>
        <th className="py-3 px-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
        <td className="py-3 px-3 border-b">Mechanical Keyboard</td>
        <td className="py-3 px-3 border-b">2</td>
        <td className="py-3 px-3 border-b">₹3,499</td>
      </tr>
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
        <td className="py-3 px-3 border-b">Wireless Mouse</td>
        <td className="py-3 px-3 border-b">1</td>
        <td className="py-3 px-3 border-b">₹899</td>
      </tr>
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
        <td className="py-3 px-3 border-b">USB-C Hub</td>
        <td className="py-3 px-3 border-b">1</td>
        <td className="py-3 px-3 border-b">₹1,299</td>
      </tr>
    </tbody>
  </table>
</div>`;

  const code5 = `<div className="p-4">
  <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
    <!-- Desktop table -->
    <div className="md:block hidden">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800">
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 dark:text-gray-300">Task</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 dark:text-gray-300">Due</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 dark:text-gray-300">Priority</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 dark:text-gray-300">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
            <td className="py-3 px-4 border-b">Design mockups</td>
            <td className="py-3 px-4 border-b">Sep 30</td>
            <td className="py-3 px-4 border-b">High</td>
            <td className="py-3 px-4 border-b"><span className="text-xs text-green-700">In progress</span></td>
          </tr>
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
            <td className="py-3 px-4 border-b">Content plan</td>
            <td className="py-3 px-4 border-b">Oct 05</td>
            <td className="py-3 px-4 border-b">Medium</td>
            <td className="py-3 px-4 border-b"><span className="text-xs text-gray-600">Planned</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile stacked cards -->
    <div className="md:hidden p-3 space-y-3">
      <div className="p-3 border rounded-lg">
        <div className="font-medium">Design mockups</div>
        <div className="text-sm text-gray-500">Due: Sep 30</div>
        <div className="text-sm text-gray-500">Priority: High</div>
      </div>
      <div className="p-3 border rounded-lg">
        <div className="font-medium">Content plan</div>
        <div className="text-sm text-gray-500">Due: Oct 05</div>
        <div className="text-sm text-gray-500">Priority: Medium</div>
      </div>
    </div>
  </div>
</div>`;

  const code6 = `<div className="overflow-x-auto p-4">
  <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm">
    <thead>
      <tr className="bg-gray-50 dark:bg-gray-700">
        <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 dark:text-gray-300">User</th>
        <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 dark:text-gray-300">Role</th>
        <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 dark:text-gray-300">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
        <td className="py-3 px-4 border-b flex items-center gap-3">
          <img src="https://via.placeholder.com/40" alt="Alex avatar" className="w-9 h-9 rounded-full" />
          <div>
            <div className="font-medium text-gray-900 dark:text-gray-100">Alex</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">alex@example.com</div>
          </div>
        </td>
        <td className="py-3 px-4 border-b text-sm text-gray-700 dark:text-gray-200">Admin</td>
        <td className="py-3 px-4 border-b">
          <div className="flex items-center gap-2">
            <button type="button" className="px-3 py-1 text-sm rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700">Profile</button>
            <button type="button" className="px-3 py-1 text-sm rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700">Message</button>
          </div>
        </td>
      </tr>

      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
        <td className="py-3 px-4 border-b flex items-center gap-3">
          <img src="https://via.placeholder.com/40" alt="Riya avatar" className="w-9 h-9 rounded-full" />
          <div>
            <div className="font-medium text-gray-900 dark:text-gray-100">Riya</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">riya@example.com</div>
          </div>
        </td>
        <td className="py-3 px-4 border-b text-sm text-gray-700 dark:text-gray-200">Developer</td>
        <td className="py-3 px-4 border-b">
          <div className="flex items-center gap-2">
            <button type="button" className="px-3 py-1 text-sm rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700">Profile</button>
            <button type="button" className="px-3 py-1 text-sm rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700">Message</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>`;

  const tables = [
    { title: "Minimal Table", code: code1, color: "blue" },
    { title: "Striped Table", code: code2, color: "purple" },
    { title: "Projects Table", code: code3, color: "cyan" },
    { title: "Inventory Table", code: code4, color: "gray" },
    { title: "Responsive Tasks", code: code5, color: "indigo" },
    { title: "Avatar + Actions", code: code6, color: "green" },
  ];

  const highlightCode = (code) =>
    code
      .replace(/&(lt|gt);/g, (m) => (m === "&lt;" ? "<" : ">"))
      .replace(/"(.*?)"/g, `<span class="text-green-600">"$1"</span>`)
      .replace(/className="[^"]+"/g, `<span class="text-pink-500">$&</span>`)
      .replace(/<\/[^>]+>/g, `<span class="text-red-500">$&</span>`)
      .replace(/<[^/][^>]+>/g, `<span class="text-blue-500">$&</span>`);

  const copyCode = async (code, title) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setCopiedLabel(`${title} code copied`);
    } catch (e) {
      console.error(e);
      setCopied(true);
      setCopiedLabel("Copy failed — allow clipboard access");
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-[#0a0a0a] dark:via-[#121212] dark:to-[#1a1a1a] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Table Components</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Polished table designs — previews on the left, copy-ready JSX on the right.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {tables.map((item, idx) => {
            const previewHtml = item.code.replace(/className=/g, "class=");
            return (
              <div
                key={idx}
                className="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                {/* Preview */}
                <div className="flex-1 flex flex-col justify-center items-start p-6 bg-gray-50 dark:bg-gray-800">
                  <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">{item.title} Preview</h3>
                  <div className="w-full border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-white dark:bg-gray-900 shadow-inner">
                    <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
                  </div>
                </div>

                {/* Code */}
                <div className="flex-1 relative p-6 bg-gray-50 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">{item.title} Code</h3>
                  <pre className="whitespace-pre-wrap text-xs md:text-sm bg-gray-100 dark:bg-gray-900 p-4 rounded-lg border border-gray-300 dark:border-gray-600 max-h-[60vh] overflow-auto">
                    <code dangerouslySetInnerHTML={{ __html: highlightCode(item.code) }} />
                  </pre>

                  <button
                    onClick={() => copyCode(item.code, item.title)}
                    className="absolute top-6 right-6 p-2 bg-gray-800 text-white rounded-lg shadow hover:opacity-90 transition flex items-center gap-2 text-sm"
                    aria-label={`Copy ${item.title} code`}
                  >
                    <FaCopy /> Copy
                  </button>

                  <div className="absolute top-6 right-20">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                        item.color === "blue"
                          ? "bg-blue-100 text-blue-800"
                          : item.color === "purple"
                          ? "bg-purple-100 text-purple-800"
                          : item.color === "cyan"
                          ? "bg-cyan-100 text-cyan-800"
                          : item.color === "gray"
                          ? "bg-gray-100 text-gray-800"
                          : item.color === "indigo"
                          ? "bg-indigo-100 text-indigo-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {item.title.split(" ")[0]}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* toast */}
      {copied && (
        <div className="fixed right-6 bottom-6 z-50">
          <div className="bg-black/90 text-white px-4 py-2 rounded-md shadow">{copiedLabel}</div>
        </div>
      )}
    </section>
  );
}
