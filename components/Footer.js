const Footer = ({ classes }) => {
  return (
    <div
      className={`flex flex-col items-center space-y-4 bg-slate-900 text-white py-8 ${classes}`}
    >
      <nav className="space-x-5">
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="/contact">Contact</a>
      </nav>
      <a href="/" className="font-hurricane text-2xl">
        Rubén Frías
      </a>
    </div>
  );
};

export default Footer;
