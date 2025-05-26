import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import MobileMenu from './MobileMenu';
import SignInSignOut from '../SignInSignOut';
import { useAuth } from '@/hooks/useAuth';



const MainNavigation = () => {

    //const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);

    const {isAuthenticated } = useAuth();

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

    //   const handleClick = (path: string):any => {
    //     navigate(path, { replace: true }); 
    //   };

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <>
            <div className="bg-gradient-to-r from-[#0A101C] to-[#1a2232] text-white w-full h-[53px] flex justify-center">
                <nav className="w-[1220px] mx-4 flex justify-between items-center">
                    <div>
                    <Link
                        
                        to="" 
                        className="text-white no-underline hover:opacity-80 transition-all">
                        <img src="/menu-logo.svg" alt="Logo" className="h-10" />
                    </Link>
                    </div>
                    <ul className="list-none flex space-x-3 invisible text-sm md:visible">
                        <li>
                            <Link 
                            className="text-white no-underline px-3 py-2 rounded-md transition-colors hover:bg-stockTrackerBlue" 
                            to=""                            
                            >
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                            className="text-white no-underline px-3 py-2 rounded-md transition-colors hover:bg-stockTrackerBlue" 
                            to="/about"                            
                            >
                            About
                            </Link>
                        </li>
                        <li>
                            <Link 
                            className="text-white no-underline px-3 py-2 rounded-md transition-colors hover:bg-stockTrackerBlue" 
                            to="/news"                            
                            >
                            Top News
                            </Link>
                        </li>
                        {isAuthenticated && <li>
                            <Link 
                            className="text-white no-underline px-3 py-2 rounded-md transition-colors hover:bg-stockTrackerBlue" 
                            to="/userDashboard"                            
                            >
                            User Dashboard
                            </Link>
                        </li>}

                        
                    </ul>
                    <div className="">
                        <div className="hidden md:block text-sm text-white no-underline px-3 py-2 rounded-md transition-colors hover:bg-stockTrackerBlue cursor-pointer">
                            <SignInSignOut />
                        </div>
                        {/* Hamburger icon for mobile */}
                        <div className = "md:hidden cursor-pointer" ref={iconRef} onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </div>
                </nav>
            </div>
            {isMenuOpen && <MobileMenu toggleMenu = {toggleMenu} iconRef ={iconRef} isAuthenticated = {isAuthenticated} />}
        </>
    )
}

export default MainNavigation

