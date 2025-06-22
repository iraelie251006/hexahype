import React from "react";
import Beams from "./ui/Beams";
import DotGrid from "./ui/DotGrid";
import LetterGlitch from "./ui/LetterGlitch";
import ShinyText from "./ui/Shine";
import Squares from "./ui/SquareGrid";

const Hero = () => {
  return (
    <main>
      <div className="w-full h-screen relative">
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
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex justify-between items-center w-full h-screen">
            <div className="ml-10">
              <ShinyText
                text="Hexahype"
                disabled={false}
                speed={2}
                className="font-bold text-9xl flex justify-start"
              />
              <p className="ml-2 mt-5 text-lg font-mono text-white/60">
                Powering the Future, One Hype at a Time. <br />
                Shaping Tomorrow with Every Move.
              </p>
            </div>
            <div className="mr-10 flex gap-5 flex-col">
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
