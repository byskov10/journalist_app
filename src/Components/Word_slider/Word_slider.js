import React, { Component } from "react";
//import "./styles.css";
import Range from "rc-slider";
import "rc-slider/assets/index.css";

class WordSlider extends Component {
  state = { sliderValues: [1, 100] };

  handleChange = (sliderValues) => {
    this.setState({ sliderValues });
  };

  render() {
    const { sliderValues } = this.state;

    return (
      <div className="mka__range-alignment">
        <div className="mka__range-text">
          <p>Vælg antal ord: {sliderValues[0]} - {sliderValues[1]}</p>
        </div>
        <div className="mka__range-btn-align">
          <div className="mka__range-width">
            <Range
              range
              onChange={this.handleChange}
              defaultValue={[0, 100]}
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

export default WordSlider;