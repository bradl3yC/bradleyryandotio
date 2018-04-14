// Dependencies
import React, { Component } from 'react';
// Internals
import Main from './components/Main';
// Externals
import TechStack from '../TechStack';
import Connect from '../Connect';
import About from '../About';

class Home extends Component {

  render() {
    return (
      <Main>
        <About />
        <TechStack />
        <Connect />
      </Main>
    )
  }
}

export default Home
