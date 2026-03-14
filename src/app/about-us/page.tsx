import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function AboutUsPage() {
  return (
    <Container>
      <section className="pt-12 pb-16">
        <SectionTitle
          preTitle="Chi siamo"
          title="About Scuola Italiana Baku"
          align="left"
        >
          We are Baku&apos;s Italian language school and cultural center, dedicated to bringing authentic Italian education and culture to Azerbaijan.
        </SectionTitle>
        <div className="max-w-3xl mt-8 space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>
            Scuola Italiana Baku was founded to bring authentic Italian language education and culture to Baku, Azerbaijan. Our teachers are native or near-native Italian speakers with professional experience in teaching Italian as a foreign language.
          </p>
          <p>
            We offer group and private courses for all levels — from absolute beginners (A1) to advanced (C2) — as well as a cozy Italian café where you can practice your Italian in a relaxed setting while enjoying authentic Italian coffee and pastries.
          </p>
          <p>
            Our mission is to make learning Italian enjoyable and effective while sharing the richness of Italian culture — from art, music, and cinema to food and traditions — with the Baku community.
          </p>
          <p>
            Whether you want to study or work in Italy, prepare for CILS/CELI exams, or simply fall in love with the language, Scuola Italiana Baku is your home for everything Italian in Azerbaijan.
          </p>
        </div>
      </section>
    </Container>
  );
}
