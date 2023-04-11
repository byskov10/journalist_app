import React, { useState } from 'react';
import { Range } from 'react-range';
import './Timeline_slider.css';

const STEP = 1;
const MIN = 1900;
const MAX = 2023;

const TimelineSlider = ({ onChange }) => {
  const [values, setValues] = useState([MIN, MAX]);

  const handleChange = (newValues) => {
    setValues(newValues);
    onChange(newValues);
  };

  return (
    <div className="timeline-slider">
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            className="timeline-slider__track"
            {...props}
            style={{
              ...props.style,
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            className="timeline-slider__thumb"
            {...props}
          />
        )}
      />
    </div>
  );
};

export default TimelineSlider;
