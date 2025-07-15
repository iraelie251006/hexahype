"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MissionSection() {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 transition-colors duration-500 dark:from-black dark:via-gray-900 dark:to-black">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute size-1 animate-pulse rounded-full bg-[#14DBD8] opacity-40 dark:bg-[#14DBD8] dark:opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-spin-slow absolute left-1/4 top-1/4 size-64 rounded-full border border-[#14DBD8]/30 dark:border-[#14DBD8]/20" />
        <div className="absolute bottom-1/4 right-1/4 size-48 rotate-45 animate-pulse border border-[#14DBD8]/40 dark:border-[#14DBD8]/30" />
        <div className="animate-bounce-slow absolute right-1/3 top-1/2 size-32 rounded-full bg-[#14DBD8]/20 blur-xl dark:bg-[#14DBD8]/10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Glassmorphism Container */}
        <div className="rounded-3xl border border-[#14DBD8]/30 bg-white/40 p-12 shadow-2xl backdrop-blur-sm transition-all duration-500 dark:border-[#14DBD8]/20 dark:bg-[#14DBD8]/5">
          {/* Mission Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#14DBD8]/50 bg-[#14DBD8]/30 px-4 py-2 dark:border-[#14DBD8]/40 dark:bg-[#14DBD8]/20">
            <Sparkles className="size-4 text-gray-800 dark:text-[#14DBD8]" />
            <span className="text-sm font-medium uppercase tracking-wide text-gray-800 dark:text-[#14DBD8]">
              Our Mission
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="mb-8 text-5xl font-black leading-tight md:text-7xl">
            <span className="bg-gradient-to-r from-[#14DBD8] to-gray-800 bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-[#14DBD8]">
              Turn Your
            </span>
            <br />
            <span className="animate-pulse bg-gradient-to-r from-[#14DBD8] via-gray-800 to-[#14DBD8] bg-clip-text text-transparent dark:from-[#14DBD8] dark:via-white dark:to-[#14DBD8]">
              Passion
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-800 to-[#14DBD8] bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-[#14DBD8]">
              Into Profit
            </span>
          </h2>

          {/* Mission Statement */}
          <div className="mx-auto mb-10 max-w-3xl">
            <p className="text-xl font-light leading-relaxed text-gray-700 dark:text-gray-300 md:text-2xl">
              We empower the next generation to transform their creative talents
              art, music, design into
              <span className="font-medium text-[#14DBD8] dark:text-[#14DBD8]">
                {" "}
                sustainable income streams
              </span>
              . Building creative confidence and business skills so you&apos;re
              not just a job seeker, but the
              <span className="font-medium text-gray-900 dark:text-white">
                {" "}
                creator of your own success
              </span>
              .
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              href={"https://linkreative.netlify.app"}
              className="group relative flex items-center rounded-full bg-gradient-to-r from-[#14DBD8] to-[#14DBD8]/80 px-8 py-4 text-lg font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-[#14DBD8]/90 hover:to-[#14DBD8] hover:shadow-[#14DBD8]/25 dark:text-black"
            >
              Start Your Journey
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="text-sm text-gray-600 dark:text-gray-400">
              Join{" "}
              <span className="font-medium text-[#14DBD8] dark:text-[#14DBD8]">
                10,000+
              </span>{" "}
              young creators
            </div>
          </div>

          {/* Micro CTA */}
          <div className="mt-8 border-t border-[#14DBD8]/30 pt-6 dark:border-[#14DBD8]/20">
            <p className="text-lg font-medium tracking-wide text-[#14DBD8] dark:text-[#14DBD8]">
              Ready to monetize your creativity?{" "}
              <Link
                href={"https://linkreative.netlify.app"}
                target="_blank"
                className="cursor-pointer text-gray-900 underline decoration-[#14DBD8]/50 transition-colors hover:text-[#14DBD8] hover:decoration-[#14DBD8] dark:text-white dark:hover:text-[#14DBD8]"
              >
                Join us.
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-100 to-transparent dark:from-black" />
    </section>
  );
}
