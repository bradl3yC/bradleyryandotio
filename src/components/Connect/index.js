import React from 'react';
import ImageContainer from '../global_components/ImageContainer';
import Image from '../global_components/Image';
import Heading from '../global_components/Heading';



const Connect = () => (
  <div>
    <Heading>&#60;Connect /&#62;</Heading>
    <ImageContainer>
      <Image src="images/linkedin.svg"/>
      <Image src="images/github-original.svg"/>
      <Image src="images/twitter-original.svg"/>
    </ImageContainer>
  </div>
);

export default Connect;
