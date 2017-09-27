// Dependencies
import React from 'react';
import StyledLink from './components/StyledLink';
// Externals
import Heading from '../global_components/Heading';
import Colorize from '../global_components/Colorize';
// Internals
import Nav from './components/Nav';

const NavBar = () => (
  <Nav>
    <Heading>
      <Colorize color="#61afef">bradleyRyan </Colorize>
      <Colorize color="#56c0c2">= </Colorize>
    </Heading>
    <Heading><Colorize> (</Colorize></Heading>
    <StyledLink color="#e06c75" to="/">Home</StyledLink>
    <Heading><Colorize color="#ccc">,</Colorize></Heading>
    <StyledLink color="#e06c75" to="/portfolio">Portfolio</StyledLink>
    <Heading>
      <Colorize>)</Colorize>
      <Colorize color="#c678dd"> => </Colorize>
      <Colorize color="#ccc"> &#123;	</Colorize>
    </Heading>
  </Nav>
);

export default NavBar;
