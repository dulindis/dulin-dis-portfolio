import React, {useState} from 'react';

const Menu = ({navbarOpen, navlinkAnimation}) => {

  const [isActive, setActive] = useState(false);

    const links = [
        {
          text: "home",
          path: "/",
        },
        {
          text: "about",
          path: "/about",
        },
        {
          text: "gallery",
          path: "/gallery",
        },
        {
          text: "contact",
          path: "/contact",
        },
      ];
  return (
   
    <ul className={`nav-links ${navbarOpen ? "nav-active" : ""}`}>
    {links.map((link, index) => {
      console.log("navlinkAnimation", navlinkAnimation);
      return (
        <li
          className={`nav-link ${isActive ? 'active-link' : null}`}
          onClick={()=>{setActive(!isActive)}}
          navlinkanimation={navlinkAnimation.toString()}
          //  onAnimationEnd={() => setNavliknkAnimation(false)}
          index={index}
        >
          <a href={link.path}>{link.text}</a>
        </li>
      );
    })}
    {/* <li><a href='#'>Home</a></li>
    <li><a href='#'>about</a></li>
    <li><a href='#'>contact</a></li> */}
  </ul>
  )
}

export default Menu