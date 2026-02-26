import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Cta } from "@/components/Cta";
import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Scuola Italiana"
        title="Italian courses, culture & café"
      >
        Learn Italian with qualified teachers, practice in our café, and discover Italian culture. Courses for all levels and a welcoming community.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="What we offer"
        title="Courses & Services"
      >
        Choose from group or private Italian lessons and enjoy our Italian café.
      </SectionTitle>

      <div className="grid gap-6 mt-8 md:grid-cols-2">
        <Link
          href="/services/course"
          className="block p-6 transition rounded-xl bg-gray-50 dark:bg-trueGray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 border border-gray-100 dark:border-trueGray-700"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Italian Courses</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            From beginner to advanced. Group and private lessons with native-speaking teachers.
          </p>
          <span className="inline-block mt-3 text-indigo-600 dark:text-indigo-400 font-medium">View courses →</span>
        </Link>
        <Link
          href="/services/cafe"
          className="block p-6 transition rounded-xl bg-gray-50 dark:bg-trueGray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 border border-gray-100 dark:border-trueGray-700"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Our Café</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Authentic Italian coffee, pastries, and a space to practice Italian and meet others.
          </p>
          <span className="inline-block mt-3 text-indigo-600 dark:text-indigo-400 font-medium">Visit the café →</span>
        </Link>
      </div>

      <SectionTitle preTitle="Explore" title="Lingua & Cultura">
        Dive into the Italian language and culture—grammar, vocabulary, art, and traditions.
      </SectionTitle>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <Link
          href="/lingua-italiana"
          className="px-6 py-3 font-medium text-white rounded-md bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          Lingua Italiana
        </Link>
        <Link
          href="/cultura-italiana"
          className="px-6 py-3 font-medium text-indigo-600 border border-indigo-600 rounded-md dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
        >
          Cultura Italiana
        </Link>
      </div>

      <Cta />
    </Container>
  );
}
