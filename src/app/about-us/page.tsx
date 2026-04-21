"use client";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";
import aboutImg from "../../../public/img/pages/about.jpg";

export default function AboutUsPage() {
  const { t } = useLanguage();
  return (
    <>
      <SectionTitle
        preTitle={t.about.preTitle}
        title={t.about.title}
        align="left"
      >
        {t.about.subtitle}
      </SectionTitle>

      <Container className="pb-16">
        <div className="mt-4 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="space-y-5 text-base leading-relaxed text-gray-600 dark:text-gray-300">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
              <p>{t.about.p4}</p>
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
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-trueGray-700 bg-gray-50 dark:bg-trueGray-800 lg:sticky lg:top-24">
            <Image
              src={aboutImg}
              alt="Scuola Italiana community in Baku"
              className="w-full h-64 md:h-80 object-contain bg-gray-100 dark:bg-trueGray-800"
              priority
            />
          </div>
        </div>
      </Container>
    </>
  );
}
