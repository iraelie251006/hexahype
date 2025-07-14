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
              We explored the rich history and heritage of the Ashanti Kingdom.
              From its powerful legacy to its vibrant culture, the journey was
              enlightening. Discovering the Ashanti Kingdom deepened our
              appreciation for African civilization.
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
              We visited a vulnerable family in the community, bringing food and
              essential supplies. Our goal was to share love and kindness
              through meaningful support and compassion. Small acts of
              generosity can bring hope and restore dignity to those in need.
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
              We visited Niyo Art Culture Center, where we explored the rich
              intersections of art, design, and culture. The experience deepened
              our understanding and appreciation of creative expression in
              Rwanda.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "07/07/2025",
      content: (
        <div className="flex w-full justify-between gap-10">
          <div className="w-1/2 max-md:hidden">
            <h1 className="text-center text-[30px] font-bold tracking-tighter">
              Challenge 5
            </h1>
            {/* Horizontal line beside challenge title */}
            <div className="relative mx-6 my-2 flex items-center justify-center">
              <span className="grow border-t border-gray-400"></span>
              <p className="border-gray-400 px-2 text-center font-medium">
                Launch Your Mission V2
              </p>
              <span className="grow border-t border-gray-400"></span>
            </div>
            <p className="max-w-[1000px] text-justify font-medium leading-6 tracking-tight max-sm:px-5 max-sm:pt-2">
              Our mission is to combat youth unemployment in Rwanda by
              harnessing the potential of arts, design, and culture. We empower
              young creatives with skills, opportunities, and platforms to
              thrive. Through creativity, we inspire jobs, innovation, and
              sustainable growth.
            </p>
          </div>
          <div>
            <YouTube opts={VideoOptions} videoId="vyJEt67Ilj8" />
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
