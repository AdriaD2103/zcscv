"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="h-full w-full flex flex-col md:flex-row gap-10 px-10"
      >
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="My portfolio."
        />
        <ProjectCard
          src=""
          title="To be Determined"
          description="To be Determined"
        />
        <ProjectCard
          src=""
          title="To be Determined"
          description="To be Determined"
        />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
