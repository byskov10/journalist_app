import React, { useState } from 'react';
import './BubbleSearch.css';

function BubbleSearchBox({searchWord, setSearchWord}) {
  //const [searchWord, setSearchWord] = useState("")
  
  const handleFilter = (event) => {
    const searchedWord = event.target.value;
    return setSearchWord(searchedWord)
  }

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type="text" placeholder="Søg efter et ord" className="mr-sm-2 custom-search-box" onChange={handleFilter}/>
        <div>{console.log(searchWord)}</div>
      </div>
    </div>
  )
}

export default BubbleSearchBox;
