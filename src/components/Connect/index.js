// Dependencies
import React from 'react';
// Externals
import ImageContainer from '../global_components/ImageContainer';
import Heading from '../global_components/Heading';
import Colorize from '../global_components/Colorize';
// Internals
import ConnectImage from './components/ConnectImage';
import ConnectLink from './components/ConnectLink';



const Connect = () => (
  <div>
    <Heading>&#60;<Colorize color="#e06c75"> Connect </Colorize>/&#62;</Heading>
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
