import React, { Component } from "react";
//import "./styles.css";
import Range from "rc-slider";
import "rc-slider/assets/index.css";

class BubbleSlider extends Component {
  state = { sliderValues: [50] };

  handleChange = (sliderValues) => {
    this.setState({ sliderValues });
  };

  render() {
    const { sliderValues } = this.state;

    return (
      <div className="mka__range-alignment">
        <div className="mka__range-text">
          <p>Antal Bobler: {sliderValues[0]}</p>
        </div>
        <div className="mka__range-btn-align">
          <div className="mka__range-width">
            <Range
              range
              onChange={this.handleChange}
              defaultValue={[50]}
              min={0}
              max={100}
              //min og maks skal komme an på hvor mange bobler der er
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BubbleSlider;