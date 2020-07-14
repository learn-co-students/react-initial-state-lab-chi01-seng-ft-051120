import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super()

    this.state = {
      secondsLeft: props.initialCount
    }
  }
  secondsLeft = () => {
    this.setState({
      currentSlideIndex: this.state.secondsLeft
    })
  }

  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

      return (
        <div>{message}</div>
      )
    }
}