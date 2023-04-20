import React, { useState } from 'react';
import './Searchbar.css'
import SearchIcon from './SearchIcon';

function SearchBar({ data }) {
  const [searchInput, setSearchInput] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showCross, setShowCross] = useState(false); // new state variable

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.topic.toLowerCase().includes(searchWord.toLowerCase());
    });

    setSearchInput(searchWord);
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    setShowCross(false); // hide cross button when search input changes
  };

  const handleSelect = (topic) => {
    setSelectedTopic(topic);
    setSearchInput(topic);
    setFilteredData([]);
    setShowCross(true); // show cross button when a topic is selected
  };

  const handleReset = () => {
    setSelectedTopic("");
    setSearchInput("");
    setShowCross(false); // hide cross button when resetting
  };

  return (
    <div className="search">
      {!selectedTopic ? (
        <div className="searchInputs">
          <form>
            <button style={{border: 'none', backgroundColor: 'transparent'}}>
              <SearchIcon />
            </button>
            <input
              type="search"
              placeholder="Skriv et emne.."
              value={searchInput}
              onChange={handleFilter}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  setSelectedTopic(searchInput);
                  setShowCross(true); // show cross button when Enter key is pressed
                }
              }}
            />
          </form>
          {filteredData.length !== 0 && (
            <div className="dataResult">
              {filteredData.slice(0, 15).map((value, key) => {
                return (
                  <a
                    key={key}
                    className="dataItem"
                    onClick={() => handleSelect(value.topic)}
                  >
                    <p>{value.topic}</p>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="searchWord">
          <span>{selectedTopic}</span>
          {showCross && (
            <button className="resetButton" onClick={handleReset}>
              &#x2715;
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
