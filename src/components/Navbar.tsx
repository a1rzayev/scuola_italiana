"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure, Menu } from "@headlessui/react";
import { SearchBar } from "./SearchBar";
import { useLanguage, Language } from "@/context/LanguageContext";

const languages: Language[] = ["AZ", "EN", "IT"];

export const Navbar = () => {
  const { lang, setLang, t } = useLanguage();

  const mainNav = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.aboutUs, href: "/about-us" },
    {
      name: t.nav.services,
      children: [
        { name: t.nav.cafe, href: "/services/cafe" },
        { name: t.nav.course, href: "/services/course" },
      ],
    },
    { name: t.nav.linguaItaliana, href: "/lingua-italiana" },
    { name: t.nav.culturaItaliana, href: "/cultura-italiana" },
    { name: t.nav.contacts, href: "/contacts" },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-italia-600 dark:text-gray-100">
            <span>
              <Image
                src="/img/logo.png"
                width="32"
                alt="Scuola Italiana logo"
                height="32"
                className="w-8"
              />
            </span>
            <span>Scuola Italiana Baku</span>
          </Link>
          <a
            href="https://www.instagram.com/scuola_italiana_baku/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-italia-600 dark:text-gray-500 dark:hover:text-italia-400 transition-colors"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>

        <div className="flex items-center gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <div className="flex items-center gap-1">
            {languages.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  lang === l
                    ? "text-italia-600 dark:text-italia-400 font-semibold"
                    : "text-gray-500 dark:text-gray-400 hover:text-italia-500"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <ThemeChanger />
          <SearchBar />
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-italia-500 focus:text-italia-500 focus:bg-italia-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <div className="w-full space-y-1">
                  {mainNav.map((item) =>
                    "children" in item ? (
                      <div key={item.name} className="py-2">
                        <span className="block px-4 py-1 text-sm font-semibold text-gray-500 dark:text-gray-400">
                          {item.name}
                        </span>
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block w-full px-6 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-italia-500 hover:bg-italia-50 dark:hover:bg-trueGray-700"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-italia-500 focus:text-italia-500 focus:bg-italia-100 dark:focus:bg-gray-800 focus:outline-none"
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

        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex gap-1">
            {mainNav.map((item) =>
              "children" in item ? (
                <li className="nav__item relative group" key={item.name}>
                  <Menu as="div" className="relative">
                    <Menu.Button className="inline-flex items-center px-4 py-2 text-lg font-normal text-gray-800 rounded-md dark:text-gray-200 hover:text-italia-500 focus:text-italia-500 focus:bg-italia-100 focus:outline-none dark:focus:bg-gray-800">
                      {item.name}
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Menu.Button>
                    <Menu.Items className="absolute left-0 mt-1 w-48 bg-white dark:bg-trueGray-800 rounded-md shadow-lg border border-gray-200 dark:border-trueGray-600 focus:outline-none z-50">
                      {item.children?.map((child) => (
                        <Menu.Item key={child.href}>
                          {({ active }) => (
                            <Link
                              href={child.href}
                              className={`block px-4 py-2 text-sm ${active ? "bg-italia-50 dark:bg-italia-900/30 text-italia-600 dark:text-italia-400" : "text-gray-700 dark:text-gray-200"}`}
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
                <li className="nav__item" key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-italia-500 focus:text-italia-500 focus:bg-italia-100 focus:outline-none dark:focus:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
