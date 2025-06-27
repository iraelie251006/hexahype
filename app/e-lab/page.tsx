import { Challenges } from "@/components/Challenges";
import React from "react";

const ELab = () => {
  return (
    <section>
      <div className="min-h-[300px] w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-center max-w-[900px]  font-bold text-[60px] max-sm:text-[50px] leading-[70px] max-sm:leading-[55px] tracking-tighter">
          E-lab Challenges
        </h1>
        <p className="font-medium max-w-[500px] opacity-65 text-center pt-2 max-sm:pt-2 tracking-normal leading-5 max-sm:px-5">
          We tackled six challenges as a Hexahype group, exposing us to
          real-world contexts, complexity, and innovative thinking.
        </p>
      </div>
      <div>
        <Challenges />
      </div>
    </section>
  );
};

export default ELab;
