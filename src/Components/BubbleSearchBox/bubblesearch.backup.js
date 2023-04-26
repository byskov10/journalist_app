import React, { useState } from 'react';
import './BubbleSearch.css';

function BubbleSearchBox({data, setSelectedTopic, selectedTopic}) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.data.word.toLowerCase().includes(searchWord.toLowerCase());
    });
    
    if (searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter);
    }
  }
  const handleSelect = (topic) => {
    setSelectedTopic(topic); // save selected kategori to state
    setFilteredData([]);
  };
  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type="text" placeholder="Skriv et emne" onChange={handleFilter} className="mr-sm-2 custom-search-box"/>
      </div>
    </div>
  )
}

export default BubbleSearchBox;
