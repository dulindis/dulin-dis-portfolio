import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({link, closeMenu }) {
//     const closeMenu = () => {
//   setNavbarOpen(false)
// }
  return (

    <Link className="navlink" to={link.path}  activeClassName="active-link"
     onClick={() => closeMenu()}
      exact>{link.text}</Link>
  );
}
