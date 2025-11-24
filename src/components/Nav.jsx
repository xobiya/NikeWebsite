import { useState } from "react";
import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../Constants";
import { Link } from "react-router-dom";

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container relative">

        {/* Logo */}
        <Link to="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </Link>

        {/* Desktop Menu */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="hidden max-lg:block"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <img src={hamburger} width={28} height={28} alt="menu" />
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-20 right-5 bg-white rounded-xl shadow-xl p-6 w-56 flex flex-col gap-4 z-30 animate-slideDown">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-montserrat text-slate-gray text-lg"
                onClick={() => setMobileOpen(false)} // close on click
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
