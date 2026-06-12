"use client";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { RevealOnScroll } from "@/components/RevealOnScroll";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    title: string;
    desc: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}

export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  const bulletDir = props.imgPos === "right" ? "right" : "left";
  return (
    <Container className="flex flex-wrap py-8 lg:gap-12 lg:flex-nowrap items-center">
      {/* Image column */}
      <div
        className={`flex items-center justify-center w-full lg:w-1/2 mb-8 lg:mb-0 ${
          props.imgPos === "right" ? "lg:order-1" : ""
        }`}
      >
        <div className="relative overflow-hidden rounded-2xl w-full max-w-md group">
          <Image
            src={data.image}
            width={500}
            height={500}
            alt={data.title}
            className="object-cover w-full transition-transform duration-500 ease-[var(--ease-smooth)] group-hover:scale-[1.03]"
            placeholder="blur"
            blurDataURL={data.image.src}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-italia-900/40 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Text column */}
      <div
        className={`flex flex-wrap items-center w-full lg:w-1/2 ${
          props.imgPos === "right" ? "lg:justify-end" : ""
        }`}
      >
        <div>
          <h3 className="max-w-xl text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl dark:text-white">
            {data.title}
          </h3>

          <p className="max-w-xl mt-4 text-base leading-relaxed text-gray-500 lg:text-lg dark:text-gray-400">
            {data.desc}
          </p>

          <div className="mt-6 space-y-6">
            {data.bullets.map((item, index) => (
              <RevealOnScroll key={index} direction={bulletDir} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <Benefit title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

function Benefit(props: any) {
  return (
    <div className="flex items-start gap-4 group cursor-default">
      <div className="flex items-center justify-center flex-shrink-0 mt-0.5 bg-italia-500/10 dark:bg-italia-600/20 rounded-full p-2 w-10 h-10 transition-all duration-200 group-hover:bg-italia-500 group-hover:scale-105">
        {React.cloneElement(props.icon, {
          className: "w-5 h-5 text-italia-600 dark:text-italia-400 transition-colors duration-200 group-hover:text-white",
        })}
      </div>
      <div>
        <h4 className="text-base font-semibold text-gray-800 dark:text-gray-100">
          {props.title}
        </h4>
        <p className="mt-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          {props.children}
        </p>
      </div>
    </div>
  );
}
