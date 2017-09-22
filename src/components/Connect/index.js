import React from 'react';
import ImageContainer from '../global_components/ImageContainer';
import ConnectImage from './components/ConnectImage';
import ConnectLink from './components/ConnectLink';
import Heading from '../global_components/Heading';



const Connect = () => (
  <div>
    <Heading>&#60;Connect /&#62;</Heading>
    <ImageContainer>
      <ConnectLink href="https://www.linkedin.com/in/brad-conley/">
        <ConnectImage src="images/linkedin.png"/>
      </ConnectLink>
      <ConnectLink href="https://github.com/bradl3yC">
        <ConnectImage src="images/github.png"/>
      </ConnectLink>
      <ConnectLink href="https://twitter.com/BradConl3y">
        <ConnectImage src="images/twitter.png"/>
      </ConnectLink>
    </ImageContainer>
  </div>
);

export default Connect;
