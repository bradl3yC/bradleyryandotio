// Dependencies
import React, { Component } from 'react';
import Typing from 'react-typing-animation';
// Internals
import TypingArea from './components/TypingArea';
import Typed from './components/Typed';
import Main from './components/Main';
import TopBar from './components/TopBar';
import RoundButton from './components/RoundButton';
// Externals
import TechStack from '../TechStack';
import Connect from '../Connect';
import About from '../About';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hideConsole: false,
      showMain: false,
    }
  }

  toggleVisibility = () => {
    this.setState({ hideConsole: true, showMain: true })
  }

  render() {
    return (
      <div>
        <TopBar hidden={this.state.hideConsole}>
          <RoundButton onClick={this.toggleVisibility} color={"#fc615d"} />
          <RoundButton color={"#fec242"} />
          <RoundButton color={"#35cd4b"} />
        </TopBar>
        <TypingArea hidden={this.state.hideConsole}>
          <Typing speed={25} onFinishedTyping={this.toggleVisibility}>
            <Typed>&#60;h1&#62;BradleyRyan.io&#60;&#47;h1&#62;</Typed>
            <Typing.Delay ms={1000}/>
            <Typed>git add index.js</Typed>
            <Typing.Delay ms={1000}/>
            <Typed>git commit -m "Build all the things"</Typed>
            <Typing.Delay ms={1000}/>
            <Typed>git push</Typed>
            <Typing.Delay ms={800}/>
          </Typing>
        </TypingArea>
        <Main visible={this.state.showMain}>
          <About />
          <TechStack />
          <Connect />
        </Main>
      </div>
    )
  }
}

export default Home
