import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'

class BaseLayout extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default BaseLayout
