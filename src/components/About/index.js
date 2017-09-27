// Dependencies
import React from 'react';
// Externals
import Heading from '../global_components/Heading';
import Colorize from '../global_components/Colorize';
// Internals
import PortfolioImage from './components/PortfolioImage';
import AboutContainer from './components/AboutContainer';
import AboutText from './components/AboutText';

import portfolioPic from '../../images/portfolio-pic.jpg';

const About = () => (
  <div>
    <Heading>&#60;<Colorize color={"#fec242"}> About </Colorize>/&#62;</Heading>
    <AboutContainer>
      <PortfolioImage src={portfolioPic} />
      <AboutText>
        My name is Bradley and I am an I.T. Support / Systems Administrator turned Developer.
        I am proficient in React, Node, ES6 JavaScript, Ruby on Rails and have an
        insatiable thirst for learning.  I am a recent St. Pete transplant,
        father and lover of the arts.
      </AboutText>
    </AboutContainer>
  </div>
);

export default About;
