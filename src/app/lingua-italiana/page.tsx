import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function LinguaItalianaPage() {
  return (
    <Container>
      <section className="pt-12 pb-16">
        <SectionTitle
          preTitle="La lingua"
          title="Lingua Italiana"
          align="left"
        >
          The Italian language — history, beauty, and why learn it in Baku.
        </SectionTitle>
        <div className="max-w-3xl mt-8 space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>
            Italian is a Romance language spoken by over 85 million people worldwide. It descends from Latin and is known for its musicality, clear vowel sounds, and expressive beauty. Learning Italian opens the door to one of the world&apos;s richest literary, artistic, and culinary traditions.
          </p>
          <p>
            At Scuola Italiana Baku we focus on all four skills — listening, speaking, reading, and writing — with special attention to pronunciation and real-life communication. Our materials include authentic Italian texts, videos, music, and conversation practice so you can use the language in meaningful contexts from the very first lesson.
          </p>
          <p>
            Whether you plan to travel, work, or study in Italy, or simply love the language, we are here to help you reach your goals right here in Baku. Explore our <a href="/services/course" className="text-italia-600 dark:text-italia-400 hover:underline">courses</a> to get started.
          </p>
        </div>
      </section>
    </Container>
  );
}
