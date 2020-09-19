
import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './index.css';

class Demo extends Component {
  constructor(props) {
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
        <p className="App-intro">
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
    //   <div className="App">
    //   <div className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <div className="App-title">react render demo</div>
    //   </div>
    //   <div className="App-intro">
    //     <div className="button-container">
    //       <button className="decrement-button" onClick={() => this.setState({ counter: this.state.counter - 1 })}>
    //         -
    //       </button>
    //       <div className="counter-text">{this.state.counter}</div>
    //       <button className="increment-button" onClick={() => this.setState({ counter: this.state.counter + 1 })}>
    //         +
    //       </button>
    //     </div>
    //   </div>
    // </div>
    );
  }
}

export default Demo;