import React from "react";
import ChromaGrid from "./ui/ChromaGrid";
import { items } from "@/lib/CardItems";
import Iridescence from "./ui/IredeScene";

const About = () => {
  return (
    <section className="">
      <div className="h-full relative">
        <h1 
        className="flex justify-center pt-5 text-7xl font-bold backdrop-grayscale backdrop-brightness-[.78] bg-[rgba(0,0,0,0.001)]"
        style={{
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
        <div className="absolute -z-10 inset-0 dark:hidden">
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
