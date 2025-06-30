"use client";
import React from "react";
import YouTube from "react-youtube";
import { Timeline } from "@/components/ui/timeline";
import { UseResponsiveWidth } from "@/lib/YoutubeOptions";

export function Challenges() {
  const width = UseResponsiveWidth();

  const VideoOptions = {
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 0,
      loop: 1,
    },
    width,
    height: "300",
    className: "rounded-2xl",
  };
  const data = [
    {
      title: "29/05/2025",
      content: (
        <div className="flex w-full justify-between gap-10">
          <div className="w-1/2 max-md:hidden">
            <h1 className="text-center text-[30px] font-bold tracking-tighter">
              Challenge 1
            </h1>
            {/* Horizontal line beside challenge title */}
            <div className="relative mx-6 my-2 flex items-center justify-center">
              <span className="grow border-t border-gray-400"></span>
              <p className="border-gray-400 px-2 text-center font-medium">
                Elevator Pitch
              </p>
              <span className="grow border-t border-gray-400"></span>
            </div>
            <p className="max-w-[1000px] text-justify font-medium leading-6 tracking-tight max-sm:px-5 max-sm:pt-2">
              Here’s our elevator pitch introducing our names, country,
              interests, and a fun fact. We shared our passions, why we care
              about these issues, our goals for solving them, and the unique
              contributions each of us brings to the team.
            </p>
          </div>
          <div>
            <YouTube opts={VideoOptions} videoId="VS7lRTDUeQk" />
          </div>
        </div>
      ),
    },
    {
      title: "06/06/2025",
      content: (
        <div className="flex w-full justify-between gap-10">
          <div>
            <YouTube opts={VideoOptions} videoId="1Xf8Vk2zpdU" />
          </div>

          <div className="w-1/2 max-md:hidden">
            <h1 className="text-center text-[30px] font-bold tracking-tighter">
              Challenge 2
            </h1>
            {/* Horizontal line beside challenge title */}
            <div className="relative mx-6 my-2 flex items-center justify-center">
              <span className="grow border-t border-gray-400"></span>
              <p className="border-gray-400 px-2 text-center font-medium">
                Discover Africa
              </p>
              <span className="grow border-t border-gray-400"></span>
            </div>
            <p className="max-w-[1000px] text-justify font-medium leading-6 tracking-tight max-sm:px-5 max-sm:pt-2">
              Here’s our elevator pitch introducing our names, country,
              interests, and a fun fact. We shared our passions, why we care
              about these issues, our goals for solving them, and the unique
              contributions each of us brings to the team.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "19/06/2025",
      content: (
        <div className="flex w-full justify-between gap-10">
          <div className="w-1/2 max-md:hidden">
            <h1 className="text-center text-[30px] font-bold tracking-tighter">
              Challenge 3
            </h1>
            {/* Horizontal line beside challenge title */}
            <div className="relative mx-6 my-2 flex items-center justify-center">
              <span className="grow border-t border-gray-400"></span>
              <p className="border-gray-400 px-2 text-center font-medium">
                Help Lab
              </p>
              <span className="grow border-t border-gray-400"></span>
            </div>
            <p className="max-w-[1000px] text-justify font-medium leading-6 tracking-tight max-sm:px-5 max-sm:pt-2">
              Here’s our elevator pitch introducing our names, country,
              interests, and a fun fact. We shared our passions, why we care
              about these issues, our goals for solving them, and the unique
              contributions each of us brings to the team.
            </p>
          </div>
          <div>
            <YouTube opts={VideoOptions} videoId="cund0q_3bwQ" />
          </div>
        </div>
      ),
    },
    {
      title: "26/06/2025",
      content: (
        <div className="flex w-full justify-between gap-10">
          <div>
            <YouTube opts={VideoOptions} videoId="L7TfvuB3PA4" />
          </div>

          <div className="w-1/2 max-md:hidden">
            <h1 className="text-center text-[30px] font-bold tracking-tighter">
              Challenge 4
            </h1>
            {/* Horizontal line beside challenge title */}
            <div className="relative mx-6 my-2 flex items-center justify-center">
              <span className="grow border-t border-gray-400"></span>
              <p className="border-gray-400 px-2 text-center font-medium">
                Hunt for Treasure
              </p>
              <span className="grow border-t border-gray-400"></span>
            </div>
            <p className="max-w-[1000px] text-justify font-medium leading-6 tracking-tight max-sm:px-5 max-sm:pt-2">
              Here’s our elevator pitch introducing our names, country,
              interests, and a fun fact. We shared our passions, why we care
              about these issues, our goals for solving them, and the unique
              contributions each of us brings to the team.
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full text-clip">
      <Timeline data={data} />
    </div>
  );
}
