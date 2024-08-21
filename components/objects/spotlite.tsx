import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";
import Container from "../global/container";
import {  } from "../ui/spotlight";
import Image from "next/image";

export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <Container>
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Robolist <br /> A <a className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">New Era </a>
          of Robots
        </h1>
        </Container>
        <Container>
        <p className="mt-4  font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
               Buy and sell robots and robot parts,
                share hardware and software,
            and connect with other robot enthusiasts,
                      all in one place.
        </p>
        </Container>
      </div>
    </div>
  );
}
