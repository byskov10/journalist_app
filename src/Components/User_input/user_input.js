import React, { useState } from 'react';

function InputComponent () {
  const [userInputValue, setUserInputValue] = useState();

  const handleInputChange = (event) => {
    setUserInputValue(event.target.value);
  }

  return (
    <div>
      <label>Enter your name:</label>
      <input type="number" value={userInputValue} onChange={handleInputChange} />
      <p>Hello, {userInputValue}!</p>
    </div>
  );
}

export default InputComponent;
