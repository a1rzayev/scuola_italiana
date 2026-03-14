"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";

export default function CulturaItalianaPage() {
  const { t } = useLanguage();
  return (
    <Container>
      <section className="pt-12 pb-16">
        <SectionTitle
          preTitle={t.cultura.preTitle}
          title={t.cultura.title}
          align="left"
        >
          {t.cultura.subtitle}
        </SectionTitle>
        <div className="max-w-3xl mt-8 space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>{t.cultura.p1}</p>
          <p>{t.cultura.p2}</p>
          <p>{t.cultura.p3}</p>
        </div>
      </section>
    </Container>
  );
}
