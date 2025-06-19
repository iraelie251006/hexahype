import Beams from "@/components/Beams";

export default function Home() {
  return (
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
</div>
  );
}
