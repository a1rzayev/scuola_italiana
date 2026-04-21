"use client";
import React from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { useLanguage } from "@/context/LanguageContext";
import { REGISTRATION_FORM_URL } from "@/lib/registrationForm";

export const Cta = () => {
  const { t } = useLanguage();
  return (
    <Container className="py-14 lg:py-20">
      <div className="relative overflow-hidden flex flex-wrap items-center justify-between w-full max-w-4xl gap-6 mx-auto text-white bg-gradient-to-br from-italiaRed-600 to-italiaRed-500 px-8 py-10 lg:px-14 lg:py-14 lg:flex-nowrap rounded-2xl shadow-card-hover">
        {/* Subtle decorative circles */}
        <div className="absolute -top-8 -right-8 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none" />

        <div className="relative flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-bold lg:text-3xl leading-snug">
            {t.cta.title}
          </h2>
          <p className="mt-2 text-base text-white/85 lg:text-lg">
            {t.cta.desc}
          </p>
        </div>
        <div className="relative flex-shrink-0 w-full flex flex-col sm:flex-row items-center justify-center gap-3 text-center lg:w-auto lg:flex-col xl:flex-row">
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto py-3.5 px-8 lg:px-10 lg:py-4 text-base font-semibold text-italiaRed-600 bg-white rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {t.cta.registerButton}
          </a>
          <Link
            href="/contacts"
            className="inline-block w-full sm:w-auto py-3 px-8 text-base font-semibold text-white/95 border border-white/40 rounded-xl hover:bg-white/10 transition-colors duration-200"
          >
            {t.cta.contactButton}
          </Link>
        </div>
      </div>
    </Container>
  );
};
