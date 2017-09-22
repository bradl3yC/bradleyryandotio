// Dependencies
import React from 'react';
// Externals
import ImageContainer from '../global_components/ImageContainer';
import Image from '../global_components/Image';
import Heading from '../global_components/Heading';
import Colorize from '../global_components/Colorize';
// Internals
import Main from './components/Main';
// Images
import javascriptImage from '../../images/javascript-plain.svg';
import reactImage from "../../images/react-original.svg"
import nodeImage from "../../images/nodejs-plain.svg"
import railsImage from "../../images/rails-plain.svg"
import rubyImage from "../../images/ruby-plain.svg"
import html5Image from "../../images/html5-plain.svg"
import css3Image from "../../images/css3-plain.svg"
import atomImage from "../../images/atom-original.svg"
import herokuImage from "../../images/heroku-plain.svg"
import yarnImage from "../../images/yarn-original.svg"

const TechStack = () => (
  <Main>
    <Heading>&#60;<Colorize color="#c678dd"> Tech_Stack </Colorize>/&#62;</Heading>
    <ImageContainer>
      <Image src={javascriptImage}/>
      <Image src={reactImage}/>
      <Image src={nodeImage}/>
      <Image src={railsImage}/>
      <Image src={rubyImage}/>
    </ImageContainer>
    <ImageContainer>
      <Image src={html5Image}/>
      <Image src={css3Image}/>
      <Image src={atomImage}/>
      <Image src={herokuImage}/>
      <Image src={yarnImage}/>
    </ImageContainer>
  </Main>
);

export default TechStack;
