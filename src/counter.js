import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button
          className="btn btn-primary btn-md"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default Counter;
