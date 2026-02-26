import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function AboutUsPage() {
  return (
    <Container>
      <section className="pt-12 pb-16">
        <SectionTitle
          preTitle="Chi siamo"
          title="About Scuola Italiana"
          align="left"
        >
          We are a school and cultural center dedicated to the Italian language and culture.
        </SectionTitle>
        <div className="max-w-3xl mt-8 space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>
            Scuola Italiana was founded to bring authentic Italian language education and culture to our community. Our teachers are native or near-native speakers with experience in teaching Italian as a foreign language.
          </p>
          <p>
            We offer group and private courses for all levels—from absolute beginners to advanced—as well as a cozy café where you can practice Italian in a relaxed setting and enjoy Italian coffee and pastries.
          </p>
          <p>
            Our mission is to make learning Italian enjoyable and effective while sharing the richness of Italian culture, from art and history to food and traditions.
          </p>
        </div>
      </section>
    </Container>
  );
}
