import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function CafePage() {
  return (
    <Container>
      <section className="pt-12 pb-16">
        <SectionTitle
          preTitle="Caffè"
          title="Our Italian Café"
          align="left"
        >
          A taste of Italy in every cup—espresso, pastries, and conversation.
        </SectionTitle>
        <div className="max-w-3xl mt-8 space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>
            Our café is the heart of Scuola Italiana. Here you can enjoy authentic Italian coffee—espresso, cappuccino, macchiato—and freshly baked pastries like cornetti and biscotti. It&apos;s the perfect place to practice your Italian in an informal setting or simply relax between lessons.
          </p>
          <p>
            We host conversation tables and cultural events so you can meet other students and native speakers. Whether you&apos;re a beginner or advanced learner, you&apos;re always welcome.
          </p>
          <p>
            Opening hours and menu details are available on our <a href="/contacts" className="text-indigo-600 dark:text-indigo-400 hover:underline">Contacts</a> page. Vi aspettiamo!
          </p>
        </div>
      </section>
    </Container>
  );
}
