import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './parent';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">主人暂时离开。。。</h1>
        </header>
        <Parent/>
      </div>
    );
  }
}

export default App;
