export interface SearchItem {
  title: string;
  href: string;
  description: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  {
    title: "Home",
    href: "/",
    description: "Scuola Italiana — Italian courses, culture, and café",
    keywords: ["home", "scuola", "italiana", "italian", "courses", "main"],
  },
  {
    title: "About Us",
    href: "/about-us",
    description: "Learn about Scuola Italiana, our mission and team",
    keywords: ["about", "us", "chi siamo", "mission", "team", "story"],
  },
  {
    title: "Services",
    href: "/services",
    description: "Our services: Italian courses and café",
    keywords: ["services", "servizi", "offer", "what we do"],
  },
  {
    title: "Café",
    href: "/services/cafe",
    description: "Italian café — coffee, pastries, and authentic atmosphere",
    keywords: ["cafe", "caffè", "coffee", "pastries", "bar", "italian café"],
  },
  {
    title: "Courses",
    href: "/services/course",
    description: "Italian language courses for all levels",
    keywords: ["course", "courses", "corsi", "language", "learn italian", "lessons"],
  },
  {
    title: "Lingua Italiana",
    href: "/lingua-italiana",
    description: "The Italian language — grammar, vocabulary, and usage",
    keywords: ["lingua", "italiana", "language", "grammar", "vocabulary", "italian"],
  },
  {
    title: "Cultura Italiana",
    href: "/cultura-italiana",
    description: "Italian culture — art, history, traditions",
    keywords: ["cultura", "culture", "italian", "art", "history", "traditions"],
  },
  {
    title: "Contacts",
    href: "/contacts",
    description: "Get in touch — address, phone, email",
    keywords: ["contacts", "contatti", "contact", "address", "email", "phone"],
  },
];
