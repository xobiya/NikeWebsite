import headerLogo from '../assets/images/header-logo.svg'
import hamburger from '../assets/icons/hamburger.svg'
import {navLinks} from '../Constants'
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29}/>
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((link) => (
                    <li key={link.label}>
                        <a href={link.label} className='font-montserrat leading-normal text-lg text-slate-gray'>
                            {link.label}
                        </a>
                        </li>),
                )}
            </ul>
                <div className='hidden max-lg:block ' >
                    <img src={hamburger} width={20} height={20} alt="menu" />
                </div>
        </nav>
    </header>
  )
}

export default Nav