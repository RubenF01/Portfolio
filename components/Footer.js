import Link from "next/link";

const Footer = ({ classes }) => {
  return (
    <div
      className={`flex flex-col items-center space-y-4 bg-slate-900 text-white py-8 ${classes}`}
    >
      <nav className="space-x-5 lg:space-x-20 lg:text-lg">
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="#">
          <a>Projects</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
      <Link href="/">
        <a className="font-hurricane text-2xl lg:text-3xl">Rubén Frías</a>
      </Link>
    </div>
  );
};

export default Footer;
