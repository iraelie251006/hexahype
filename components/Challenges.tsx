"use client";
import React from "react";
import YouTube from "react-youtube";
import { Timeline } from "@/components/ui/timeline";
import { VideoOptions } from "@/lib/YoutubeOptions";

export function Challenges() {
  const data = [
    {
      title: "29/05/2025",
      content: (
        <div className="flex justify-between gap-10 w-full">
          <div className="w-[50%] max-md:hidden">
            <h1 className="text-center font-bold text-[30px] tracking-tighter">
              Challenge 1
            </h1>
            {/* Horizontal line beside challenge title */}
            <div className="relative flex items-center justify-center mx-6 my-2">
              <span className="flex-grow border-t border-gray-400"></span>
              <p className="font-medium text-meduim text-center border-gray-400 px-2">
                Elevator Pitch
              </p>
              <span className="flex-grow border-t border-gray-400"></span>
            </div>
            <p className="font-medium max-w-[1000px] text-dark-body-color/80 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5">
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
        <div className="flex justify-between gap-10 w-full">
            <div>
                <YouTube opts={VideoOptions} videoId="1Xf8Vk2zpdU" />
            </div>
          
            <div className="w-[50%] max-md:hidden">
            <h1 className="text-center font-bold text-[30px] tracking-tighter">
              Challenge 2
            </h1>
            {/* Horizontal line beside challenge title */}
            <div className="relative flex items-center justify-center mx-6 my-2">
              <span className="flex-grow border-t border-gray-400"></span>
              <p className="font-medium text-meduim text-center border-gray-400 px-2">
                Discover Africa
              </p>
              <span className="flex-grow border-t border-gray-400"></span>
            </div>
            <p className="font-medium max-w-[1000px] text-dark-body-color/80 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5">
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
          <div className="flex justify-between gap-10 w-full">
            <div className="w-[50%] max-md:hidden">
              <h1 className="text-center font-bold text-[30px] tracking-tighter">
                Challenge 3
              </h1>
              {/* Horizontal line beside challenge title */}
              <div className="relative flex items-center justify-center mx-6 my-2">
                <span className="flex-grow border-t border-gray-400"></span>
                <p className="font-medium text-meduim text-center border-gray-400 px-2">
                  Help Lab
                </p>
                <span className="flex-grow border-t border-gray-400"></span>
              </div>
              <p className="font-medium max-w-[1000px] text-dark-body-color/80 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5">
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
          <div className="flex justify-between gap-10 w-full">
              <div>
                  <YouTube opts={VideoOptions} videoId="L7TfvuB3PA4" />
              </div>
            
              <div className="w-[50%] max-md:hidden">
              <h1 className="text-center font-bold text-[30px] tracking-tighter">
                Challenge 4
              </h1>
              {/* Horizontal line beside challenge title */}
              <div className="relative flex items-center justify-center mx-6 my-2">
                <span className="flex-grow border-t border-gray-400"></span>
                <p className="font-medium text-meduim text-center border-gray-400 px-2">
                  Hunt for Treasure
                </p>
                <span className="flex-grow border-t border-gray-400"></span>
              </div>
              <p className="font-medium max-w-[1000px] text-dark-body-color/80 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5">
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
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
