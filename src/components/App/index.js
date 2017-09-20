// Dependencies
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Internals
import Home from '../Home';
import Portfolio from '../Portfolio';
import BaseLayout from '../BaseLayout'
import About from '../About'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <BaseLayout>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
          </BaseLayout>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
