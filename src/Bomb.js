import React from "react";

class Bomb extends React.Component {
  // Constructor
  // Super
  // Set State
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount,
    };
  }

  render() {
    const message =
      this.state.secondsLeft === 0
        ? "Boom!"
        : `${this.state.secondsLeft} seconds left before I go boom!`;

    return <div>{message}</div>;
  }

  // Render Method
  // Return
}

export default Bomb;
