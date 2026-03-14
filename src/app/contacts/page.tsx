"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactsPage() {
  const { t } = useLanguage();
  return (
    <Container>
      <section className="pt-12 pb-16">
        <SectionTitle
          preTitle={t.contacts.preTitle}
          title={t.contacts.title}
          align="left"
        >
          {t.contacts.subtitle}
        </SectionTitle>
        <div className="max-w-2xl mt-8 space-y-6">
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-trueGray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t.contacts.address}</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Scuola Italiana Baku<br />
              {t.contacts.addressLine}
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-trueGray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t.contacts.phoneEmail}</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Email: info@scuolaitalianabaku.az
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-trueGray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t.contacts.openingHours}</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              {t.contacts.openingHoursDetail}<br />
              {t.contacts.closedSundays}
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-trueGray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t.contacts.social}</h3>
            <div className="mt-2 flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/scuola_italiana_baku/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-italia-600 dark:text-italia-400 hover:underline"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/></svg>
                Instagram
              </a>
              <a
                href="https://t.me/scuola_italiana_baku"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-italia-600 dark:text-italia-400 hover:underline"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Telegram
              </a>
              <a
                href="https://wa.me/994501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-italia-600 dark:text-italia-400 hover:underline"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
