import Project from "./Project";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const projects = [
  {
    name: "Loopstudios",
    image: "/Loopstudios.png",
    technologies: "Next.JS / Tailwind CSS",
    link: "https://relaxed-fermi-27ec45.netlify.app/",
    linkGithub: "https://github.com/RubenF01/Loopstudios",
  },
  {
    name: "Around the World!",
    image: "/Around-the-world.png",
    technologies: "Next.JS / Tailwind CSS",
    link: "https://xenodochial-shannon-b4a20f.netlify.app/",
    linkGithub: "https://github.com/RubenF01/Around-the-World",
  },
  {
    name: "Sunnyside",
    image: "/Sunnyside.png",
    technologies: "Next.JS / Tailwind CSS",
    link: "https://sprightly-horse-287884.netlify.app/",
    linkGithub: "https://github.com/RubenF01/Sunnyside",
  },
  {
    name: "Room",
    image: "/Room.png",
    technologies: "Next.JS / Tailwind CSS",
    link: "https://charming-daifuku-1c0967.netlify.app/",
    linkGithub: "https://github.com/RubenF01/Room",
  },
  {
    name: "Advice Generator",
    image: "/Advice-Generator.png",
    technologies: "Next.JS / Tailwind CSS",
    link: "https://thunderous-taffy-0bdbd1.netlify.app/",
    linkGithub: "https://github.com/RubenF01/Advice-Generator",
  },
  {
    name: "NFT Card",
    image: "/NFT-Card.png",
    technologies: "Next.JS / Tailwind CSS",
    link: "https://spectacular-platypus-a20329.netlify.app/",
    linkGithub: "https://github.com/RubenF01/NFT-Card",
  },
];

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.07,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounrce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div
      ref={ref}
      className="pb-10 max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-[105rem] mx-auto mt-11"
      id="projects"
    >
      <div className="pt-10">
        <h1 className="font-bold text-xl lg:text-3xl pb-5 text-slate-900">
          Projects
        </h1>
      </div>
      <motion.div
        animate={animation}
        className="flex flex-col space-y-4 max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-[105rem] mx-auto"
      >
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
