// Dependencies
import React from 'react';
// Externals
import Heading from '../global_components/Heading';
import Colorize from '../global_components/Colorize';
// Internals
import PortfolioImage from './components/PortfolioImage'
import AboutContainer from './components/AboutContainer'

const About = () => (
  <div>
    <Heading>&#60;<Colorize color={"#fec242"}> About </Colorize>/&#62;</Heading>
    <AboutContainer>
      <PortfolioImage src="images/portfolio-pic.jpg"/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quas iusto sed maxime quaerat accusantium, veniam error aperiam laudantium ullam asperiores molestias incidunt quidem, ratione consequatur nobis, impedit, dicta eaque!</p>
    </AboutContainer>
  </div>
);

export default About;
