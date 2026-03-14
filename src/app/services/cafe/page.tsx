"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";

export default function CafePage() {
  const { t } = useLanguage();
  return (
    <Container>
      <section className="pt-12 pb-16">
        <SectionTitle
          preTitle={t.cafe.preTitle}
          title={t.cafe.title}
          align="left"
        >
          {t.cafe.subtitle}
        </SectionTitle>
        <div className="max-w-3xl mt-8 space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>{t.cafe.p1}</p>
          <p>{t.cafe.p2}</p>
          <p>{t.cafe.p3}</p>
        </div>
      </section>
    </Container>
  );
}
