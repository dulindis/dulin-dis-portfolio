import React from "react";
// import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/logo.svg';
// import './header.styles.scss';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

// const logoImgStyle = {
//   width:'100%',
// };

const Header = () => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo class='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/about'>about</OptionLink>
      <OptionLink to='/gallery'>gallery</OptionLink>
      <OptionLink to='/contact'>contact</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
  // <header className="header">
  //   <Link className="logo-container" to="/">
  //     <Logo className="logo" />
  //   </Link>
  //   <div className="options">
  //   <Link className="option" to='/'>home</Link>
  //       <Link className="option" to='/about'>about</Link>
  //       <Link className="option" to='/gallery'>gallery</Link>
  //       <Link className="option" to='/contact'>contact</Link>
  //   </div>
  // </header>
);

export default Header;
