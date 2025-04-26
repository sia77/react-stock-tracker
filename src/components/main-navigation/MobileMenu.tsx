import { Link } from "react-router-dom";

const MobileMenu = (props:any) => {
    return (
        <div 
            ref={props.menuRef} 
            className="list-none flex flex-col bg-stockTrackerBlack text-white menu space-y-4 md:hidden p-4 absolute top-16 left-0 w-full z-[9999]" >

            <ul className="text-sm"> 
                <li className="mb-3"><Link className="text-white no-underline" onClick={props.toggleMenu} to ="">Home</Link></li>
                <li className="mb-3"><Link className="text-white no-underline" onClick={props.toggleMenu} to ="/about">About</Link></li>
                {/* <li className="mb-3"><Link className="text-white no-underline" onClick={props.toggleMenu} to ='/services'>Services</Link></li> */}
                <li className=""><Link className="text-white no-underline" onClick={props.toggleMenu} to ='/news'>Top News</Link></li>
                {/* <li><Link className="text-white no-underline" to = '/contact'>Contact Us</Link></li>              */}
            </ul> 
        </div>
    )
}

export default MobileMenu;