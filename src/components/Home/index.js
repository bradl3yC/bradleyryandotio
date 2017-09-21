import React, { Component } from 'react'
import Typing from 'react-typing-animation'
import TypingArea from './components/TypingArea'

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
        <Typing speed={40} onFinishedTyping={this.disableVisibility}>
          <p>&#60;h1&#62;BradleyRyan.io&#60;&#47;h1&#62;</p>
          <Typing.Delay ms={1000}/>
          <p>git add index.js</p>
          <Typing.Delay ms={1000}/>
          <p>git commit -m "Build all the things"</p>
          <Typing.Delay ms={1000}/>
          <p>git push</p>
          <Typing.Delay ms={800}/>
        </Typing>
      </TypingArea>
    )
  }
}

export default Home
