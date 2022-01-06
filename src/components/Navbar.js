import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <=960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
    return (
        <div>
           <nav className='navbar'>
               <div className='navbar-container'>
                   <Link to= "/home" className= "navbar-logo">
                       Paris Inconnu
                       <i class="fas fa-camera-retro"></i>
                   </Link>
                   <div className='menu-icon' onClick={handleClick}>
                       <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                   </div>
                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                       <li className='nav-item'>
                           <Link to = '/home' className='nav-links' onClick={closeMobileMenu}>
                               Home 
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to = '/places' className='nav-links' onClick={closeMobileMenu}>
                               Places
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to = '/aboutme' className='nav-links' onClick={closeMobileMenu}>
                               About me
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to = '/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                               Contact
                           </Link>
                       </li>
                   </ul>
                   {button && <Button buttonStyle='btn--outline'>Contact me</Button>}
               </div>
           </nav>
        </div>
    )
}

export default Navbar
