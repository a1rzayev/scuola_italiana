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
    description: "Scuola Italiana Baku — Italian courses, culture, and café in Baku",
    keywords: ["home", "scuola", "italiana", "italian", "courses", "baku", "main"],
  },
  {
    title: "About Us",
    href: "/about-us",
    description: "Learn about Scuola Italiana Baku, our mission and team",
    keywords: ["about", "us", "chi siamo", "mission", "team", "story", "baku"],
  },
  {
    title: "Services",
    href: "/services",
    description: "Our services: Italian courses and café in Baku",
    keywords: ["services", "servizi", "offer", "what we do"],
  },
  {
    title: "Café",
    href: "/services/cafe",
    description: "Italian café in Baku — espresso, pastries, and authentic atmosphere",
    keywords: ["cafe", "caffè", "coffee", "pastries", "bar", "italian café", "baku"],
  },
  {
    title: "Courses",
    href: "/services/course",
    description: "Italian language courses in Baku for all levels A1–C2",
    keywords: ["course", "courses", "corsi", "language", "learn italian", "lessons", "CILS", "CELI"],
  },
  {
    title: "Lingua Italiana",
    href: "/lingua-italiana",
    description: "The Italian language — grammar, vocabulary, and why learn it",
    keywords: ["lingua", "italiana", "language", "grammar", "vocabulary", "italian"],
  },
  {
    title: "Cultura Italiana",
    href: "/cultura-italiana",
    description: "Italian culture — art, history, traditions, and events in Baku",
    keywords: ["cultura", "culture", "italian", "art", "history", "traditions", "events"],
  },
  {
    title: "Contacts",
    href: "/contacts",
    description: "Get in touch — address, social media, email",
    keywords: ["contacts", "contatti", "contact", "address", "email", "phone", "instagram", "telegram", "whatsapp"],
  },
];
