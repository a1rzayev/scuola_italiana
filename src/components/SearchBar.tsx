"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { searchIndex } from "@/lib/searchIndex";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof searchIndex>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
        const href = results[focusedIndex].href;
        if (isExternalHref(href)) {
          window.location.assign(href);
        } else {
          router.push(href);
        }
        setIsOpen(false);
        setQuery("");
      } else if (e.key === "Escape") {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, focusedIndex, router]);

  return (
    <div ref={wrapperRef} className="relative">
      <div className="relative">
        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none">
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          type="search"
          placeholder="Search…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => query && setIsOpen(true)}
          className="w-28 sm:w-44 pl-8 pr-2 sm:pr-3 py-1.5 text-sm border border-gray-200 rounded-lg bg-gray-50 dark:bg-trueGray-800 dark:border-trueGray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-italia-500 focus:border-transparent transition-all duration-200"
          aria-label="Search within site"
          aria-autocomplete="list"
          aria-expanded={isOpen && (results.length > 0 || query.trim().length > 0)}
        />
      </div>

      {isOpen && results.length > 0 && (
        <ul
          className="absolute top-full right-0 mt-1.5 w-[min(18rem,calc(100vw-1rem))] py-1.5 bg-white dark:bg-trueGray-800 border border-gray-100 dark:border-trueGray-700 rounded-xl shadow-card-hover z-50 max-h-72 overflow-auto animate-slide-down"
          role="listbox"
        >
          {results.map((item, index) => {
            const rowClass = `block px-4 py-2.5 transition-colors duration-150 ${
              index === focusedIndex
                ? "bg-italia-50 dark:bg-italia-900/30"
                : "hover:bg-gray-50 dark:hover:bg-trueGray-700"
            }`;
            const close = () => {
              setIsOpen(false);
              setQuery("");
            };
            return (
              <li key={item.href} role="option" aria-selected={index === focusedIndex}>
                {isExternalHref(item.href) ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className={rowClass}
                  >
                    <span className="font-medium text-sm text-gray-900 dark:text-white">
                      {item.title}
                    </span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
                      {item.description}
                    </span>
                  </a>
                ) : (
                  <Link href={item.href} onClick={close} className={rowClass}>
                    <span className="font-medium text-sm text-gray-900 dark:text-white">
                      {item.title}
                    </span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
                      {item.description}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      )}

      {isOpen && query.trim() && results.length === 0 && (
        <div className="absolute top-full right-0 mt-1.5 w-[min(16rem,calc(100vw-1rem))] py-4 px-4 bg-white dark:bg-trueGray-800 border border-gray-100 dark:border-trueGray-700 rounded-xl shadow-card-hover z-50 text-center text-sm text-gray-500 dark:text-gray-400 animate-slide-down">
          No results for &quot;{query}&quot;
        </div>
      )}
    </div>
  );
}
