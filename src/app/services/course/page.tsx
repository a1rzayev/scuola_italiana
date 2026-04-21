"use client";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";
import { REGISTRATION_FORM_URL } from "@/lib/registrationForm";
import courseImg from "../../../../public/img/pages/course.jpg";

const levels = [
  { key: "a1" as const, color: "bg-italia-50 dark:bg-italia-900/20 border-italia-100 dark:border-italia-800/40", badge: "bg-italia-100 text-italia-800 dark:bg-italia-900/60 dark:text-italia-300" },
  { key: "a2" as const, color: "bg-italia-50 dark:bg-italia-900/20 border-italia-100 dark:border-italia-800/40", badge: "bg-italia-100 text-italia-800 dark:bg-italia-900/60 dark:text-italia-300" },
  { key: "b1" as const, color: "bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800/30", badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300" },
  { key: "b2" as const, color: "bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800/30", badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300" },
  { key: "c1" as const, color: "bg-violet-50 dark:bg-violet-900/10 border-violet-100 dark:border-violet-800/30", badge: "bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300" },
  { key: "c2" as const, color: "bg-violet-50 dark:bg-violet-900/10 border-violet-100 dark:border-violet-800/30", badge: "bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300" },
] as const;

type LevelKey = typeof levels[number]["key"];

export default function CoursePage() {
  const { t } = useLanguage();

  const getLevelTitle = (key: LevelKey) => t.course[`${key}Title` as keyof typeof t.course] as string;
  const getLevelDesc = (key: LevelKey) => t.course[`${key}Desc` as keyof typeof t.course] as string;

  const examBodies = [
    { label: t.course.examCils, icon: "🎓" },
    { label: t.course.examCeli, icon: "🎓" },
    { label: t.course.examPlida, icon: "🎓" },
  ];

  return (
    <>
      <SectionTitle
        preTitle={t.course.preTitle}
        title={t.course.title}
        align="left"
      >
        {t.course.subtitle}
      </SectionTitle>

      <Container className="pb-4">
        <div className="mt-2 grid gap-8 lg:grid-cols-2 lg:items-start">
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
            {t.course.p1}
          </p>
          <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-trueGray-700 lg:sticky lg:top-24">
            <Image
              src={courseImg}
              alt="Italian language class"
              className="w-full h-64 md:h-80 object-contain bg-gray-100 dark:bg-trueGray-800"
              priority
            />
          </div>
        </div>
      </Container>

      {/* ── Levels ─────────────────────────────────────────── */}
      <Container className="pt-10 pb-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {t.course.levelsTitle}
          </h2>
          <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
            {t.course.levelsSubtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {levels.map(({ key, color, badge }) => (
            <div
              key={key}
              className={`rounded-2xl border p-5 transition-shadow duration-200 hover:shadow-card-hover ${color}`}
            >
              <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase mb-3 ${badge}`}>
                {getLevelTitle(key).split("—")[0].trim()}
              </span>
              <h3 className="text-base font-semibold text-gray-800 dark:text-white leading-snug">
                {getLevelTitle(key).split("—")[1]?.trim() ?? getLevelTitle(key)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {getLevelDesc(key)}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* ── Formats ────────────────────────────────────────── */}
      <Container className="pt-10 pb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          {t.course.formatsTitle}
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Group */}
          <div className="rounded-2xl border border-gray-100 dark:border-trueGray-700 bg-white dark:bg-trueGray-800 p-7 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-italia-50 dark:bg-italia-900/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-italia-600 dark:text-italia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">{t.course.groupTitle}</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {t.course.groupDesc}
            </p>
          </div>

          {/* Private */}
          <div className="rounded-2xl border border-gray-100 dark:border-trueGray-700 bg-white dark:bg-trueGray-800 p-7 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-italia-50 dark:bg-italia-900/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-italia-600 dark:text-italia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">{t.course.privateTitle}</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {t.course.privateDesc}
            </p>
          </div>
        </div>
      </Container>

      {/* ── Exam Prep ──────────────────────────────────────── */}
      <Container className="pt-10 pb-4">
        <div className="rounded-2xl border border-italiaRed-100 dark:border-italiaRed-900/40 bg-italiaRed-50/60 dark:bg-italiaRed-900/10 p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-italiaRed-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                {t.course.examTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl">
                {t.course.examDesc}
              </p>
              <ul className="mt-5 space-y-2.5">
                {examBodies.map(({ label }) => (
                  <li key={label} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-200">
                    <svg className="w-4 h-4 text-italiaRed-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* ── CTA ────────────────────────────────────────────── */}
      <Container className="pt-10 pb-16">
        <div className="rounded-2xl bg-gray-50 dark:bg-trueGray-800 border border-gray-100 dark:border-trueGray-700 p-8 lg:p-10 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              {t.course.ctaTitle}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {t.course.ctaDesc}
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-white bg-italia-600 rounded-xl hover:bg-italia-700 dark:bg-italia-500 dark:hover:bg-italia-600 transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
            >
              {t.course.ctaRegisterButton}
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <Link
              href="/contacts"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-italia-700 dark:text-italia-300 bg-white dark:bg-trueGray-900 border-2 border-italia-600 dark:border-italia-500 rounded-xl hover:bg-italia-50 dark:hover:bg-italia-900/20 transition-all duration-200 whitespace-nowrap"
            >
              {t.course.ctaButton}
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
