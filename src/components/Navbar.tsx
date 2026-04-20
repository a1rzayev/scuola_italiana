"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure, Menu } from "@headlessui/react";
import { SearchBar } from "./SearchBar";
import { useLanguage, Language } from "@/context/LanguageContext";

const languages: Language[] = ["AZ", "EN", "IT"];

export const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();

  const mainNav = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.aboutUs, href: "/about-us" },
    {
      name: t.nav.services,
      href: "/services",
      children: [
        { name: t.nav.cafe, href: "/services/cafe" },
        { name: t.nav.course, href: "/services/course" },
      ],
    },
    { name: t.nav.linguaItaliana, href: "/lingua-italiana" },
    { name: t.nav.culturaItaliana, href: "/cultura-italiana" },
    { name: t.nav.contacts, href: "/contacts" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const linkClass = (href: string) =>
    `inline-block px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
      isActive(href)
        ? "text-italia-700 dark:text-italia-400 bg-italia-50 dark:bg-italia-900/30"
        : "text-gray-700 dark:text-gray-200 hover:text-italia-600 dark:hover:text-italia-400 hover:bg-gray-50 dark:hover:bg-trueGray-800"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md dark:bg-trueGray-900/95 dark:border-trueGray-800">
      <nav className="container mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-0 py-3">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-semibold text-italia-600 dark:text-gray-100 hover:text-italia-700 dark:hover:text-white transition-colors duration-200"
          >
            <Image
              src="/img/logo.png"
              width="32"
              alt="Scuola Italiana logo"
              height="32"
              className="w-8 h-8"
            />
            <span>Scuola Italiana Baku</span>
          </Link>
          <a
            href="https://www.instagram.com/scuola_italiana_baku/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-italia-600 dark:text-gray-500 dark:hover:text-italia-400 transition-colors duration-200"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2 ml-auto lg:ml-0 lg:order-2">
          {/* Language switcher — segmented control */}
          <div className="flex items-center gap-0.5 rounded-lg bg-gray-100 dark:bg-trueGray-800 p-0.5">
            {languages.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all duration-200 ${
                  lang === l
                    ? "bg-white dark:bg-trueGray-700 text-italia-700 dark:text-italia-300 shadow-sm"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}
                aria-pressed={lang === l}
                aria-label={`Switch to ${l}`}
              >
                {l}
              </button>
            ))}
          </div>
          <ThemeChanger />
          <SearchBar />
        </div>

        {/* Mobile hamburger */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="ml-2 px-2 py-1.5 text-gray-500 rounded-md lg:hidden hover:text-italia-500 hover:bg-gray-50 focus:text-italia-500 focus:bg-italia-50 dark:text-gray-300 dark:hover:bg-trueGray-800 dark:focus:bg-trueGray-700 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="w-full mt-2 pb-3 lg:hidden animate-slide-down">
                <div className="w-full space-y-0.5 border-t border-gray-100 dark:border-trueGray-800 pt-3">
                  {mainNav.map((item) =>
                    "children" in item ? (
                      <div key={item.name}>
                        <span className="block px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                          {item.name}
                        </span>
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block w-full px-5 py-2 text-sm rounded-md transition-colors duration-150 ${
                              isActive(child.href)
                                ? "text-italia-700 dark:text-italia-400 bg-italia-50 dark:bg-italia-900/30"
                                : "text-gray-600 dark:text-gray-300 hover:text-italia-600 hover:bg-gray-50 dark:hover:bg-trueGray-800"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block w-full px-3 py-2 text-sm rounded-md transition-colors duration-150 ${
                          isActive(item.href)
                            ? "text-italia-700 dark:text-italia-400 bg-italia-50 dark:bg-italia-900/30"
                            : "text-gray-600 dark:text-gray-300 hover:text-italia-600 hover:bg-gray-50 dark:hover:bg-trueGray-800"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:items-center">
          <ul className="flex items-center gap-0.5">
            {mainNav.map((item) =>
              "children" in item ? (
                <li key={item.name} className="relative">
                  <Menu as="div" className="relative">
                    <Menu.Button
                      className={`inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                        isActive(item.href || "/services")
                          ? "text-italia-700 dark:text-italia-400 bg-italia-50 dark:bg-italia-900/30"
                          : "text-gray-700 dark:text-gray-200 hover:text-italia-600 dark:hover:text-italia-400 hover:bg-gray-50 dark:hover:bg-trueGray-800"
                      }`}
                    >
                      {item.name}
                      <svg
                        className="w-3.5 h-3.5 opacity-70"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Menu.Button>
                    <Menu.Items className="absolute left-0 mt-1.5 w-48 bg-white dark:bg-trueGray-800 rounded-xl shadow-card-hover border border-gray-100 dark:border-trueGray-700 focus:outline-none z-50 py-1 origin-top-left transition duration-100 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
                      {item.children?.map((child) => (
                        <Menu.Item key={child.href}>
                          {({ active }) => (
                            <Link
                              href={child.href}
                              className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                                active || isActive(child.href)
                                  ? "bg-italia-50 dark:bg-italia-900/30 text-italia-700 dark:text-italia-400"
                                  : "text-gray-700 dark:text-gray-200"
                              }`}
                            >
                              {child.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Menu>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass(item.href)}>
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};
