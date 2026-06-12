import { REGISTRATION_FORM_URL } from "@/lib/registrationForm";
import type { Translations } from "@/context/LanguageContext";

export interface SearchItem {
  title: string;
  href: string;
  description: string;
  keywords: string[];
}

export function buildSearchIndex(t: Translations): SearchItem[] {
  return [
    {
      title: t.hero.registrationForm,
      href: REGISTRATION_FORM_URL,
      description: t.search.registrationDesc,
      keywords: ["register", "registration", "form", "enroll", "inquiry", "google", "qeydiyyat", "sorğu", "iscrizione", "modulo", "kurs", "corso"],
    },
    {
      title: t.nav.home,
      href: "/",
      description: t.search.homeDesc,
      keywords: ["home", "ana", "scuola", "italiana", "italian", "courses", "baku", "main", "əsas", "başlanğıc"],
    },
    {
      title: t.nav.aboutUs,
      href: "/about-us",
      description: t.search.aboutDesc,
      keywords: ["about", "us", "chi siamo", "mission", "team", "story", "baku", "haqqımızda", "məktəb"],
    },
    {
      title: t.nav.services,
      href: "/services",
      description: t.search.servicesDesc,
      keywords: ["services", "servizi", "offer", "xidmətlər", "nə təklif"],
    },
    {
      title: t.nav.cafe,
      href: "/services/cafe",
      description: t.search.cafeDesc,
      keywords: ["cafe", "caffè", "coffee", "pastries", "espresso", "baku", "kafe", "qəhvə", "kapuçino"],
    },
    {
      title: t.nav.course,
      href: "/services/course",
      description: t.search.coursesDesc,
      keywords: ["course", "courses", "corsi", "language", "learn italian", "lessons", "CILS", "CELI", "PLIDA", "kurs", "dərs", "öyrən"],
    },
    {
      title: t.nav.linguaItaliana,
      href: "/lingua-italiana",
      description: t.search.linguaDesc,
      keywords: ["lingua", "italiana", "language", "grammar", "vocabulary", "italian", "dil", "qrammatika", "lüğət"],
    },
    {
      title: t.nav.culturaItaliana,
      href: "/cultura-italiana",
      description: t.search.culturaDesc,
      keywords: ["cultura", "culture", "italian", "art", "history", "traditions", "events", "mədəniyyət", "sənət", "tarix", "ənənə"],
    },
    {
      title: t.nav.contacts,
      href: "/contacts",
      description: t.search.contactsDesc,
      keywords: ["contacts", "contatti", "contact", "address", "email", "instagram", "əlaqə", "ünvan", "saatlar"],
    },
  ];
}
