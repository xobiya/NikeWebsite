import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../Constants";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <Link to="/">
              <img src={headerLogo} alt="Logo" width={130} height={29} />
            </Link>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((link) => (
                    <li key={link.label}>
                        <Link to={link.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
                <div className='hidden max-lg:block ' >
                    <img src={hamburger} width={20} height={20} alt="menu" />
                </div>
        </nav>
    </header>
  )
}

export default Nav