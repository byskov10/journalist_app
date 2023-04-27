const jsonData = [  {    "name": "Krigen i Ukraine",    "data": [      { "word": "gik", "value": 5 },      { "word": "ankom", "value": 5 },      { "word": "genforenet", "value": 5 },      { "word": "arbejdskraft", "value": 5 },      { "word": "ambassade", "value": 5 }    ]
}
];

function addColorToData(data) {
    return data.map(item => {
      const color = item.value > 20 ? "red" : "blue";
      return { ...item, color };
    });
  }
  
  function modifyJsonFile(json) {
    const modifiedData = json.map(item => {
      const data = addColorToData(item.data);
      return { ...item, data };
    });
    return modifiedData;
  }


const modifiedJsonData = modifyJsonFile(jsonData);
console.log(JSON.stringify(modifiedJsonData));
