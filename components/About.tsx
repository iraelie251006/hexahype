import React from "react";
import ChromaGrid from "./ui/ChromaGrid";
import { items } from "@/lib/CardItems";
import Iridescence from "./ui/IredeScene";

const About = () => {
  return (
    <section className="bg-[#F8F8FF] dark:bg-[#14DBD8]/20">
      <div className="relative h-full">
        <h1
          className="flex items-center justify-center bg-[rgba(0,0,0,0.001)] pt-5 text-7xl font-bold backdrop-brightness-[.78] backdrop-grayscale max-sm:text-6xl"
          style={{
            backdropFilter: "grayscale(0) brightness(1)",
            WebkitBackdropFilter: "grayscale(0) brightness(1)",
            maskImage:
              "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22) 45%,rgba(0,0,0,0.35) 60%,rgba(0,0,0,0.50) 75%,rgba(0,0,0,0.68) 88%,white 100%)",
            WebkitMaskImage:
              "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22) 45%,rgba(0,0,0,0.35) 60%,rgba(0,0,0,0.50) 75%,rgba(0,0,0,0.68) 88%,white 100%)",
          }}
        >
          Team cook
        </h1>
        <ChromaGrid
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
        <div className="absolute inset-0 -z-10 hidden dark:hidden">
          <Iridescence
            color={[1, 1, 1]}
            mouseReact={false}
            amplitude={0.1}
            speed={1.0}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
