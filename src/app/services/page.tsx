"use client";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();
  return (
    <>
      <SectionTitle preTitle={t.services.preTitle} title={t.services.title}>
        {t.services.subtitle}
      </SectionTitle>

      <Container className="pb-16">
        <div className="grid gap-5 mt-8 md:grid-cols-2">
          <Link
            href="/services/cafe"
            className="group block p-8 transition-all duration-300 rounded-2xl bg-gray-50 dark:bg-trueGray-800 hover:bg-italia-50 dark:hover:bg-italia-900/20 border border-gray-100 dark:border-trueGray-700 hover:border-italia-200 dark:hover:border-italia-800 hover:shadow-card-hover"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              {t.services.cafe}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {t.services.cafeDesc}
            </p>
            <span className="inline-flex items-center mt-5 gap-1 text-sm font-semibold text-italia-600 dark:text-italia-400 group-hover:gap-2 transition-all duration-200">
              {t.services.visitCafe}
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
          <Link
            href="/services/course"
            className="group block p-8 transition-all duration-300 rounded-2xl bg-gray-50 dark:bg-trueGray-800 hover:bg-italia-50 dark:hover:bg-italia-900/20 border border-gray-100 dark:border-trueGray-700 hover:border-italia-200 dark:hover:border-italia-800 hover:shadow-card-hover"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              {t.services.courses}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {t.services.coursesDesc}
            </p>
            <span className="inline-flex items-center mt-5 gap-1 text-sm font-semibold text-italia-600 dark:text-italia-400 group-hover:gap-2 transition-all duration-200">
              {t.services.viewCourses}
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </Container>
    </>
  );
}
