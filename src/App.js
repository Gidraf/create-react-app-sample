import React, { Component } from 'react';
import logo from './logo.svg';
import {Home} from './home';
import {Problem} from './problem';
import {Solution} from './solution';
import {Features} from './features';
import {Dashboard} from './dashboard';

class App extends Component {
  render() {
    return (
      <div>
      <Home/>
      <Problem/>
      <Solution/>
      <Features/>
      <Dashboard/>
      </div>
    );
  }
}

export default App;
