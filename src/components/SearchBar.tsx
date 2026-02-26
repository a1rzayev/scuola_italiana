"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { searchIndex } from "@/lib/searchIndex";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof searchIndex>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setFocusedIndex(-1);
      return;
    }
    const q = query.toLowerCase().trim();
    const filtered = searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.keywords.some((k) => k.toLowerCase().includes(q))
    );
    setResults(filtered.slice(0, 6));
    setFocusedIndex(-1);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isOpen || results.length === 0) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex((i) => (i < results.length - 1 ? i + 1 : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex((i) => (i > 0 ? i - 1 : results.length - 1));
      } else if (e.key === "Enter" && focusedIndex >= 0 && results[focusedIndex]) {
        e.preventDefault();
        window.location.href = results[focusedIndex].href;
      } else if (e.key === "Escape") {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, focusedIndex]);

  return (
    <div ref={wrapperRef} className="relative">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input
          type="search"
          placeholder="Search site..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => query && setIsOpen(true)}
          className="w-40 pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 dark:bg-trueGray-800 dark:border-trueGray-600 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:w-48"
          aria-label="Search within site"
        />
      </div>
      {isOpen && results.length > 0 && (
        <ul
          className="absolute top-full left-0 right-0 mt-1 py-1 bg-white dark:bg-trueGray-800 border border-gray-200 dark:border-trueGray-600 rounded-lg shadow-lg z-50 max-h-72 overflow-auto"
          role="listbox"
        >
          {results.map((item, index) => (
            <li key={item.href} role="option" aria-selected={index === focusedIndex}>
              <Link
                href={item.href}
                onClick={() => {
                  setIsOpen(false);
                  setQuery("");
                }}
                className={`block px-4 py-2 text-left hover:bg-indigo-50 dark:hover:bg-indigo-900/30 ${
                  index === focusedIndex ? "bg-indigo-50 dark:bg-indigo-900/30" : ""
                }`}
              >
                <span className="font-medium text-gray-900 dark:text-white">{item.title}</span>
                <span className="block text-sm text-gray-500 dark:text-gray-400 truncate">{item.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {isOpen && query.trim() && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 py-4 px-4 bg-white dark:bg-trueGray-800 border border-gray-200 dark:border-trueGray-600 rounded-lg shadow-lg z-50 text-center text-gray-500 dark:text-gray-400 text-sm">
          No results for &quot;{query}&quot;
        </div>
      )}
    </div>
  );
}
