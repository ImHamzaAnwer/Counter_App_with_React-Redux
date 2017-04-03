import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {counter : 0};
    this._count = this._add.bind(this);
    this._substract = this._substract.bind(this);
  }

  _add(){
    this.setState({
      counter: this.state.counter + 1
    });
  }

  _substract(){
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Couter App</h2>
        </div>
        <div>
          <h1>{this.state.counter}</h1>
          <button onClick={this._add.bind(this)}>Add +</button>
          <button onClick={this._substract.bind(this)}>Substract -</button>
        </div>
      </div>
    );
  }
}

export default App;
