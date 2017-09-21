import React, { Component } from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import Main from './components/Main'

class BaseLayout extends Component {
  render() {
    return (
      <Main>
        <NavBar />
        {this.props.children}
        <Footer />
      </Main>
    )
  }
}

export default BaseLayout
