"use client";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { useLanguage } from "@/context/LanguageContext";
import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

export default function Home() {
  const { t } = useLanguage();

  const benefitOne = {
    title: t.benefits.oneTitle,
    desc: t.benefits.oneDesc,
    image: benefitOneImg,
    bullets: [
      {
        title: t.benefits.nativeTeachersTitle,
        desc: t.benefits.nativeTeachersDesc,
        icon: <FaceSmileIcon />,
      },
      {
        title: t.benefits.allLevelsTitle,
        desc: t.benefits.allLevelsDesc,
        icon: <ChartBarSquareIcon />,
      },
      {
        title: t.benefits.examPrepTitle,
        desc: t.benefits.examPrepDesc,
        icon: <CursorArrowRaysIcon />,
      },
    ],
  };

  const benefitTwo = {
    title: t.benefits.twoTitle,
    desc: t.benefits.twoDesc,
    image: benefitTwoImg,
    bullets: [
      {
        title: t.benefits.cafeTitle,
        desc: t.benefits.cafeDesc,
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: t.benefits.eventsTitle,
        desc: t.benefits.eventsDesc,
        icon: <AdjustmentsHorizontalIcon />,
      },
      {
        title: t.benefits.lessonsTitle,
        desc: t.benefits.lessonsDesc,
        icon: <SunIcon />,
      },
    ],
  };

  return (
    <>
      <Hero />

      <SectionTitle preTitle={t.home.preTitle} title={t.home.sectionTitle}>
        {t.home.sectionDesc}
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle={t.home.whatWeOffer}
        title={t.home.coursesServices}
      >
        {t.home.coursesServicesDesc}
      </SectionTitle>

      <Container className="pb-4">
        <div className="grid gap-5 mt-8 md:grid-cols-2">
          <Link
            href="/services/course"
            className="group block p-7 transition-all duration-300 rounded-2xl bg-gray-50 dark:bg-trueGray-800 hover:bg-italia-50 dark:hover:bg-italia-900/20 border border-gray-100 dark:border-trueGray-700 hover:border-italia-200 dark:hover:border-italia-800 hover:shadow-card-hover"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {t.home.italianCourses}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {t.home.italianCoursesDesc}
            </p>
            <span className="inline-flex items-center mt-4 gap-1 text-sm font-semibold text-italia-600 dark:text-italia-400 group-hover:gap-2 transition-all duration-200">
              {t.home.viewCourses}
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
            href="/services/cafe"
            className="group block p-7 transition-all duration-300 rounded-2xl bg-gray-50 dark:bg-trueGray-800 hover:bg-italia-50 dark:hover:bg-italia-900/20 border border-gray-100 dark:border-trueGray-700 hover:border-italia-200 dark:hover:border-italia-800 hover:shadow-card-hover"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {t.home.ourCafe}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {t.home.ourCafeDesc}
            </p>
            <span className="inline-flex items-center mt-4 gap-1 text-sm font-semibold text-italia-600 dark:text-italia-400 group-hover:gap-2 transition-all duration-200">
              {t.home.visitCafe}
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

      <SectionTitle preTitle={t.home.explore} title={t.home.linguaCultura}>
        {t.home.linguaCulturaDesc}
      </SectionTitle>

      <Container className="pb-4">
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Link
            href="/lingua-italiana"
            className="group inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-xl bg-italia-600 hover:bg-italia-700 dark:bg-italia-500 dark:hover:bg-italia-600 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {t.home.linguaItaliana}
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/cultura-italiana"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-italia-700 border-2 border-italia-200 rounded-xl dark:text-italia-400 dark:border-italia-700 hover:bg-italia-50 dark:hover:bg-italia-900/30 hover:border-italia-300 dark:hover:border-italia-600 transition-all duration-200"
          >
            {t.home.culturaItaliana}
          </Link>
        </div>
      </Container>

    </>
  );
}
