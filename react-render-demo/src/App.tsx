
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">react render demo</h1>
        </header>
        <p className="App-intro" ml-color={'yellow'}>
          <div className="button-container">
            <button className="decrement-button" onClick={() => this.setState({ counter: this.state.counter - 1 })}>
              -
            </button>
            <div className="counter-text">{this.state.counter}</div>
            <button className="increment-button" onClick={() => this.setState({ counter: this.state.counter + 1 })}>
              +
            </button>
          </div>
        </p>
      </div>
    );
  }
}

export default App;