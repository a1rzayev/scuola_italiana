"use client";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { useLanguage } from "@/context/LanguageContext";
import heroImg from "../../public/img/hero.png";

function TaglineText({ text }: { text: string }) {
  const match = text.match(/Lingua[^•\n]*(Italiana|italiane)/i);
  if (!match) return <>{text}</>;
  const idx = text.indexOf(match[0]);
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-italia-600 dark:text-italia-400 font-semibold">
        {match[0]}
      </span>
      {text.slice(idx + match[0].length)}
    </>
  );
}

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <>
      <Container className="flex flex-wrap pt-12 pb-8 lg:pt-16 lg:pb-12 lg:flex-nowrap items-center gap-8 lg:gap-12">
        {/* Text column */}
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 xl:text-5xl xl:leading-tight dark:text-white">
              {t.hero.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-500 xl:text-xl dark:text-gray-300 animation-delay-100 animate-fade-in-up">
              {t.hero.description}
            </p>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center animation-delay-200 animate-fade-in-up">
              <Link
                href="/services/course"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-italia-600 rounded-xl hover:bg-italia-700 dark:bg-italia-500 dark:hover:bg-italia-600 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {t.hero.viewCourses}
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-italia-600 dark:hover:text-italia-400 font-medium transition-colors duration-200"
              >
                {t.hero.contactUs}
                <svg
                  className="w-4 h-4 opacity-60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Image column */}
        <div className="flex items-center justify-center w-full lg:w-1/2 animate-fade-in animation-delay-100">
          <Image
            src={heroImg}
            width={580}
            height={580}
            className="object-cover w-full max-w-sm lg:max-w-none rounded-2xl"
            alt="Scuola Italiana Baku — Italian language school and café in Baku"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </Container>

      {/* Tagline strip */}
      <div className="border-y border-gray-100 dark:border-trueGray-800 bg-gray-50/60 dark:bg-trueGray-800/40">
        <Container className="py-3.5">
          <p className="text-sm text-center text-gray-500 dark:text-gray-400 tracking-wide animate-fade-in animation-delay-300">
            <TaglineText text={t.hero.tagline} />
          </p>
        </Container>
      </div>
    </>
  );
};
