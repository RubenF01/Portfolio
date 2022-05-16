import Link from "next/link";

const Footer = ({ classes }) => {
  return (
    <div
      className={`flex flex-col items-center space-y-6 lg:space-y-3 bg-slate-900 text-white py-8 lg:py-4 font-poppins ${classes}`}
    >
      <nav className="space-x-5 lg:space-x-20 lg:text-lg">
        <Link href="/about">
          <a className="relative hover:after:content-[''] hover:after:bg-white hover:after:h-[3px] hover:after:w-12 hover:after:absolute hover:after:-bottom-1 hover:after:right-[3px] hover:after:animate-extend">
            About
          </a>
        </Link>
        <Link href="/#projects">
          <a className="relative hover:after:content-[''] hover:after:bg-white hover:after:h-[3px] hover:after:w-12 hover:after:absolute hover:after:-bottom-1 hover:after:right-3 hover:after:animate-extend">
            Projects
          </a>
        </Link>
        <Link href="/contact">
          <a className="relative hover:after:content-[''] hover:after:bg-white hover:after:h-[3px] hover:after:w-12 hover:after:absolute hover:after:-bottom-1 hover:after:right-3 hover:after:animate-extend">
            Contact
          </a>
        </Link>
      </nav>
      <Link href="/">
        <a className="font-hurricane text-2xl lg:text-3xl">Rubén Frías</a>
      </Link>
    </div>
  );
};

export default Footer;
