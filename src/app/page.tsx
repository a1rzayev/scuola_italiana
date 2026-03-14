"use client";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Cta } from "@/components/Cta";
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
      { title: t.benefits.nativeTeachersTitle, desc: t.benefits.nativeTeachersDesc, icon: <FaceSmileIcon /> },
      { title: t.benefits.allLevelsTitle, desc: t.benefits.allLevelsDesc, icon: <ChartBarSquareIcon /> },
      { title: t.benefits.examPrepTitle, desc: t.benefits.examPrepDesc, icon: <CursorArrowRaysIcon /> },
    ],
  };

  const benefitTwo = {
    title: t.benefits.twoTitle,
    desc: t.benefits.twoDesc,
    image: benefitTwoImg,
    bullets: [
      { title: t.benefits.cafeTitle, desc: t.benefits.cafeDesc, icon: <DevicePhoneMobileIcon /> },
      { title: t.benefits.eventsTitle, desc: t.benefits.eventsDesc, icon: <AdjustmentsHorizontalIcon /> },
      { title: t.benefits.lessonsTitle, desc: t.benefits.lessonsDesc, icon: <SunIcon /> },
    ],
  };

  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle={t.home.preTitle}
        title={t.home.sectionTitle}
      >
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

      <div className="grid gap-6 mt-8 md:grid-cols-2">
        <Link
          href="/services/course"
          className="block p-6 transition rounded-xl bg-gray-50 dark:bg-trueGray-800 hover:bg-italia-50 dark:hover:bg-italia-900/20 border border-gray-100 dark:border-trueGray-700"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{t.home.italianCourses}</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {t.home.italianCoursesDesc}
          </p>
          <span className="inline-block mt-3 text-italia-600 dark:text-italia-400 font-medium">{t.home.viewCourses}</span>
        </Link>
        <Link
          href="/services/cafe"
          className="block p-6 transition rounded-xl bg-gray-50 dark:bg-trueGray-800 hover:bg-italia-50 dark:hover:bg-italia-900/20 border border-gray-100 dark:border-trueGray-700"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{t.home.ourCafe}</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {t.home.ourCafeDesc}
          </p>
          <span className="inline-block mt-3 text-italia-600 dark:text-italia-400 font-medium">{t.home.visitCafe}</span>
        </Link>
      </div>

      <SectionTitle preTitle={t.home.explore} title={t.home.linguaCultura}>
        {t.home.linguaCulturaDesc}
      </SectionTitle>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <Link
          href="/lingua-italiana"
          className="px-6 py-3 font-medium text-white rounded-md bg-italia-600 hover:bg-italia-700 dark:bg-italia-500 dark:hover:bg-italia-600"
        >
          {t.home.linguaItaliana}
        </Link>
        <Link
          href="/cultura-italiana"
          className="px-6 py-3 font-medium text-italia-600 border border-italia-600 rounded-md dark:text-italia-400 dark:border-italia-400 hover:bg-italia-50 dark:hover:bg-italia-900/30"
        >
          {t.home.culturaItaliana}
        </Link>
      </div>

      <Cta />
    </Container>
  );
}
