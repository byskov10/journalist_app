import React, { useState } from 'react';
import './Searchbar.css'
import SearchIcon from './SearchIcon';

function SearchBar({data, setSelectedTopic, selectedTopic}) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.topic.toLowerCase().includes(searchWord.toLowerCase());
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
    const searchInput = document.querySelector('.searchInputs input');
    if (searchInput) {
      searchInput.value = '';
    }
  };
  return (
    <div className='search'>
      <div className='searchInputs'>
        <form>
          <button style={{border: 'none', background: 'none'}}>
            <SearchIcon />
          </button>
          <input type="search" placeholder="Skriv et emne.." onChange={handleFilter}/>
        </form>
      </div>
      {filteredData.length !== 0 && (
      <div className='dataResult'>
        {
        filteredData.slice(0, 15).map((value, key) => {
          return (
            <a className='dataItem' onClick={() => handleSelect(value.topic)}>
              <p>{value.topic}</p>
            </a>
          );
        })}
      </div>
      )}
    </div>
  )
}

export default SearchBar;