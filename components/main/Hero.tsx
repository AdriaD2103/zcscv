"use client";
import React from "react";
import HeroContent from "../sub/HeroContent";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative flex flex-col h-full w-full"
      id="about-me"
    >
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-450px] h-min w-full left-0 z-[1] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </motion.div>
  );
};

export default Hero;
