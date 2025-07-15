"use client";
import React, { useEffect, useState } from "react";
import Beams from "./ui/Beams";
import DotGrid from "./ui/DotGrid";
import LetterGlitch from "./ui/LetterGlitch";
import ShinyText from "./ui/Shine";
import Squares from "./ui/SquareGrid";
import Iridescence from "./ui/IredeScene";
import { useTheme } from "next-themes";
import { SplineScene } from "./ui/splite";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);


  if (!mounted) return null; // avoid flash

  const isDark = resolvedTheme === "dark";
  
  return (
    <main>
      <div className="relative h-screen w-full">
        {isDark ? (
          <Beams
            beamWidth={4.4}
            beamHeight={25}
            beamNumber={44}
            lightColor="#14DBD8"
            speed={10}
            noiseIntensity={0}
            scale={0.2}
            rotation={30}
          />
        ) : (
          <Iridescence
            color={[1, 1, 1]}
            mouseReact={false}
            amplitude={0.1}
            speed={1.0}
          />
        )}

        <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
          <div
            className={`flex h-screen w-full items-center justify-between max-lg:justify-center`}
          >
            <div className="ml-10 flex flex-col items-center justify-center max-lg:ml-0">
            <ShinyText
                text="Hexahype"
                disabled={false}
                speed={2}
                className={`flex justify-start text-7xl font-bold max-md:text-9xl max-sm:text-[80px] md:text-9xl lg:text-9xl`}
              />
              <p
                className={`ml-2 mt-5 flex w-full font-mono text-lg text-slate-800 dark:text-white/60 max-sm:justify-center max-sm:text-[15px]`}
              >
                Powering the Future, One Hype at a Time. <br />
                Shaping Tomorrow with Every Move.
              </p>
            </div>
            {resolvedTheme === "light" ? (
              <div className="relative flex h-screen w-full max-md:hidden">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="h-screen w-full"
                />
              </div>
            ) : (
              <div
                className={`${resolvedTheme === "light" ? "hidden" : "block"} mr-10 flex flex-col gap-5 max-lg:hidden`}
              >
                <div className="flex justify-center">
                  <div className="top-7 size-[214px] rotate-45">
                    <DotGrid
                      dotSize={7}
                      gap={15}
                      baseColor="#ffffff"
                      activeColor="#585555"
                      proximity={50}
                      shockRadius={250}
                      shockStrength={5}
                      resistance={750}
                      returnDuration={1.5}
                    />
                  </div>
                </div>
                <div className="flex gap-20">
                  <div className="top-7 size-[214px] rotate-45">
                    <LetterGlitch
                      glitchSpeed={50}
                      centerVignette={true}
                      outerVignette={false}
                      smooth={true}
                    />
                  </div>
                  <div className="top-7 size-[214px] rotate-45">
                    <Squares
                      speed={0.5}
                      squareSize={40}
                      direction="diagonal" // up, down, left, right, diagonal
                      borderColor="#fff"
                      hoverFillColor="#fff"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
