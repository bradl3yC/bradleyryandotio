import React from 'react'
import StyledLink from './components/StyledLink'
import Title from './components/Title'
import Nav from './components/Nav'

const NavBar = () => (
  <Nav>
    <Title>BradleyRyan.io</Title>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/portfolio">Portfolio</StyledLink>
  </Nav>
)

export default NavBar
