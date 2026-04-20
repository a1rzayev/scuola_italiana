import React from "react";
import { Container } from "@/components/Container";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`flex w-full flex-col pt-12 pb-2 lg:pt-16 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.preTitle && (
        <div className="text-xs font-bold tracking-widest text-italia-600 dark:text-italia-400 uppercase mb-3">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl mt-4 text-base leading-relaxed text-gray-500 lg:text-lg dark:text-gray-400">
          {props.children}
        </p>
      )}
    </Container>
  );
};
