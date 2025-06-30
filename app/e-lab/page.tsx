import { Challenges } from "@/components/Challenges";
import React from "react";

const ELab = () => {
  return (
    <section>
      <div className="flex size-full min-h-[300px] flex-col items-center justify-center">
        <h1 className="max-w-[900px] text-center  text-[60px] font-bold leading-[70px] tracking-tighter max-sm:text-[50px] max-sm:leading-[55px]">
          E-lab Challenges
        </h1>
        <p className="max-w-[500px] pt-2 text-center font-medium leading-5 tracking-normal opacity-65 max-sm:px-5 max-sm:pt-2">
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
