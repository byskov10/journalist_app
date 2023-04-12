import React, { useState } from 'react';
import words from './words.json';

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredWords = words.filter((word) =>
    word.word.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <ul>
        {filteredWords.map((word) => (
          <li key={word.id}>{word.word}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBox;
