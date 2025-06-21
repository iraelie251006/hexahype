import Beams from "@/components/Beams";
import DotGrid from "@/components/DotGrid";
import ShinyText from "@/components/Shine";

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
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="flex justify-between items-center w-full h-screen">
          <div>
            <ShinyText
              text="Hexahype"
              disabled={false}
              speed={1}
              className="font-bold text-9xl flex justify-start ml-10"
            />
          </div>
          <div className="mr-10 flex gap-10">
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
        </div>
      </div>
    </div>
  );
}
