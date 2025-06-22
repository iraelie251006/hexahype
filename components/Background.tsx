"use client";
import React from "react";
import Beams from "./ui/Beams";
import Iridescence from "./ui/IredeScene";

const Background = () => {
  const currentTheme = localStorage.getItem("theme");
  return (
    <section>
      {currentTheme === "dark" ? (
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
    </section>
  );
};

export default Background;
