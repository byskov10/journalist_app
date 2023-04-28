



const FilterData = (name, b) => {
    const newWordArray = data.filter((topic) => {
      return topic.name === name;
    });
  
    if (newWordArray.length === 0) {
      return []; // If topic with the given name doesn't exist, return empty array
    }
  
    // Add color key to each data object based on value
    const modifiedData = newWordArray[0].data.map((d) => ({
      ...d,
      color: d.value > 20 ? "red" : "blue",
    }));
  
    const sortedData = modifiedData.sort((a, b) => b.value - a.value);
  
    const newData = [...modifiedData]; // Make a copy of the modified data array
    if (name !== null) {
      newData.splice(b); // Use splice to remove items from the end of the array
    }
  
    return { ...sortedData[0], data: newData }; // Return an object with the updated data array
  };


  ////////
  const FilterData = (name, b) => {
    const newWordArray = data.filter((topic) => {
      return topic.name === name;
    });
  
    if (newWordArray.length === 0) {
      return []; // If topic with the given name doesn't exist, return empty array
    }

//ændringer i filter med farve

    var modifiedData = newWordArray[0].data.map((d) => ({
      ...d,
      color: d.value > 5 ? "red" : "blue",
    }));

    
    const sortedData = modifiedData[0].data.sort((a, b) => b.value - a.value);

    if (searchWord.length === 0) {
      var newData = [...newWordArray[0].data]; // Make a copy of the data array
      if (name !== null) {
        newData.splice(b); // Use splice to remove items from the end of the array
      }
    } else {
      var dataset = [...newWordArray[0].data];
      newData = dataset.filter((topic) => {
        return topic.word.toLowerCase().includes(searchWord.toLowerCase());
      });
    }
    return { ...sortedData[0], data: newData }; // Return an object with the updated data array
  };
  
  


  const maxGreenValue = 228;
  const modifiedData = newWordArray[0].data.map((d) => {
    const greenValue = Math.round(((maxGreenValue - d.value) / maxGreenValue) * 255);
    const greenHex = greenValue.toString(16).padStart(2, "0");
    const color = `#${greenHex}ff${greenHex}`;
    return { ...d, color };
  });