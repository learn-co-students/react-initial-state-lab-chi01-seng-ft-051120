// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {

  constructor(initialCount) {
    super(initialCount)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  timeLeft = () => {
    if (this.state.secondsLeft > 0 ) {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    } else {
      return "Boom!"
    }
  }

  render() {
    return (
      <div>
        {this.timeLeft()}
      </div>
    )
  }
}

export default Bomb;
