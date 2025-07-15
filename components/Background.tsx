"use client";
import React, { useEffect, useState } from "react";
import Beams from "./ui/Beams";
import Iridescence from "./ui/IredeScene";
import { useTheme } from "next-themes";

const Background = () => {
  const { resolvedTheme } = useTheme();  // "light" or "dark"
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);  // ensure client-only render
  }, []);

  if (!mounted) return null;  // avoid rendering until theme is ready
  return (
    <section>
      {resolvedTheme === "dark" ? (
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
