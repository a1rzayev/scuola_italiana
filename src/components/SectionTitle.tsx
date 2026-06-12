"use client";
import React from "react";
import { Container } from "@/components/Container";
import { RevealOnScroll } from "@/components/RevealOnScroll";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  variant?: "gradient" | "plain";
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  const isCenter = props.align !== "left";
  return (
    <Container
      className={`flex w-full flex-col pt-12 pb-2 lg:pt-16 ${
        isCenter ? "items-center justify-center text-center" : ""
      }`}
    >
      <RevealOnScroll delay={0}>
        {props.preTitle && (
          <div className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest text-italia-700 dark:text-italia-400 uppercase mb-3 bg-italia-500/10 dark:bg-italia-500/15 rounded-full px-4 py-1`}>
            <span className="w-2 h-2 rounded-full bg-italia-500 inline-block flex-shrink-0" aria-hidden="true" />
            {props.preTitle}
          </div>
        )}

        {props.title && (
          <div>
            <h2
              className={`max-w-2xl text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl ${
                props.variant === "gradient"
                  ? "gradient-text"
                  : "text-gray-800 dark:text-white"
              }`}
            >
              {props.title}
            </h2>
            <div
              className={`mt-3 h-1 w-12 bg-italia-500 rounded-full transition-all duration-700 ease-[var(--ease-smooth)] ${
                isCenter ? "mx-auto" : "mx-0"
              }`}
            />
          </div>
        )}

        {props.children && (
          <p className="max-w-2xl mt-4 text-base leading-relaxed text-gray-500 lg:text-lg dark:text-gray-400">
            {props.children}
          </p>
        )}
      </RevealOnScroll>
    </Container>
  );
};
