"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";
import { REGISTRATION_FORM_URL } from "@/lib/registrationForm";

export default function ContactsPage() {
  const { t } = useLanguage();
  return (
    <>
      <SectionTitle
        preTitle={t.contacts.preTitle}
        title={t.contacts.title}
        align="left"
      >
        {t.contacts.subtitle}
      </SectionTitle>

      <Container className="pb-16">
        <div className="mt-2 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="space-y-4">
          {/* Address */}
          <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-trueGray-800 border border-gray-100 dark:border-trueGray-700">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-9 h-9 rounded-xl bg-italia-50 dark:bg-italia-900/40 flex items-center justify-center">
                <svg className="w-5 h-5 text-italia-600 dark:text-italia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                {t.contacts.address}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Scuola Italiana Baku
                <br />
                {t.contacts.addressLine}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-trueGray-800 border border-gray-100 dark:border-trueGray-700">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-9 h-9 rounded-xl bg-italia-50 dark:bg-italia-900/40 flex items-center justify-center">
                <svg className="w-5 h-5 text-italia-600 dark:text-italia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                {t.contacts.phoneEmail}
              </h3>
              <a
                href="mailto:scuola@litad.az"
                className="mt-1 block text-sm text-italia-600 dark:text-italia-400 hover:text-italia-700 dark:hover:text-italia-300 transition-colors duration-200"
              >
                scuola@litad.az
              </a>
            </div>
          </div>

          {/* Opening hours */}
          <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-trueGray-800 border border-gray-100 dark:border-trueGray-700">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-9 h-9 rounded-xl bg-italia-50 dark:bg-italia-900/40 flex items-center justify-center">
                <svg className="w-5 h-5 text-italia-600 dark:text-italia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                {t.contacts.openingHours}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {t.contacts.openingHoursDetail}
                <br />
                {t.contacts.closedSundays}
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-trueGray-800 border border-gray-100 dark:border-trueGray-700">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-9 h-9 rounded-xl bg-italia-50 dark:bg-italia-900/40 flex items-center justify-center">
                <svg className="w-5 h-5 text-italia-600 dark:text-italia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                {t.contacts.social}
              </h3>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/scuola_italiana_baku/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-italia-600 dark:text-italia-400 hover:text-italia-700 dark:hover:text-italia-300 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
          </div>

          {/* Right column */}
          <div className="space-y-4 lg:sticky lg:top-24 self-start">
            {/* Course registration form */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-italia-50 dark:bg-italia-900/25 border border-italia-200 dark:border-italia-800/50">
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  {t.contacts.registrationTitle}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.contacts.registrationDesc}
                </p>
              </div>
              <a
                href={REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-italia-600 rounded-xl hover:bg-italia-700 dark:bg-italia-500 dark:hover:bg-italia-600 transition-colors duration-200 w-full"
              >
                {t.contacts.registrationButton}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-trueGray-800 border border-gray-100 dark:border-trueGray-700">
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Scuola Italiana Baku
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {t.contacts.openingHours}
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                {t.contacts.openingHoursDetail}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
