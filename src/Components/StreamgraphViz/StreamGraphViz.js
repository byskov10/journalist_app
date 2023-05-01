import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Streamgraph from 'highcharts/modules/streamgraph';
import data from './StreamGraphData.json';

Streamgraph(Highcharts);

const SteamGraphViz = ({ wordIds }) => {
  const filteredData = data.filter((d) => wordIds.includes(Number(d.Id)));

  const options = {
    chart: {
      type: 'streamgraph'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: filteredData[0]?.Data?.map((d) => d.Date) || [], // map the dates from the first item's data array
      labels: {
        align: 'left',
        reserveSpace: false,
        rotation: 0
      }
    },
    yAxis: {
      visible: false
    },
    legend: {
      enabled: true,
      title: {
        text: '',
        style: {
          fontSize: '16px', // change the font size as desired
          fontWeight: 'bold' // add font weight if needed
        }
      }
    },
    plotOptions: {
      series: {
        fillOpacity: 0.8,
        curveFactor: 10
      }
    },
    series: filteredData.map((d) => ({
      name: d.Title,
      data: d.Data.map((dd) => Number(dd.Visits))
    })) // map each item's data array to a Highcharts-compatible data array
  };

  return (
    <div style={{ height: '100%' }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default SteamGraphViz;
