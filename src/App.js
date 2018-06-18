import React, { Component } from 'react';
import Mainrouter from './router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="WWW">
        <Mainrouter></Mainrouter>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
