"use client";

import { useState, useRef, useEffect, Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Transition } from "@headlessui/react";
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

  const showDropdown = isOpen && (results.length > 0 || query.trim().length > 0);

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
          className="w-28 sm:w-44 pl-8 pr-2 sm:pr-3 py-1.5 text-sm border border-gray-200 rounded-lg bg-gray-50 dark:bg-trueGray-800 dark:border-trueGray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-italia-500 focus:border-transparent focus:shadow-md transition-all duration-200"
          aria-label="Search within site"
          aria-autocomplete="list"
        />
      </div>

      <Transition
        as={Fragment}
        show={showDropdown && results.length > 0}
        enter="transition duration-200 ease-[var(--ease-spring)]"
        enterFrom="opacity-0 scale-95 -translate-y-2"
        enterTo="opacity-100 scale-100 translate-y-0"
        leave="transition duration-100 ease-in"
        leaveFrom="opacity-100 scale-100 translate-y-0"
        leaveTo="opacity-0 scale-95 -translate-y-1"
      >
        <ul
          className="absolute top-full right-0 mt-1.5 w-[min(18rem,calc(100vw-1rem))] py-1.5 bg-white dark:bg-trueGray-800 border border-gray-100 dark:border-trueGray-700 rounded-xl shadow-card-hover z-50 max-h-72 overflow-auto"
          role="listbox"
        >
          {results.map((item, index) => {
            const isFocused = index === focusedIndex;
            const rowBase = `group relative block px-4 py-2.5 transition-all duration-150 ${
              isFocused
                ? "bg-italia-500/5 dark:bg-italia-900/30 ring-1 ring-inset ring-italia-500/30"
                : "hover:bg-italia-500/5 dark:hover:bg-trueGray-700"
            }`;
            const close = () => {
              setIsOpen(false);
              setQuery("");
            };
            const content = (
              <>
                <span className="font-medium text-sm text-gray-900 dark:text-white pr-5">
                  {item.title}
                </span>
                <span className="block text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
                  {item.description}
                </span>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 dark:text-gray-600 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-italia-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </>
            );
            return (
              <li key={item.href} role="option" aria-selected={isFocused}>
                {isExternalHref(item.href) ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={close} className={rowBase}>
                    {content}
                  </a>
                ) : (
                  <Link href={item.href} onClick={close} className={rowBase}>
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </Transition>

      <Transition
        as={Fragment}
        show={isOpen && query.trim().length > 0 && results.length === 0}
        enter="transition duration-200 ease-[var(--ease-spring)]"
        enterFrom="opacity-0 scale-95 -translate-y-2"
        enterTo="opacity-100 scale-100 translate-y-0"
        leave="transition duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-full right-0 mt-1.5 w-[min(16rem,calc(100vw-1rem))] py-6 px-4 bg-white dark:bg-trueGray-800 border border-gray-100 dark:border-trueGray-700 rounded-xl shadow-card-hover z-50 text-center">
          <svg className="w-10 h-10 mx-auto text-gray-300 dark:text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            No results for &quot;{query}&quot;
          </p>
        </div>
      </Transition>
    </div>
  );
}
