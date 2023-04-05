import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

function DualThumbSlider() {
  const [value, setValue] = useState({ min: 2019, max: 2022 });

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Form style={{ width: "90%", textAlign: "center" }}>
      <Form.Group controlId="formRange">
        <Form.Label style={{ padding: "1em" }}>Tidsperiode</Form.Label>
        <InputRange 
          minValue={2018} 
          maxValue={2023} 
          value={value} 
          onChange={handleChange} 
        />
        <Form.Text>
          Årstal: {value.min} - {value.max}
        </Form.Text>
      </Form.Group>
    </Form>
  );
}

export default DualThumbSlider;
