"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const resizeObserver = new ResizeObserver(() => {
        const rect = ref.current!.getBoundingClientRect();
        setHeight(rect.height);
      });

      resizeObserver.observe(ref.current);

      return () => resizeObserver.disconnect();
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white font-sans dark:bg-neutral-950 md:px-10"
      ref={containerRef}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-20 md:px-8 lg:px-10">
        <h2 className="mb-4 max-w-4xl text-3xl font-semibold tracking-tighter text-black dark:text-white md:text-4xl">
          Changelog from Our Journey
        </h2>
        <p className="max-w-sm text-center text-sm text-neutral-700 dark:text-neutral-300 md:text-base">
          We&apos;ve been working together for the past 2 months as Hexahype.
          Here&apos;s a timeline of our journey.
        </p>
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-center pt-10 md:gap-10 md:pt-40"
          >
            <div className="relative z-40 flex max-w-xs flex-col items-center md:hidden md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex size-10 items-center justify-center rounded-full bg-black md:left-3">
                <div className="size-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
              </div>
              <h3 className="hidden border text-xl font-bold text-neutral-500 dark:text-neutral-500 md:block md:pl-20 md:text-5xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4 ">
              <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 dark:text-neutral-500 md:hidden">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 w-[4px] -translate-x-1/2 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700 max-md:left-8  md:left-1/2 "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[4px] rounded-full bg-gradient-to-t from-purple-500 from-0% via-blue-500 via-10% to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
