import React from "react";

class ImageSlider extends React.Component {
  // Constructor
  // Super
  // Set State
  constructor() {
    super();
    this.state = {
      currentSlideIndex: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>I am on slide {this.state.currentSlideIndex}</h1>
      </div>
    );
  }

  // Render Method
  // Return
}

export default ImageSlider;
