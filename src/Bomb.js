// your Bomb code here!
import React, { Component } from "react";

export default class Bomb extends Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount,
    };
  }
  render() {
    const bombMessage =
      this.state.secondsLeft === 0
        ? "Boom!"
        : `${this.state.secondsLeft} seconds left before I go boom!`;
    return (
      <div>
        <h1>{bombMessage}</h1>
      </div>
    );
  }
}
