import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import _ from 'lodash';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsMore from 'highcharts/highcharts-more';

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
  tooltip: {
    formatter: function () {
      return '<b>' + this.point.word + '</b><br>' + 'Antal ord: ' + this.point.visits;
    },
  },
  series: data_used,
  credits: {
    enabled: false,
  },
});

function Bubble({setSelectedWord, TopicWord, BubbleAmount, data, searchWord}) {

  const FilterData = (name, bubbleamount) => {
    const newWordArray = data.filter((topic) => {
      return topic.name === name;
    });
  
    if (newWordArray.length === 0) {
      return []; // If topic with the given name doesn't exist, return empty array
    }
  
  // Adding a color property to each data object based on its value
  const maxBlueValue = 228;
  const minBlueValue = 50; // New minimum blue value to increase contrast
  const range = maxBlueValue - minBlueValue;
  const maxValue = Math.max(...newWordArray[0].data.map(d => d.visits));
  const minValue = Math.min(...newWordArray[0].data.map(d => d.visits));
  const logRange = Math.log10(maxValue + 1) - Math.log10(minValue + 1);
  const modifiedData = newWordArray[0].data.map((d) => {
    const logValue = (Math.log10(d.visits + 1) - Math.log10(minValue + 1)) / logRange;
    const lightness = Math.round(((1 - logValue) * range) + minBlueValue);
    const color = `hsl(240, 100%, ${lightness}%)`; // 240 is the hue for blue color
    return { ...d, color };
  });
  
  
  
    const sortedData = newWordArray[0].data.sort((a, b) => b.value - a.value);
  
    if (searchWord.length === 0) {
      var newData = [...modifiedData]; // Make a copy of the modified data array
      if (name !== null) {
        newData.splice(bubbleamount); // Use splice to remove items from the end of the array
      }
    } else {
      var dataset = [...newWordArray[0].data];
      newData = dataset.filter((topic) => {
        return topic.word.toLowerCase().includes(searchWord.toLowerCase());
      });
    }
    return { ...sortedData[0], data: newData }; // Return an object with the updated data array
  };
  



  // Funktion som tager event-objektet for når en bruger klikker på en bubble i bubble chartet
  // Event objektet er et objekt med alt info om de events der er sket. Her går den ind i envent-objektet og derefter "point" og derfra tager den navnet (navnet på bubblen).
  const word_func = (event) => {
    if (event.point.name !==TopicWord) {
      // selectedword bliver defineret i child komponentet, dvs. Apps.js
      return setSelectedWord(event.point.word);
  }};
  selectedwordfunc = word_func;
  //data bliver lagt ind ved child komponentet, dvs. Apps.js. Det er en af paramtrene i Bubble-funktionen
  data_used = FilterData(TopicWord,BubbleAmount);

  return (
    <HighchartsReact highcharts={Highcharts} options={getOptions()} />
  );
}

export default Bubble;