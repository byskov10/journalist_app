import React, { useState } from 'react';
import './BubbleSearch.css';

function BubbleSearchBox({data}) {
  const [searchWord, setSearchWord] = useState("")
  
  const handleFilter = (event) => {
    const searchedWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.data.word.toLowerCase().includes(searchWord.toLowerCase());
    });
  }

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type="text" placeholder="Skriv et emne" className="mr-sm-2 custom-search-box" onChange={handleFilter}/>
        <div>{console.log(searchWord)}</div>
      </div>
    </div>
  )
}

export default BubbleSearchBox;
