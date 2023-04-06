import React, { useState } from 'react';
import MetricDropdown from './MetricDropdown';
import MetricSlider from './MetricSlider';

function MetricSelector() {
  const [selectedMetric, setSelectedMetric] = useState({ name: 'Visits', min: 0, max: 100000 });

  // Handle metric selection
  function handleMetricChange(metric) {
    setSelectedMetric(metric);
  }

  return (
    <div>
      <MetricDropdown selectedMetric={selectedMetric} onMetricChange={handleMetricChange} />
      <MetricSlider selectedMetric={selectedMetric} />
    </div>
  );
}

export default MetricSelector;
