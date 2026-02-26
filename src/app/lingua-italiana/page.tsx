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
          The Italian language—history, structure, and why learn it.
        </SectionTitle>
        <div className="max-w-3xl mt-8 space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>
            Italian is a Romance language spoken by millions in Italy, Switzerland, and around the world. It descends from Latin and is known for its musicality and clear vowel sounds. Learning Italian opens the door to literature, opera, cinema, and one of the world&apos;s most influential cultures.
          </p>
          <p>
            At Scuola Italiana we focus on all four skills—listening, speaking, reading, and writing—with special attention to pronunciation and real-life communication. Our materials include authentic texts, videos, and conversation practice so you can use the language in meaningful contexts.
          </p>
          <p>
            Whether you plan to travel, work, or study in Italy, or simply love the language, we are here to help you reach your goals. Explore our <a href="/services/course" className="text-italia-600 dark:text-italia-400 hover:underline">courses</a> to get started.
          </p>
        </div>
      </section>
    </Container>
  );
}
