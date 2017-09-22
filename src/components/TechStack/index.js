// Dependencies
import React from 'react';
// Externals
import ImageContainer from '../global_components/ImageContainer';
import Image from '../global_components/Image';
import Heading from '../global_components/Heading';
import Colorize from '../global_components/Colorize';

const TechStack = () => (
  <div>
    <Heading>&#60;<Colorize color="#c678dd"> Tech_Stack </Colorize>/&#62;</Heading>
    <ImageContainer>
      <Image src="images/javascript-plain.svg"/>
      <Image src="images/react-original.svg"/>
      <Image src="images/nodejs-plain.svg"/>
      <Image src="images/express-original.svg"/>
      <Image src="images/rails-plain.svg"/>
      <Image src="images/ruby-plain.svg"/>
      <Image src="images/html5-plain.svg"/>
      <Image src="images/css3-plain.svg"/>
      <Image src="images/git-plain.svg"/>
      <Image src="images/atom-original.svg"/>
      <Image src="images/heroku-plain.svg"/>
      <Image src="images/yarn-original.svg"/>
    </ImageContainer>
  </div>
);

export default TechStack;
