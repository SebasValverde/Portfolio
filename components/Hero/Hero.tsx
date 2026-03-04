"use client";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col scroll-mt-28"
    >
      <ParticlesHero />

      <div className="relative z-10 flex flex-col items-center">

        <h1 className=" text-2xl sm:text-3xl md:text-5xl lg:text-5xl mt-6 text-center font-bold tracking-wide" data-aos="fade-up" data-aos-delay="200">
          Hi! I&apos;m Sebastian Valverde <br />
          Full-Stack Developer
          <span className="text-cyan-200"> (Front-End + .NET)</span>
        </h1>
        <h2 className="mt-4 text-sm px-2 text-center sm:text-2xl font-medium flex items-center" data-aos="fade-up" data-aos-delay="400">
          Passionate about
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  "Building websites",
                  "Turning ideas into shipped features",
                  "Crafting clean UI components",
                  "AI-powered automation",
                  "Solving real user problems",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>

        {/*Buttons*/}
        <div className="mt-8 flex items-center gap-4" data-aos="fade-up" data-aos-delay="600">
          <a
            href="https://github.com/SebasValverde"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="h-14 w-14 rounded-full
                border border-white/15 bg-white/5
                transition-all duration-200
                hover:ring-1 hover:ring-cyan-200/40
                hover:border-cyan-200/30
                hover:shadow-[0_0_28px_rgba(103,232,249,0.22)]
                active:scale-95 hover:scale-105
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-cyan-200/45
                focus-visible:shadow-[0_0_32px_rgba(103,232,249,0.25)] flex items-center justify-center"
          >
            <FaGithub className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/sebastian-valverdearias/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="h-14 w-14 rounded-full
                border border-white/15 bg-white/5
                transition-all duration-200
                hover:ring-1 hover:ring-cyan-200/40
                hover:border-cyan-200/30
                hover:shadow-[0_0_28px_rgba(103,232,249,0.22)]
                active:scale-95 hover:scale-105
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-cyan-200/45
                focus-visible:shadow-[0_0_32px_rgba(103,232,249,0.25)] flex items-center justify-center"
          >
            <FaLinkedinIn className="h-5 w-5" />
          </a>

          <a
            href="#works"
            className="
              relative overflow-hidden inline-flex items-center
              px-10 py-4 rounded-full text-lg font-medium cursor-pointer
              bg-blue-800 hover:bg-blue-800
              transition-all duration-300
              hover:shadow-[0_14px_30px_rgba(0,0,0,0.35),0_0_22px_rgba(103,232,249,0.12)]
              active:scale-95
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-cyan-200/25
              before:absolute before:inset-0
              before:bg-linear-to-r before:from-transparent before:via-white/10 before:to-transparent
              before:translate-x-[-120%] hover:before:translate-x-[120%]
              before:transition-transform before:duration-700
            "
          >
            <span>See my work</span>
            <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
