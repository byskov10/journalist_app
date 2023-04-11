import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

// Helper function to format date as YYYY-MM
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

// TimelineSlider component
function TimelineSlider() {
  const [sliderValue, setSliderValue] = useState(new Date('2018-01-01'));

  // Generate marks for each year and month
  const marks = {};
  let currentDate = new Date('2018-01-01');
  const endDate = new Date('2023-12-31');
  while (currentDate <= endDate) {
    marks[formatDate(currentDate)] = formatDate(currentDate);
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  // Handle slider value changes
  function handleSliderChange(value) {
    setSliderValue(new Date(value));
  }

  return (
    <div>
      <Slider
        value={sliderValue}
        min={new Date('2018-01-01').getTime()}
        max={new Date('2023-12-31').getTime()}
        onChange={handleSliderChange}
        marks={marks}
        step={86400000} // one day in milliseconds
        tipFormatter={(value) => formatDate(new Date(value))}
        style={{ width: '80%', margin: '0 auto' }}
      />
    </div>
  );
}

export default TimelineSlider;
