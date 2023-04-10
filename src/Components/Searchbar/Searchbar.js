import React, { useState } from 'react';
import './Searchbar.css'

function SearchBar({data, setSelectedKategori, selectedKategori}) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.kategori.toLowerCase().includes(searchWord.toLowerCase());
    });
    
    if (searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter);
    }
  }
  const handleSelect = (kategori) => {
    setSelectedKategori(kategori); // save selected kategori to state
    setFilteredData([]);
    const searchInput = document.querySelector('.searchInputs input');
    if (searchInput) {
      searchInput.value = '';
    }
  };
  return (
    <div className='search'>
      <div>
        <h3>Søg på emne</h3>
      </div>
      <div className='searchInputs'>
        <input type="text" placeholder="Skriv et emne" onChange={handleFilter}/>
      </div>
      {filteredData.length !== 0 && (
      <div className='dataResult'>
        {
        filteredData.slice(0, 15).map((value, key) => {
          return (
            <a className='dataItem' onClick={() => handleSelect(value.kategori)}>
              <p>{value.kategori}</p>
            </a>
          );
        })}
      </div>
      )}
    </div>
  )
}

export default SearchBar;
