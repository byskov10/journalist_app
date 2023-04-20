import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function BubbleSlider({BubbleAmount, setBubbleAmount}) {
  //const [value, setValue] = useState(50);

  const handleSliderChange = (newValue) => {
    setBubbleAmount(newValue);
  };

  return (
    <div>
            <p>Value: {BubbleAmount}</p>
      <Slider min={0} max={1000} value={BubbleAmount} onChange={handleSliderChange} />
    </div>
  );
}

export default BubbleSlider;