import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import MobileMenu from './MobileMenu';



const MainNavigation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          const target = event.target as Node;
    
          const clickedInsideMenu = menuRef.current?.contains(target);
          const clickedMenuIcon = iconRef.current?.contains(target);
    
          if (!clickedInsideMenu && !clickedMenuIcon) {
            setIsMenuOpen(false);
          }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <>
            <div className="bg-stockTrackerBlack text-white w-full h-[53px] flex justify-center">
                <nav className="w-[1220px] mx-auto flex justify-between items-center">
                    <div>
                        <Link to="" className="text-white no-underline">
                            <img src="/menu-logo.svg" alt="Logo" />
                        </Link>
                    </div>
                    <ul className="list-none flex space-x-5 invisible text-sm md:visible">                                 
                        <li><Link className="text-white no-underline" to = "">Home</Link></li>
                        <li><Link className="text-white no-underline" to = "/about">About</Link></li>
                        {/* <li><Link className="text-white no-underline" to = '/services'>Services</Link></li> */}
                        <li><Link className="text-white no-underline" to = '/news'>Top News</Link></li>
                        {/* <li><Link className="text-white no-underline" to = '/contact'>Contact Us</Link></li>              */}
                    </ul>
                    <div className="text-white mr-4">
                        <div className="hidden text-sm">
                            <Link className="text-white no-underline invisible md:visible" to = '/sign up'>Sign Up</Link>
                        </div>
                        {/* Hamburger icon for mobile */}
                        <div className = "md:hidden" ref={iconRef} onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </div>
                </nav>
            </div>
            {isMenuOpen && <MobileMenu toggleMenu = {toggleMenu} iconRef ={iconRef} />}
        </>
    )
}

export default MainNavigation

