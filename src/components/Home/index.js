import React, { Component } from 'react'
import Typing from 'react-typing-animation'
import TypingArea from './components/TypingArea'
import Typed from './components/Typed'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: ""
    }
  }

  disableVisibility = () => {
    this.setState({ hidden: "true" })
  }

  render() {
    return (
      <TypingArea hidden={this.state.hidden}>
        <Typing speed={40}>
          <Typed>&#60;h1&#62;BradleyRyan.io&#60;&#47;h1&#62;</Typed>
          <Typing.Delay ms={1000}/>
          <Typed>git add index.js</Typed>
          <Typing.Delay ms={1000}/>
          <Typed>git commit -m "Build all the things"</Typed>
        </Typing>
        <Typing>

        </Typing>
        <Typing onFinishedTyping={this.disableVisibility}>
          <Typing.Delay ms={5000}/>
          <Typed>git push</Typed>
          <Typing.Delay ms={800}/>
        </Typing>
      </TypingArea>
    )
  }
}

export default Home
