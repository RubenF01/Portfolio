import NavBar from "./NavBar";
import Divider from "./icons/Divider";

const Hero = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-32 flex flex-col items-center text-slate-900">
        <h1 className="text-xl pb-5">Hey there, I'm Ruben Frias 👋🏾</h1>
        <h2 className="text-center font-bold text-3xl max-w-xs mx-auto pb-10">
          I'm a Front-End Engineer with a passion for building experiences
        </h2>
        <button
          type="button"
          className="bg-slate-800 rounded-3xl py-2 px-4 text-lg mb-32 text-white shadow-2xl"
        >
          <a href="/contact">Connect with me</a>
        </button>
        <Divider />
      </div>
    </div>
  );
};

export default Hero;
