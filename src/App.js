import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      count:  0
    }

  }

  handleUp = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      if(prevState.count < 20) {
        return {
          count: prevState.count + 1
        }
      }
    })
  }

  handleDown = () => {
    this.setState((prevState) => {
      if(prevState.count >= 1) {
        return {
          count: prevState.count - 1
        }
      }
    })
  }

  handleReset = (e) => {
    e.preventDefault();
    this.setState({
      count: 0
    })
  }


  render() {
    return (
      <div className="Wrapper">
        <br/><br/>
        <h1>{this.state.count}</h1><br/>
        <button onClick={this.handleUp}>Up</button>
        <button onClick={this.handleDown}>Down</button>
        <button onClick={this.handleReset}>Reset</button><br/><br/>
        <p className="Text">This counter goes only from 0 to 20.<br/>Reset button will reset counter to 0.</p>
      </div>
    );
  }
}
