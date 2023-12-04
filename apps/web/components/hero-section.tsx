"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@course-selling-monorepo/utils";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section className="container py-10 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="sm:col-span-12 lg:col-span-6 xl:col-span-7 lg:mt-6 xl:mt-14 mr-5 md:mb-10">
          <h1 className="mb-4 text-4xl lg:text-5xl xl:text-6xl lg:leading-normal font-extrabold lg:text-left ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-cyan-800 ">
              Explore Expert-led Courses for{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Professional Growth",
                1000,
                "Career Advancement",
                1000,
                "Skill Development",
                1000,
                "Knowledge Enhancement",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-primary mb-4 mr-4">
            Join a community of learners on our platform, where knowledge meets
            opportunity, and unlock your full potential today
          </p>
          <div className="flex">
            <Button className="mr-2">Test</Button>
            <Button>Test2</Button>
          </div>
        </div>

        <div className="container sm:col-span-12 lg:col-span-6 xl:col-span-5 xl:ml-10 ">
          <div className="flex mb-8 lg:ml-5 items-center justify-center">
            <Image
              src="/images/hero-image.png"
              className="rounded-3xl mr-10"
              alt="Hero Image"
              height={160}
              width={180}
            />
            <Image
              src="/images/hero-image-sample.png"
              className="rounded-full"
              alt="Hero Image"
              height={200}
              width={200}
            />
          </div>
          <div className="flex lg:ml-5 items-center justify-center">
            <Image
              src="/images/hero-image.png"
              className="rounded-full mr-10"
              alt="Hero Image"
              height={200}
              width={200}
            />
            <Image
              src="/images/hero-image.png"
              className="rounded-3xl"
              alt="Hero Image"
              height={160}
              width={180}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
