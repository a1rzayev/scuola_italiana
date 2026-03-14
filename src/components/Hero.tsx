"use client";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { useLanguage } from "@/context/LanguageContext";
import heroImg from "../../public/img/hero.png";

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              {t.hero.title}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              {t.hero.description}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/services/course"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-italia-600 rounded-md hover:bg-italia-700 dark:bg-italia-500 dark:hover:bg-italia-600">
                {t.hero.viewCourses}
              </Link>
              <Link
                href="/contacts"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-italia-500 dark:hover:text-italia-400">
                <span>{t.hero.contactUs}</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Scuola Italiana Baku"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            {t.hero.tagline.split("Lingua").length > 1 ? (
              <>
                {t.hero.tagline.split(/Lingua|Cultura Italiana/)[0]}
                <span className="text-italia-600">Lingua</span>
                {" & "}
                <span className="text-italia-600">Cultura Italiana</span>
                {t.hero.tagline.split(/Lingua & Cultura Italiana/)[1] ?? ""}
              </>
            ) : (
              t.hero.tagline
            )}
          </div>
        </div>
      </Container>
    </>
  );
};
