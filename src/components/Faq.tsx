"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-italia-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-italia-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "What levels do you offer?",
    answer: "We offer courses from absolute beginner (A1) to advanced (C2), following the Common European Framework of Reference (CEFR).",
  },
  {
    question: "Are the teachers native Italian speakers?",
    answer: "Yes, our teachers are native or near-native Italian speakers with professional qualifications and experience in teaching Italian as a foreign language.",
  },
  {
    question: "Can I prepare for CILS or CELI exams?",
    answer: "Absolutely. We offer dedicated exam preparation courses for CILS and CELI certifications, which are internationally recognized Italian proficiency exams.",
  },
  {
    question: "Do you offer private lessons?",
    answer: "Yes, we offer both group courses and private one-on-one lessons. Private lessons can be scheduled flexibly to suit your availability.",
  },
  {
    question: "How can I enroll?",
    answer: "You can contact us via Instagram, Telegram, WhatsApp, or visit our Contacts page. We'll help you find the right course for your level and goals.",
  },
];
