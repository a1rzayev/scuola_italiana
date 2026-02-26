import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function CulturaItalianaPage() {
  return (
    <Container>
      <section className="pt-12 pb-16">
        <SectionTitle
          preTitle="La cultura"
          title="Cultura Italiana"
          align="left"
        >
          Art, history, traditions—discover Italian culture beyond the language.
        </SectionTitle>
        <div className="max-w-3xl mt-8 space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>
            Italian culture has shaped Western art, music, cuisine, and design for centuries. From the Renaissance to contemporary fashion and food, Italy continues to inspire the world. At Scuola Italiana we believe that understanding culture deepens your command of the language and makes learning more rewarding.
          </p>
          <p>
            We regularly organize events and workshops: film screenings, cooking sessions, talks on art and history, and celebrations of Italian holidays and traditions. These activities are open to students and the wider community.
          </p>
          <p>
            Join us to explore la dolce vita—the sweet life—through language, food, and culture. Check our <a href="/contacts" className="text-indigo-600 dark:text-indigo-400 hover:underline">Contacts</a> page for upcoming events and how to get involved.
          </p>
        </div>
      </section>
    </Container>
  );
}
