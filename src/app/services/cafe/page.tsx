"use client";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";

export default function CafePage() {
  const { t } = useLanguage();
  return (
    <>
      <SectionTitle
        preTitle={t.cafe.preTitle}
        title={t.cafe.title}
        align="left"
      >
        {t.cafe.subtitle}
      </SectionTitle>

      <Container className="pb-16">
        <div className="max-w-3xl mt-4 space-y-5 text-base leading-relaxed text-gray-600 dark:text-gray-300">
          <p>{t.cafe.p1}</p>
          <p>{t.cafe.p2}</p>
          <p>{t.cafe.p3}</p>
        </div>
        <div className="mt-10">
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-italia-600 rounded-xl hover:bg-italia-700 dark:bg-italia-500 dark:hover:bg-italia-600 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {t.nav.contacts}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </>
  );
}
