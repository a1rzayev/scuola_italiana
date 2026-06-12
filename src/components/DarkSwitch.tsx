"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-8 h-8" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-trueGray-700 hover:bg-gray-200 dark:hover:bg-trueGray-600 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200 p-1.5"
      aria-label={isDark ? t.ui.switchToLight : t.ui.switchToDark}
    >
      <span className="relative w-5 h-5 overflow-hidden flex items-center justify-center">
        {/* Sun icon */}
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isDark ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
        </span>
        {/* Moon icon */}
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isDark ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width="18"
            height="18"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </span>
      </span>
    </button>
  );
};

export default ThemeChanger;
