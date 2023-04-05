// importer også useState, som er en del af react-biblioteket.
// useState gør at et component husker dataen der er genereret fra en interaktion, som brugeren har foretaget, og ændrer sit udseende(state) efter det.
// Alle "use" komponenter i react anvender "Hooks", som er et alternativ istedet for at lave en class. Hooks kræver meget mindre kode, end at lave en ny class.
import React, { useState } from 'react';
import './Searchbar.css'

function SearchBar({placeholder, data}) {

  // Her gør vi brug af en useState-function. useState er bygget op af [variabelnavn, funktion_som_ændrer_variablen] = useState(default_værdi_for_variablen)
  // Det vil sige her er:
  //    filteredData = Ny variabel
  //    setFilteredData = navn på funktion, som kan ændrer filteredData
  //    useState([]) = default for variablen filteredData er en tom array []
  const [filteredData, setFilteredData] = useState([]);
  const [selectedKategori, setSelectedKategori] = useState(null);

  // handleFilter er en funktion vi anvender i <input>, når brugeren skriver et ord ind.
  // Når brugeren skriver noget i <input> feltet skabes et event-objekt (en json, som beskriver eventet ud fra forskellige parametre). Det sker altid når brugeren interagere med en hjemmeside, fx også med click-event.
  // Funktionen tager event-objektet ind som parameter.
  const handleFilter = (event) => {
    // searchWord = den "value", som brugeren har skrevet ind i inputtet som del af eventet.
    const searchWord = event.target.value;
    
    // .filter() er en method, som  iterere igennem et array eller objekt hvor value repræsenterer iterationen (for i in... i python), og returnere de elementer, som man opsætter logik for i "return".
    const newFilter = data.filter((value) => {
      // Her returnerer vi alle objekter hvor værdier i "kategori"-sektionen i objektet indeholder de samme værdier som searchWord.
      // tager højde for store og små bogstaver med .toLowerCase
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
        // .map
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
