import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="container py-6 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">

        <div className="col-span-7 mt-20">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
              Find the best Industry ready{" "}
            </span>
          </h1>
        </div>

        <div className="col-span-5">
          <div className="flex mb-6">
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
              width={200}
              height={200}
            />
          </div>
          <div className="flex">
            <Image
              src="/images/hero-image.png"
              className="rounded-full mr-10"
              alt="Hero Image"
              width={200}
              height={200}
            />
            <Image
              src="/images/hero-image.png"
              className="rounded-3xl"
              alt="Hero Image"
              width={180}
              height={180}
            />
          </div>
        </div>

        {/* <div className="cols-span-5 place-self-center mt-4 lg:mt-0">
            <div className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] sm:cols-span-2 ">
              <Image
                src="/images/hero-image.png"
                className="rounded-3xl "
                alt="Hero Image"
                width={200}
                height={200}
              />
              <Image
                src="/images/hero-image-sample.png"
                className="rounded-3xl "
                alt="Hero Image"
                width={200}
                height={200}
              />
            </div>

            <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative">
              <Image
                src="/images/hero-image.png"
                className="rounded-3xl absolute transform -translate-x-1/3 -translate-y-1/3 top-1/3 left-1/3"
                alt="Hero Image"
                width={250}
                height={250}
              />
            </div>
          </div> */}
      </div>
    </section>
  );
};
