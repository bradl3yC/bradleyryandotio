import React, { Component } from 'react';
import NavBar from '../NavBar';
import Main from './components/Main';

class BaseLayout extends Component {
  render() {
    return (
      <Main>
        <NavBar />
        {this.props.children}
      </Main>
    );
  }
}

export default BaseLayout;
