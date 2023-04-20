import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function MetricSelector() {
  const [selectedMetric, setSelectedMetric] = useState({ name: 'Visits', min: 2015, max: 2023 });

  // Handle selected metric changes
  function handleMetricChange(metric) {
    setSelectedMetric(metric);
  }

  return (
    <div>
      <Slider
        value={[selectedMetric.min, selectedMetric.max]}
        min={selectedMetric.min}
        max={selectedMetric.max}
        onChange={(values) => setSelectedMetric({ ...selectedMetric, min: values[0], max: values[1] })}
        range
        style={{ width: '300px'}}
      />
      <div>
        <span style={{ float: 'right' }}>Max: {selectedMetric.max}</span>
        <span>Min: {selectedMetric.min}</span>
      </div>
    </div>
  );
}

export default MetricSelector;
