"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";

export default function CoursePage() {
  const { t } = useLanguage();
  return (
    <Container>
      <section className="pt-12 pb-16">
        <SectionTitle
          preTitle={t.course.preTitle}
          title={t.course.title}
          align="left"
        >
          {t.course.subtitle}
        </SectionTitle>
        <div className="max-w-3xl mt-8 space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>{t.course.p1}</p>
          <p>{t.course.p2}</p>
          <p>{t.course.p3}</p>
        </div>
      </section>
    </Container>
  );
}
