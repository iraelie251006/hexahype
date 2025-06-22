"use client";
import React, { useEffect, useState } from "react";
import Beams from "./ui/Beams";
import DotGrid from "./ui/DotGrid";
import LetterGlitch from "./ui/LetterGlitch";
import ShinyText from "./ui/Shine";
import Squares from "./ui/SquareGrid";
import Iridescence from "./ui/IredeScene";
import { useTheme } from "next-themes";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<string | null>(null);
  const [baseColor, setBaseColor] = useState<string>("ffffff");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    setTheme(currentTheme);
  }, [resolvedTheme]);

  return (
    <main>
      <div className="w-full h-screen relative">
        {theme === "dark" ? (
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
          <div className={`${theme === "light" ? "justify-center" : "justify-between"} flex max-lg:justify-center items-center w-full h-screen border-2 border-slate-800`}>
            <div className="ml-10 max-lg:ml-0 flex justify-center flex-col items-center">
              <ShinyText
                text="Hexahype"
                disabled={false}
                speed={2}
                className={`${theme === "light" ? "text-[200px]" : "text-7xl md:text-9xl lg:text-9xl"} font-bold flex justify-start`}
              />
              <p className={`${theme === "light" ? "text-[25px] ml-4 mt-0": "text-lg"} ml-2 mt-5 font-mono dark:text-white/60 w-full`}>
                Powering the Future, One Hype at a Time. <br />
                Shaping Tomorrow with Every Move.
              </p>
            </div>
            <div className={`${theme === "light" ? "hidden": "block"} mr-10 flex gap-5 flex-col max-lg:hidden`}>
              <div className="flex justify-center">
                <div className="h-[214px] w-[214px] rotate-45 top-7">
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
                <div className="h-[214px] w-[214px] rotate-45 top-7">
                  <LetterGlitch
                    glitchSpeed={50}
                    centerVignette={true}
                    outerVignette={false}
                    smooth={true}
                  />
                </div>
                <div className="h-[214px] w-[214px] rotate-45 top-7">
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
