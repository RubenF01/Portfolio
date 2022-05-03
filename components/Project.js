import { useState } from "react";

const Project = ({ name, image, technologies, link }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsShown(!isShown)}
      onMouseLeave={() => setIsShown(!isShown)}
      className={`relative`}
    >
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
        <h1 className="text-2xl">{name}</h1>
        <p className="mb-5">{technologies}</p>
        <div className="space-x-3">
          <button className="border-2 rounded px-3 py-1">LEARN MORE</button>
          <button className="border-2 rounded px-3 py-1">
            <a href={link} target="_blank">
              VISIT SITE
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
