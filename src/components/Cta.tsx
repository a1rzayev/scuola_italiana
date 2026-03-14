"use client";
import React from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { useLanguage } from "@/context/LanguageContext";

export const Cta = () => {
  const { t } = useLanguage();
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-italiaRed-500 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            {t.cta.title}
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            {t.cta.desc}
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <Link
            href="/contacts"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-italiaRed-500 bg-white rounded-md px-7 lg:px-10 lg:py-5 hover:bg-gray-100"
          >
            {t.cta.button}
          </Link>
        </div>
      </div>
    </Container>
  );
};
