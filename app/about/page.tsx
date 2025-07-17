"use client";

import { useState, useEffect } from "react";
import {
  Users,
  TrendingDown,
  Zap,
  Eye,
  ArrowRight,
  Sparkles,
  Target,
  Globe,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden px-4 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute left-10 top-20 size-32 animate-pulse rounded-full bg-[#14DBD8]/20 blur-xl"></div>
        <div className="absolute bottom-40 right-20 size-48 animate-pulse rounded-full bg-purple-500/10 blur-2xl delay-1000"></div>
        <div className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#14DBD8]/5 to-purple-500/5 blur-3xl"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-spin-slow absolute right-1/4 top-32 size-4 rotate-45 border border-[#14DBD8]/30"></div>
        {/* Left Geometry Shapes */}
        <div className="animate-spin-slow absolute right-12 top-80 size-4 rotate-45 border border-[#14DBD8]/30"></div>
        <div className="animate-spin-slow absolute right-12 top-[640px] size-4 rotate-45 border border-[#14DBD8]/30"></div>
        <div className="animate-spin-slow absolute right-12 top-[1590px] size-4 rotate-45 border border-[#14DBD8]/30"></div>
        <div className="animate-spin-slow absolute right-12 top-[2040px] size-4 rotate-45 border border-[#14DBD8]/30"></div>
        {/* Right Geometry Shapes */}
        <div className="animate-spin-slow absolute left-12 top-80 size-4 rotate-45 border border-[#14DBD8]/30"></div>
        <div className="animate-spin-slow absolute left-12 top-[640px] size-4 rotate-45 border border-[#14DBD8]/30"></div>
        <div className="animate-spin-slow absolute left-12 top-[1590px] size-4 rotate-45 border border-[#14DBD8]/30"></div>
        <div className="animate-spin-slow absolute left-12 top-[2040px] size-4 rotate-45 border border-[#14DBD8]/30"></div>

        <div className="animate-bounce-slow absolute bottom-1/3 left-1/4 size-6 rotate-12 border-4 border-purple-400/30"></div>
        <div className="absolute right-10 top-1/2 size-8 rotate-45 bg-gradient-to-r from-[#14DBD8]/20 to-transparent"></div>
        <div className="absolute left-10 top-1/2 size-8 rotate-45 bg-gradient-to-r from-[#14DBD8]/20 to-transparent"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="mb-4 bg-gradient-to-r from-slate-800 via-[#14DBD8] to-purple-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:via-[#14DBD8] dark:to-purple-400 md:text-6xl">
            About HexaHype
          </h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[#14DBD8] to-purple-500"></div>
        </div>

        {/* Team Intro */}
        <div
          className={`mb-20 transition-all delay-200 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg dark:border-slate-700/20 dark:bg-slate-800/10">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-xl bg-gradient-to-r from-[#14DBD8] to-purple-500 p-3">
                <Users className="size-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
                Innovation Meets Artistry
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              HexaHype represents the{" "}
              <span className="font-semibold text-[#14DBD8]">
                next generation
              </span>{" "}
              of creative technology. We&apos;re a youth-driven collective that
              bridges the gap between traditional Rwandan artistry and
              cutting-edge digital platforms. Our mission:{" "}
              <span className="font-semibold text-purple-500">
                empower young creators
              </span>{" "}
              through innovative tech solutions.
            </p>
          </div>
        </div>

        {/* Problem Statement */}
        <div
          className={`mb-20 transition-all delay-300 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg dark:border-slate-700/20 dark:bg-slate-800/10">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-xl bg-gradient-to-r from-red-500 to-orange-500 p-3">
                <TrendingDown className="size-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
                The Challenge We Face
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-r from-[#14DBD8] to-purple-500">
                    <span className="text-xs font-bold text-white">21.97%</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-white">
                      Youth Unemployment
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Rwanda 2023
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  A critical gap exists between education and practical skills,
                  particularly affecting high-school graduates in Kigali and
                  growing regions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Target className="size-5 text-[#14DBD8]" />
                  <span className="text-slate-700 dark:text-slate-300">
                    Skills-to-market disconnect
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="size-5 text-[#14DBD8]" />
                  <span className="text-slate-700 dark:text-slate-300">
                    Limited creative monetization
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="size-5 text-[#14DBD8]" />
                  <span className="text-slate-700 dark:text-slate-300">
                    Economic hardship risk
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Overview */}
        <div
          className={`mb-20 transition-all delay-500 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg dark:border-slate-700/20 dark:bg-slate-800/10">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-xl bg-gradient-to-r from-[#14DBD8] to-purple-500 p-3">
                <Zap className="size-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
                Revolutionary Solution
              </h2>
            </div>

            <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Our{" "}
              <span className="font-semibold text-[#14DBD8]">
                decentralized art-selling platform
              </span>{" "}
              transforms how Rwandan youth monetize their creativity through
              secure, accessible technology.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#14DBD8]/20 bg-gradient-to-br from-[#14DBD8]/10 to-purple-500/10 p-6">
                <Globe className="mb-3 size-8 text-[#14DBD8]" />
                <h3 className="mb-2 font-semibold text-slate-800 dark:text-white">
                  Handcrafted Commissions
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Direct artist-to-buyer connections for authentic Rwandan art
                </p>
              </div>

              <div className="rounded-2xl border border-[#14DBD8]/20 bg-gradient-to-br from-[#14DBD8]/10 to-purple-500/10 p-6">
                <Shield className="mb-3 size-8 text-[#14DBD8]" />
                <h3 className="mb-2 font-semibold text-slate-800 dark:text-white">
                  Secure Payments
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Mobile Money & card integration with verified transactions
                </p>
              </div>

              <div className="rounded-2xl border border-[#14DBD8]/20 bg-gradient-to-br from-[#14DBD8]/10 to-purple-500/10 p-6">
                <Sparkles className="mb-3 size-8 text-[#14DBD8]" />
                <h3 className="mb-2 font-semibold text-slate-800 dark:text-white">
                  Quality Verified
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Profiles, ratings, and community-driven quality assurance
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-[#14DBD8]/20 bg-gradient-to-r from-[#14DBD8]/5 to-purple-500/5 p-4">
              <p className="text-center text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-[#14DBD8]">
                  Powered by collaboration:
                </span>{" "}
                Local developers, NGOs, cooperatives, and schools
              </p>
            </div>
          </div>
        </div>

        {/* Niyo Art Center Visit */}
        <div
          className={`mb-20 transition-all delay-700 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg dark:border-slate-700/20 dark:bg-slate-800/10">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-3">
                <Eye className="size-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
                Real Voices, Real Impact
              </h2>
            </div>

            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <p className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  Our journey began at{" "}
                  <Link href={"https://niyoartscenter.com/"} className="font-semibold text-purple-500">
                    Niyo Art Center
                  </Link>
                  , where we conducted in-depth interviews with emerging
                  artists. Their stories became our blueprint.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-2 size-2 rounded-full bg-[#14DBD8]"></div>
                    <p className="text-slate-700 dark:text-slate-300">
                      Captured authentic challenges and aspirations
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-2 size-2 rounded-full bg-[#14DBD8]"></div>
                    <p className="text-slate-700 dark:text-slate-300">
                      Identified market gaps and opportunities
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-2 size-2 rounded-full bg-[#14DBD8]"></div>
                    <p className="text-slate-700 dark:text-slate-300">
                      Built solutions from grassroots insights
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex h-64 w-full items-center justify-center rounded-2xl border border-[#14DBD8]/30 bg-gradient-to-br from-[#14DBD8]/20 to-purple-500/20">
                  <div className="text-center">
                    <Sparkles className="mx-auto mb-4 size-12 text-[#14DBD8]" />
                    <p className="font-medium text-slate-600 dark:text-slate-400">
                      Inspiration in Action
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                      Youth voices shaping the future
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all delay-1000 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="rounded-3xl border border-[#14DBD8]/30 bg-gradient-to-r from-[#14DBD8]/10 to-purple-500/10 p-12 shadow-2xl backdrop-blur-lg">
            <h2 className="mb-6 text-4xl font-bold text-slate-800 dark:text-white">
              Ready to Shape the Future?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-600 dark:text-slate-300">
              Join a movement that&apos;s transforming creative expression into
              economic opportunity
            </p>
            <div className="flex items-center justify-center">
              <Link
                href={"https://linkreative.netlify.app"}
                className="group relative flex w-80 justify-center rounded-full bg-gradient-to-r from-[#14DBD8] to-purple-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  Join the Movement
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#14DBD8] to-purple-500 opacity-30 blur transition-opacity group-hover:opacity-50"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
