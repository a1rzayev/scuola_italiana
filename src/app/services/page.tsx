"use client";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();
  return (
    <Container>
      <section className="pt-12 pb-16">
        <SectionTitle
          preTitle={t.services.preTitle}
          title={t.services.title}
        >
          {t.services.subtitle}
        </SectionTitle>
        <div className="grid gap-8 mt-12 md:grid-cols-2">
          <Link
            href="/services/cafe"
            className="block p-8 transition rounded-xl bg-gray-50 dark:bg-trueGray-800 hover:bg-italia-50 dark:hover:bg-italia-900/20 border border-gray-100 dark:border-trueGray-700"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{t.services.cafe}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">{t.services.cafeDesc}</p>
            <span className="inline-flex items-center mt-4 text-italia-600 dark:text-italia-400 font-medium">
              {t.services.visitCafe}
            </span>
          </Link>
          <Link
            href="/services/course"
            className="block p-8 transition rounded-xl bg-gray-50 dark:bg-trueGray-800 hover:bg-italia-50 dark:hover:bg-italia-900/20 border border-gray-100 dark:border-trueGray-700"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{t.services.courses}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">{t.services.coursesDesc}</p>
            <span className="inline-flex items-center mt-4 text-italia-600 dark:text-italia-400 font-medium">
              {t.services.viewCourses}
            </span>
          </Link>
        </div>
      </section>
    </Container>
  );
}
