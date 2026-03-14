import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function ServicesPage() {
  return (
    <Container>
      <section className="pt-12 pb-16">
        <SectionTitle
          preTitle="Servizi"
          title="Our Services"
        >
          Discover what Scuola Italiana Baku offers — Italian language courses and an authentic Italian café.
        </SectionTitle>
        <div className="grid gap-8 mt-12 md:grid-cols-2">
          <Link
            href="/services/cafe"
            className="block p-8 transition rounded-xl bg-gray-50 dark:bg-trueGray-800 hover:bg-italia-50 dark:hover:bg-italia-900/20 border border-gray-100 dark:border-trueGray-700"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Café</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Our Italian café in Baku offers authentic espresso, pastries, and a welcoming space to practice Italian and meet fellow learners.
            </p>
            <span className="inline-flex items-center mt-4 text-italia-600 dark:text-italia-400 font-medium">
              Visit the café →
            </span>
          </Link>
          <Link
            href="/services/course"
            className="block p-8 transition rounded-xl bg-gray-50 dark:bg-trueGray-800 hover:bg-italia-50 dark:hover:bg-italia-900/20 border border-gray-100 dark:border-trueGray-700"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Courses</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Italian language courses for every level — beginner to advanced. Group classes and private lessons with qualified native-speaking teachers.
            </p>
            <span className="inline-flex items-center mt-4 text-italia-600 dark:text-italia-400 font-medium">
              View courses →
            </span>
          </Link>
        </div>
      </section>
    </Container>
  );
}
