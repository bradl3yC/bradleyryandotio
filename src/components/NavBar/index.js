import React from 'react'
import StyledLink from './components/StyledLink'

const NavBar = () => (
  <div>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/portfolio">Portfolio</StyledLink>
    <StyledLink to="/about">About</StyledLink>
  </div>
)

export default NavBar
