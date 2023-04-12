import React, { useState } from "react";
import JSONDATA from "./words.json";


const WordSelector = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="WordSelector">
      <input
        type="text"
        placeholder="Søg efter ord her:"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((value) => {
        if (searchTerm === "") {
          return value;
        } else if (
          value.word.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return value;
        }
        return null;
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.word}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WordSelector;

