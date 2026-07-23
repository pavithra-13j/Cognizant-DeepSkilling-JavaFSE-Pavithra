import React, { Component } from "react";

class Counter extends Component {

  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    alert("Hello! Counter Increased.");
  };

  incrementAndHello = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  onPress = () => {
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Counter : {this.state.count}</h1>

        <button onClick={this.incrementAndHello}>Increment</button>

        <button onClick={this.decrement} style={{ marginLeft: "10px" }}>
          Decrement
        </button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome")}>
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.onPress}>
          Synthetic Event
        </button>
      </div>
    );
  }
}

export default Counter;