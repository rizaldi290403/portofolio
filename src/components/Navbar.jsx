import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50 transition-colors">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1
          onClick={() => handleScroll("hero")}
          className="text-xl font-bold text-blue-700 dark:text-blue-400 cursor-pointer"
        >
          MyPortfolio
        </h1>
        <ul className="flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
          <li onClick={() => handleScroll("about")} className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
            About
          </li>
          <li onClick={() => handleScroll("projects")} className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
            Projects
          </li>
          <li onClick={() => handleScroll("contact")} className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
            Contact
          </li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-lg text-sm transition"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
