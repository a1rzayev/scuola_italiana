import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function CoursePage() {
  return (
    <Container>
      <section className="pt-12 pb-16">
        <SectionTitle
          preTitle="Corsi"
          title="Italian Language Courses in Baku"
          align="left"
        >
          From A1 to C2 — structured courses and flexible options for every goal.
        </SectionTitle>
        <div className="max-w-3xl mt-8 space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>
            Scuola Italiana Baku offers Italian language courses aligned with the Common European Framework (CEFR). You can choose group courses for a social learning experience or private lessons for a personalized pace. All our teachers are qualified native Italian speakers who use communicative methods so you start using the language from day one.
          </p>
          <p>
            Course types include: general Italian (all levels A1–C2), conversation practice, exam preparation (CILS, CELI), and business Italian. Schedules are designed to fit working adults and students alike.
          </p>
          <p>
            For more information on levels, schedules, and enrollment, please visit our <a href="/contacts" className="text-italia-600 dark:text-italia-400 hover:underline">Contacts</a> page, message us on <a href="https://www.instagram.com/scuola_italiana_baku/" target="_blank" rel="noopener noreferrer" className="text-italia-600 dark:text-italia-400 hover:underline">Instagram</a>, or drop by the school.
          </p>
        </div>
      </section>
    </Container>
  );
}
