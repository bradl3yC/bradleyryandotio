import React, { Component } from 'react'
import Typing from 'react-typing-animation'
import TypingArea from './components/TypingArea'
import Typed from './components/Typed'
import Main from './components/Main'

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
        <TypingArea hidden={this.state.hideConsole}>
          <Typing speed={40} onFinishedTyping={this.toggleVisibility}>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dignissimos accusamus tenetur officiis corporis debitis labore, dolores nam? Soluta saepe nulla rem eius hic non quidem quod. Pariatur, eum, tempore.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae incidunt quis, et qui fuga nobis illum obcaecati cumque totam reiciendis ullam quidem voluptas labore quae optio laborum, iste esse, similique.</p>
        </Main>
      </div>
    )
  }
}

export default Home
