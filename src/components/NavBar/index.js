// Dependencies
import React from 'react';
import StyledLink from './components/StyledLink';
import LinkSection from './components/LinkSection';
// Externals
import Heading from '../global_components/Heading';
import Colorize from '../global_components/Colorize';
// Internals
import Nav from './components/Nav';

const NavBar = () => (
  <Nav>
    <Heading>&#60;<Colorize color="#61afef"> Bradley_Conley </Colorize>/&#62;</Heading>
    <LinkSection>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/portfolio">Portfolio</StyledLink>
    </LinkSection>
  </Nav>
);

export default NavBar;
