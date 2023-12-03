import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="container py-6 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="sm:col-span-12 lg:col-span-6 xl:col-span-7 lg:mt-14 xl:mt-24 mr-5 md:mb-10">
          <h1 className="mb-4 text-4xl lg:text-5xl xl:text-6xl lg:leading-normal font-extrabold lg:text-left text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400 ">
              Find the best abcd Industry ready random words{" "}
            </span>
          </h1>
        </div>

        <div className="sm:col-span-12 lg:col-span-6 xl:col-span-5 xl:ml-10 ">
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
