// Dependencies
import React from 'react';
// Externals
import Heading from '../global_components/Heading';
import Colorize from '../global_components/Colorize';
// Internals
import PortfolioImage from './components/PortfolioImage'
import AboutContainer from './components/AboutContainer'
import AboutText from './components/AboutText'

import portfolioPic from '../../images/portfolio-pic.jpg'

const About = () => (
  <div>
    <Heading>&#60;<Colorize color={"#fec242"}> About </Colorize>/&#62;</Heading>
    <AboutContainer>
      <PortfolioImage src={portfolioPic} />
      <AboutText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora excepturi dolorum, sequi quisquam enim eveniet deleniti. Quibusdam consequuntur nam tempore expedita non voluptates, aliquam fuga, voluptatem commodi, doloribus aperiam illum.
      </AboutText>
    </AboutContainer>
  </div>
);

export default About;
