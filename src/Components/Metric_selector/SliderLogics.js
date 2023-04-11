import React, { useState } from 'react';
import MetricSlider from './MetricSlider';

function MetricSelector() {
  const [selectedMetric] = useState({ name: 'Visits', min: 2015, max: 2023 });

  return (
    <div>
      <MetricSlider selectedMetric={selectedMetric} />
    </div>
  );
}

export default MetricSelector;
