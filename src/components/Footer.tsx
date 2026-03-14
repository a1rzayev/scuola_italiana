import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-italia-500 dark:text-gray-100"
              >
                <Image
                  src="/img/logo.png"
                  alt="Scuola Italiana logo"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>Scuola Italiana Baku</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Italian language courses for all levels, an authentic Italian café, and cultural events in Baku, Azerbaijan.
            </div>
          </div>

          <div className="">
            <div>Follow us</div>
            <div className="mt-5 space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <a
                href="https://t.me/your-telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-italia-600 dark:hover:text-italia-400"
              >
                Telegram
              </a>
              <a
                href="https://wa.me/your-whatsapp-number"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-italia-600 dark:hover:text-italia-400"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()} Scuola Italiana Baku.
        </div>
      </Container>
      {/* Do not remove this */}
      <Backlink />
    </div>
  );
}

const Backlink = () => {
  return (
    <a
      href="https://web3templates.com"
      target="_blank"
      rel="noopener"
      className="absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center left-5 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="29.5385" rx="2.76923" fill="#362F78" />
        <path
          d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
          fill="#F7FAFC"
        />
      </svg>

      <span>Web3Templates</span>
    </a>
  );
};
