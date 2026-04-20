import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

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
  return (
    <Container className="flex flex-wrap py-8 lg:gap-12 lg:flex-nowrap items-center">
      {/* Image column */}
      <div
        className={`flex items-center justify-center w-full lg:w-1/2 mb-8 lg:mb-0 ${
          props.imgPos === "right" ? "lg:order-1" : ""
        }`}
      >
        <Image
          src={data.image}
          width={500}
          height={500}
          alt={data.title}
          className="object-cover rounded-2xl w-full max-w-md"
          placeholder="blur"
          blurDataURL={data.image.src}
        />
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
              <Benefit key={index} title={item.title} icon={item.icon}>
                {item.desc}
              </Benefit>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

function Benefit(props: any) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="flex items-center justify-center flex-shrink-0 mt-0.5 bg-italia-500 dark:bg-italia-600 rounded-xl w-10 h-10 shadow-sm transition-transform duration-200 group-hover:scale-105">
        {React.cloneElement(props.icon, {
          className: "w-5 h-5 text-white",
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
