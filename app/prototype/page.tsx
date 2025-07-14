import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Palette, Users, Zap, Target, Rocket } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div className="min-h-screen  dark:bg-gradient-to-br dark:from-slate-900 dark:to-[#14DBD8]/20">
      <section className="relative px-4 py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl text-center">
          <Badge className="mb-6 border-cyan-500 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-slate-900 dark:text-cyan-300">
            🚀 Prototype Project
          </Badge>
          <h1 className="mb-6 bg-gradient-to-r from-cyan-300 via-cyan-200 to-purple-300 bg-clip-text text-5xl font-bold leading-tight text-transparent dark:from-white lg:text-7xl">
            Welcome to the Future of
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Creative Expression
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-slate-900/50 dark:text-gray-300">
            Hexahype is where art meets technology, where young creators
            transform ideas into reality. Join our community of visionary
            artists and designers shaping tomorrow&apos;s creative landscape.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={
                "https://b2f427629ff147428e9b0c0901871d98-main.projects.builder.my/"
              }
              target="_blank"
              className="flex h-11 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-cyan-800 px-8 py-3 text-lg text-white hover:from-cyan-600 hover:to-[#14DBD8] dark:to-[#14DBD8]/20"
            >
              Join the Movement
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="bg-black/50 px-4 py-20 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 bg-gradient-to-r from-slate-800 to-slate-500 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-gray-300">
              Unleash Your Creative Potential
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-800 dark:text-gray-400/50">
              Discover the tools and community that will accelerate your
              artistic journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                  <Palette className="size-6 text-white" />
                </div>
                <CardTitle className="text-white">Digital Art Studio</CardTitle>
                <CardDescription className="text-gray-400">
                  Access cutting-edge digital tools and AI-powered creative
                  assistants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Zap className="mr-2 size-4 text-cyan-400" />
                    AI-enhanced design tools
                  </li>
                  <li className="flex items-center">
                    <Zap className="mr-2 size-4 text-cyan-400" />
                    Real-time collaboration
                  </li>
                  <li className="flex items-center">
                    <Zap className="mr-2 size-4 text-cyan-400" />
                    Cloud-based workspace
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                  <Users className="size-6 text-white" />
                </div>
                <CardTitle className="text-white">Creative Community</CardTitle>
                <CardDescription className="text-gray-400">
                  Connect with like-minded creators and mentors worldwide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Zap className="mr-2 size-4 text-purple-400" />
                    Global creator network
                  </li>
                  <li className="flex items-center">
                    <Zap className="mr-2 size-4 text-purple-400" />
                    Mentorship programs
                  </li>
                  <li className="flex items-center">
                    <Zap className="mr-2 size-4 text-purple-400" />
                    Collaborative projects
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-500">
                  <Target className="size-6 text-white" />
                </div>
                <CardTitle className="text-white">Growth Pathways</CardTitle>
                <CardDescription className="text-gray-400">
                  Structured learning paths to develop your skills and career
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Zap className="mr-2 size-4 text-green-400" />
                    Skill assessments
                  </li>
                  <li className="flex items-center">
                    <Zap className="mr-2 size-4 text-green-400" />
                    Portfolio building
                  </li>
                  <li className="flex items-center">
                    <Zap className="mr-2 size-4 text-green-400" />
                    Career opportunities
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        id="join"
        className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 px-4 py-20 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <Rocket className="mx-auto mb-6 size-16 text-cyan-400" />
            <h2 className="mb-4 bg-gradient-to-r from-slate-800 to-slate-500 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-gray-300">
              Ready to Shape the Future?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
              Join thousands of young creators who are already building
              tomorrow&apos;s creative landscape. Your journey starts with a
              single click.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4">
            <Link
              href={
                "https://b2f427629ff147428e9b0c0901871d98-main.projects.builder.my/"
              }
              target="_blank"
              className="flex h-12 w-[350px] items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-cyan-800 px-8 py-4 text-xl text-white hover:from-cyan-600 hover:to-[#14DBD8] dark:to-[#14DBD8]/20"
            >
              Start Your Journey
              <ArrowRight className="ml-2 size-6" />
            </Link>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Free to join • No credit card required • Start creating
              immediately
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
