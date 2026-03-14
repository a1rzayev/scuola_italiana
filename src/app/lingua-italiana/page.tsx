"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";

export default function LinguaItalianaPage() {
  const { t } = useLanguage();
  return (
    <Container>
      <section className="pt-12 pb-16">
        <SectionTitle
          preTitle={t.lingua.preTitle}
          title={t.lingua.title}
          align="left"
        >
          {t.lingua.subtitle}
        </SectionTitle>
        <div className="max-w-3xl mt-8 space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>{t.lingua.p1}</p>
          <p>{t.lingua.p2}</p>
          <p>{t.lingua.p3}</p>
        </div>
      </section>
    </Container>
  );
}
