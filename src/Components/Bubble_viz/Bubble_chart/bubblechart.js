import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import _ from 'lodash';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsMore from 'highcharts/highcharts-more';
import { useState } from 'react';

//https://betterprogramming.pub/meeting-more-chart-types-bubble-packed-bubble-stream-graph-and-cylinder-7f625c88047d

// Highcharts modules
HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsMore(Highcharts);

// Definere tomme variable, som først anvendes i getOptions(indstillinger for bubble chart), og i Bubble function lægges der noget data ind i dem.
var selectedwordfunc;
var data_used;

const getOptions = () => ({
  chart: {
    type:'packedbubble',
    width: 1200,
    height: 700,
    backgroundColor: 'transparent',
  },
  title: {
    text: _.startCase(""),
  },
  plotOptions: {
    packedbubble: {
      minSize: '30%',
      maxSize: '100%',
      useSimulation: false,
      dataLabels: {
        enabled: true,
        format: '{point.word}',
      },
      enableMouseTracking: true,
      events:  {
                click: selectedwordfunc
      }
    },
  },
  series: data_used,
  credits: {
    enabled: false,
  },
});


//der skal addeds et argument ligesom TopicWord ift til value
function Bubble({setSelectedword, TopicWord, BubbleAmount, data}) {

  const FilterData = (name, b) => {
    const newWordArray = data.filter((topic) => {
      return topic.name === name;
    });
    
    if (newWordArray.length === 0) {
      return []; // If topic with the given name doesn't exist, return empty array
    }
  //hvis der ikke køres noget filter køres functionen ikke
    if (name !== null) {
      // antal defineres i slice! - virker
      const newData = newWordArray[0].data.slice(0, b);
      newWordArray[0].data = newData;
    }
  
    return newWordArray // Return first two objects of the data array
  };


  //[0].data.slice(0, 2);
  

// name - word - value
// jeg har tilføjet value så funktionen tager både name og value som argument for filtreringen
// det burde være lige meget at returning er filteredData og ikke newWordArray
// topic er blot et parameter (kan hede whatever)

/*

  const FilterData = (name, value) => {
    const filteredData = data.filter((topic) => {
      return topic.name === name && topic.value === value;
    });
    return filteredData;
  }
*/
/*
  const FilterData = (name, value) => {
    const filteredData = data.filter((t) => {
      return t.name === name && t.data.some((item) => item.value === value);
    });
    return filteredData;
  }

*/

//tage 3 første items. så sorter json fil på value?
  
/*
  const FilterData = (name) => {
  const topic = data.find((topic) => topic.name === name);
  if (topic) {
    const firstThreeItems = topic.data.slice(0, 2);
    return firstThreeItems;
  }
  return null;
}


*/

/*
const FilterData = (name, value) => {
  const topic = data.find((topic) => topic.name === name);
  if (topic) {
    const item = topic.data.find((item) => item.value === value);
    return item ? item : null;
  }
  return null;
}
*/

// denne funktion omhandler når brugeren klikker på et ord: 
  // Funktion som tager event-objektet for når en bruger klikker på en bubble i bubble chartet
  // Event objektet er et objekt med alt info om de events der er sket. Her går den ind i envent-objektet og derefter "point" og derfra tager den navnet (navnet på bubblen).
  /*
  const word_func = (event) => {
    if (event.point.name !==TopicWord) {
      // selectedword bliver defineret i child komponentet, dvs. Apps.js
      return setSelectedword(event.point.word);
  }};


  selectedwordfunc = word_func;

  */
  //data bliver lagt ind ved child komponentet, dvs. Apps.js. Det er en af paramtrene i Bubble-funktionen
// lav topicValue

  //data_used = FilterData(TopicWord, BubbleAmount);
  data_used = FilterData(TopicWord, BubbleAmount);

  //udskriv data_used
  console.log(data_used)

  return (
    <HighchartsReact highcharts={Highcharts} options={getOptions()} />
  );
}

export default Bubble;