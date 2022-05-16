import { useState } from "react";
import Link from "next/dist/client/link";
import { motion } from "framer-motion";

const Project = ({ name, image, technologies, link }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsShown(!isShown)}
      onMouseLeave={() => setIsShown(!isShown)}
      className={`relative`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`rounded ${isShown ? "blur-sm" : ""}`}
        src={image}
        alt={name}
      />
      {isShown ? (
        <div className="absolute rounded inset-0 bg-black/40 h-full"></div>
      ) : undefined}
      <div
        className={`absolute inset-0 h-full w-full flex flex-col justify-center items-center text-white ${
          isShown ? "" : "invisible"
        }`}
      >
        <h1 className="text-2xl 2xl:text-4xl">{name}</h1>
        <p className="mb-5 2xl:text-lg">{technologies}</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          className="border-2 rounded px-3 py-1"
        >
          <Link href={link}>
            <a target="_blank">VISIT SITE</a>
          </Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Project;
