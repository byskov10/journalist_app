import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

function TimelineSlider() {
  const [value, setValue] = useState([2018, 2023]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const minLabel = (
    <div className="text-muted">{`Min: ${value[0]}`}</div>
  );
  const maxLabel = (
    <div className="text-muted">{`Max: ${value[1]}`}</div>
  );
  const valueLabel = (
    <div className="font-weight-bold">{`${value[0]} - ${value[1]}`}</div>
  );

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col">
          <RangeSlider
            min={2018}
            max={2023}
            step={1}
            value={value}
            onChange={handleChange}
            variant="primary"
            size="lg"
            tooltip="on"
            tooltipLabel={(value) => `${value}`}
            tooltipPlacement="top"
            tooltipStyle={{ backgroundColor: "#007bff", borderColor: "#007bff" }}
            allowOverlap
            range
            labels={{ min: minLabel, max: maxLabel, value: valueLabel }}
          />
        </div>
      </div>
    </div>
  );
}

export default TimelineSlider;
