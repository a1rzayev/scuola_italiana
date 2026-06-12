"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const delayMap: Record<number, string> = {
  0: "",
  1: "animation-delay-100",
  2: "animation-delay-200",
  3: "animation-delay-300",
  4: "animation-delay-400",
};

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  direction?: "up" | "left" | "right";
  className?: string;
}

export function RevealOnScroll({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: RevealOnScrollProps) {
  const { ref, inView } = useInView();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const hiddenTransform =
    direction === "left"
      ? "translate-x-8"
      : direction === "right"
      ? "-translate-x-8"
      : "translate-y-8";

  const visibleClass = "opacity-100 translate-x-0 translate-y-0";
  const hiddenClass = `opacity-0 ${hiddenTransform}`;
  const delayClass = delayMap[delay] ?? "";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[var(--ease-smooth)] ${
        inView ? visibleClass : hiddenClass
      } ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
