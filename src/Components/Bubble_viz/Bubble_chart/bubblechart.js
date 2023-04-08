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
        format: '{point.name}',
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

function Bubble({setSelectedword, data}) {
  
  // Funktion som tager event-objektet for når en bruger klikker på en bubble i bubble chartet
  // Event objektet er et objekt med alt info om de events der er sket. Her går den ind i envent-objektet og derefter "point" og derfra tager den navnet (navnet på bubblen).
  function word_func (event) {
    if (event.point.name !=='Krigen i Ukraine') {
      // selectedword bliver defineret i child komponentet, dvs. Apps.js
      return setSelectedword(event.point.name)
  }}
  selectedwordfunc = word_func

  //data bliver lagt ind ved child komponentet, dvs. Apps.js. Det er en af paramtrene i Bubble-funktionen
  data_used = data

  return (
    <HighchartsReact highcharts={Highcharts} options={getOptions()} />
  );
}

export default Bubble;