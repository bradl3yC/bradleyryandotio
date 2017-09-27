// Dependencies
import React from 'react';
// Externals
import Heading from '../global_components/Heading';
import Colorize from '../global_components/Colorize';
// Internals
import Main from './components/Main';
import PortfolioImage from './components/PortfolioImage';
import PortfolioContainer from './components/PortfolioContainer';
import PortfolioText from './components/PortfolioText';
import PortfolioLink from './components/PortfolioLink';
import hangmanImage from '../../images/8bit-hangman.png';
import portfolioImage from '../../images/bradley-ryan.png';



const Portfolio = () => (
  <Main>
    <PortfolioContainer>
      <Heading>&#60;<Colorize color={"#fec242"}> 8Bit Hangman </Colorize>/&#62;</Heading>
      <PortfolioLink href="https://hangman-8bit.herokuapp.com/" >
        <PortfolioImage src={hangmanImage}/>
      </PortfolioLink>
      <PortfolioLink href="https://github.com/bradl3yC/8bit-hangman">https://github.com/bradl3yC/8bit-hangman</PortfolioLink>
      <PortfolioText>
        8Bit Hangman was written with Node and Express.  The 8Bit pictures were
        drawn with a HTML table and styled with CSS.  There are 3 difficulties
         which are based on the word length.
      </PortfolioText>
      <Heading>&#60;<Colorize color={"#c678dd"}> Bradleyryan.io </Colorize>/&#62;</Heading>
      <PortfolioLink href="https://bradleyryan.io" >
        <PortfolioImage src={portfolioImage}/>
      </PortfolioLink>
      <PortfolioLink href="https://github.com/bradl3yC/bradleyryandotio">https://github.com/bradl3yC/bradleyryandotio</PortfolioLink>
      <PortfolioText>
        This portfolio site was written with React.  It utilizes frameworks such as React-Router and Styled-Components.
      </PortfolioText>
    </PortfolioContainer>
  </Main>
);

export default Portfolio;
