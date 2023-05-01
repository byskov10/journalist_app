import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './metricdropdown.css';

// Define metrics
const metrics = [
  { name: 'Vælg metrik'},
  { name: 'Visits', min: 0, max: 100000 },
  { name: 'Bounce rates', min: 0, max: 100 },
  { name: 'Visit duration', min: 0, max: 3600 }
];

// MetricDropdown component
function MetricDropdown(props) {
  const { selectedMetric, onMetricChange } = props;

  // Handle metric selection
  function handleMetricSelect(metric) {
    onMetricChange(metric);
  }

  return (
    <Dropdown className='metric-drowdown'>
      <Dropdown.Toggle variant="primary" size="xl" id="dropdown-basic">
        {selectedMetric.name}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {/* Map over metrics array to generate dropdown items */}
        {metrics.map(metric => (
          <Dropdown.Item key={metric.name} onClick={() => handleMetricSelect(metric)}>
            {metric.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MetricDropdown;