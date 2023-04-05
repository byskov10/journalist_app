import React, { useState } from 'react';
import './Searchbar.css'

function SearchBar({placeholder, data}) {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedKategori, setSelectedKategori] = useState(null);
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
      <div className='searchInputs'>
        <input type="text" placeholder={placeholder} onChange={handleFilter}/>
        <div className='searcIcon'></div>
      </div>
      {filteredData.length != 0 && (
      <div className='dataResult'>
        { //slice(0, 15) gør at den kun viser de 15 bedste matches i dropdown
        filteredData.slice(0, 15).map((value, key) => {
          return (
            <a className='dataItem' onClick={() => handleSelect(value.kategori)}>
              <p>{value.kategori}</p>
            </a>
          );
        })}
      </div>
      )}
      {selectedKategori && <p>You selected {selectedKategori}</p>}
    </div>
  )
}

export default SearchBar;
