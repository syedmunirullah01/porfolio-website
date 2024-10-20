import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* text content  */}
          <div>
            <h1
              data-aos="fade-left"
              className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold"
            >
              I am {BaseInfo.name}
            </h1>
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white"
            >
              {BaseInfo.position}
            </h1>
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="mt-6 text-sm md:text-base text-white text-op"
            >
              {BaseInfo.description}
            </p>
          </div>

          {/* image content */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-hidden"
          >
            <Image
              src={BaseInfo.profilePic}
              alt="profilePic"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
