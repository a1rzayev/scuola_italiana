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
          Art, history, traditions — discover Italian culture in Baku.
        </SectionTitle>
        <div className="max-w-3xl mt-8 space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>
            Italian culture has shaped Western art, music, cuisine, fashion, and design for centuries. From the Renaissance to contemporary cinema and food, Italy continues to inspire the world. At Scuola Italiana Baku we believe that understanding culture deepens your command of the language and makes learning more rewarding.
          </p>
          <p>
            We regularly organize cultural events and workshops in Baku: Italian film screenings, cooking sessions, talks on art and history, and celebrations of Italian holidays and traditions. These activities are open to our students and the wider Baku community.
          </p>
          <p>
            Join us to explore la dolce vita — the sweet life — through language, food, and culture. Check our <a href="/contacts" className="text-italia-600 dark:text-italia-400 hover:underline">Contacts</a> page or follow us on <a href="https://www.instagram.com/scuola_italiana_baku/" target="_blank" rel="noopener noreferrer" className="text-italia-600 dark:text-italia-400 hover:underline">Instagram</a> for upcoming events.
          </p>
        </div>
      </section>
    </Container>
  );
}
