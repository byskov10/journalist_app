import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import _ from 'lodash';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsMore from 'highcharts/highcharts-more';


HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsMore(Highcharts);

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
  function word_func (event) {
    if (event.point.name ==='Krigen i Ukraine') {
      return
    } else {
    return (
      setSelectedword(event.point.name)
      )
  }}

  data_used = data

  selectedwordfunc = word_func

  return (
    <HighchartsReact highcharts={Highcharts} options={getOptions()} />
  );
}

export default Bubble;