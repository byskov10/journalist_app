import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import debounce from 'lodash.debounce';

function BubbleSlider({ BubbleAmount, setBubbleAmount, setDebouncedBubbleAmount, debouncedBubbleAmount }) {
  //const [debouncedBubbleAmount, setDebouncedBubbleAmount] = useState(BubbleAmount);

  const handleSliderChange = (newValue) => {
    setBubbleAmount(newValue);
  };

  return (
    <div>
      <p>Value: {BubbleAmount}</p>
      <Slider
        min={0}
        max={300}
        value={BubbleAmount}
        onChange={handleSliderChange}
      />
    </div>
  );
}

export default BubbleSlider;