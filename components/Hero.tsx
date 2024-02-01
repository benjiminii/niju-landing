"use client";

import clsx from "clsx";
import Image from "next/image";
import ScrollAnimationWrapper from "./wrapper/MotionWrapper";

function Hero() {
  return (
    <div
      className={clsx(
        "relative flex items-center justify-center flex-col h-screen w-full flex-grow",
        "bg-square bg-cover bg-center",
        "bg-gradient-to-br from-orange-500 from-0% to-black to-30%"
        // "via-orange-700 via-20%"
      )}
    >
      <ScrollAnimationWrapper
        animate={{
          y: [0, -30, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="self-center relative text-[70px] md:text-[100px] text-[#F2F2F2] z-30">
          <Image
            src={"/images/logo.svg"}
            alt="Main Section Logo"
            width={1000}
            height={500}
          />
        </div>
      </ScrollAnimationWrapper>
      <a href="#technical-support">
        <img
          src="/images/down-arrow.svg"
          alt="Down Arrow"
          className="absolute bottom-0 left-0 right-0 mx-auto self-center"
        />
      </a>
    </div>
  );
}

export default Hero;
