"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutUsPage() {
  const { t } = useLanguage();
  return (
    <Container>
      <section className="pt-12 pb-16">
        <SectionTitle
          preTitle={t.about.preTitle}
          title={t.about.title}
          align="left"
        >
          {t.about.subtitle}
        </SectionTitle>
        <div className="max-w-3xl mt-8 space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
          <p>{t.about.p4}</p>
        </div>
      </section>
    </Container>
  );
}
