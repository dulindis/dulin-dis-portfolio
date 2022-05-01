import React, { useState } from "react"
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/logo.svg';
// import HamburgerMenu from '../hamburger-menu/hamburger-menu-component';
import Navbar from '../menu-options/navbar.component';

const Header = () => {

  const links = [
    {
    text:'home',
    path:'/'
    },
    {
    text:'about',
    path:'/about'
    },
    {
    text:'gallery',
    path:'/gallery'
    },
    {
    text:'contact',
    path:'/contact'
    }
  ]
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(prev=>!prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  const navSlide = () => {
    // const burger 
  }
  
  return(

  <header className="nav">

    <Link className="logo" to="/">
      <Logo className="logo-image" />
    </Link>
    
    {/* <Navbar/> */}
    
     <ul className={`nav-links ${navbarOpen? "nav-active" : ""}`}>
     {
       links.map((link,index) => (<li style={{animation:`navLinkFade 0.5s ease forwards ${index/7}`}}><a href={link.path}>{link.text}</a></li>))


     }
        {/* <li><a href='#'>Home</a></li>
        <li><a href='#'>about</a></li>
        <li><a href='#'>contact</a></li> */}
    </ul>

    <div className="burger" onClick={handleToggle}>

      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>


    {/* <HamburgerMenu handleToggle={handleToggle} navbarOpen={navbarOpen} closeMenu={closeMenu}></HamburgerMenu> */}
    



  </header>
);}

export default Header;
