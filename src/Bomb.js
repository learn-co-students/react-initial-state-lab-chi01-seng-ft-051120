import React, { Component } from 'react'

class Bomb extends Component {
    constructor(props){
      super()
      this.state = {
        secondsLeft: props.initialCount
      }
    }

    boomTime = () =>{
      return this.state.secondsLeft === 0 ? <p>Boom!</p> : <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    }

    render() {
      return (
        <div>
          {this.boomTime()}
        </div>)
    }
}

export default Bomb