import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

// MetricSlider component
function MetricSlider(props) {
  const { selectedMetric } = props;
  const [sliderValues, setSliderValues] = useState([selectedMetric.min, selectedMetric.max]);

  // Handle slider value changes
  function handleSliderChange(values) {
    setSliderValues(values);
  }

  return (
    <div>
      <Slider
        value={sliderValues}
        min={selectedMetric.min}
        max={selectedMetric.max}
        onChange={handleSliderChange}
        range
        style={{ width: '90%', paddingTop: '30px' }}
      />
      <div>
        <span style={{ float: 'right' }}>{sliderValues[1]}</span>
        <span>{sliderValues[0]}</span>
      </div>
    </div>
  );
}

export default MetricSlider;
