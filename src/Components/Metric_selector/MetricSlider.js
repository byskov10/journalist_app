import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const MIN_YEAR = 2015;
const MAX_YEAR = 2023;

function TimelineSlider(props) {
  const { onYearChange } = props;

  const [yearRange, setYearRange] = useState([MIN_YEAR, MAX_YEAR]);

  const handleYearChange = (newRange) => {
    setYearRange(newRange);
    onYearChange(newRange);
  };

  return (
    <div>
      <Slider
        min={MIN_YEAR}
        max={MAX_YEAR}
        range={true}
        value={yearRange}
        onChange={handleYearChange}
        step={1}
        marks={{
          [MIN_YEAR]: MIN_YEAR,
          [MAX_YEAR]: MAX_YEAR,
        }}
      />
      <div>
        {yearRange[0]} - {yearRange[1]}
      </div>
    </div>
  );
}

export default TimelineSlider;
