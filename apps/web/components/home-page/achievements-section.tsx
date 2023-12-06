"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Courses",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "10,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

export const AchievementsSection = () => {
  return (
    <div className="container py-8 px-4 xl:gap-16 sm:py-2 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-lg py-6 px-16 flex flex-col sm:flex-row items-center justify-between bg-cyan-800">
        {achievementsList.map((achievement, index) => {
          return (
            <div className="flex">
              <div
                key={index}
                className="flex flex-col items-center justify-center md:mx-4 my-4 sm:my-0"
              >
                <h2 className="text-white text-4xl font-bold flex flex-row">
                  {achievement.prefix}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white text-4xl font-bold"
                  />
                  {achievement.postfix}
                </h2>
                <p className="text-white text-base">{achievement.metric}</p>
              </div>
              <div className="md:h-20 md:border-l md:border-gray-200"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
