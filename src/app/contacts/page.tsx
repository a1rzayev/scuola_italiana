import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function ContactsPage() {
  return (
    <Container>
      <section className="pt-12 pb-16">
        <SectionTitle
          preTitle="Contatti"
          title="Contacts"
          align="left"
        >
          Get in touch—we&apos;d love to hear from you.
        </SectionTitle>
        <div className="max-w-2xl mt-8 space-y-6">
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-trueGray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Address</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Scuola Italiana<br />
              Via Example 123<br />
              00100 Rome, Italy
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-trueGray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Phone &amp; Email</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Phone: +39 06 123 4567<br />
              Email: info@scuolaitaliana.example
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-trueGray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Opening hours</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              School &amp; Café: Mon–Fri 9:00–19:00, Sat 10:00–14:00<br />
              Closed on Sundays and public holidays.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-trueGray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Social</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Follow us on{" "}
              <a
                href="https://instagram.com/your-instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-italia-600 dark:text-italia-400 hover:underline"
              >
                Instagram
              </a>
              ,{" "}
              <a
                href="https://t.me/your-telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-italia-600 dark:text-italia-400 hover:underline"
              >
                Telegram
              </a>{" "}
              and{" "}
              <a
                href="https://wa.me/your-whatsapp-number"
                target="_blank"
                rel="noopener noreferrer"
                className="text-italia-600 dark:text-italia-400 hover:underline"
              >
                WhatsApp
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
