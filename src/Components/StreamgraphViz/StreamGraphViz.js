import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Streamgraph from 'highcharts/modules/streamgraph';
import data from './StreamGraphData.json';

Streamgraph(Highcharts);

const SteamGraphViz = ({ wordIds }) => {
  const filteredData = data.filter((d) => wordIds.includes(Number(d.articleid)));

  const options = {
    chart: {
      type: 'streamgraph'
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    label: {
      onArea: false
    },
    xAxis: {
      categories: filteredData[0]?.data?.map((d) => d.date) || [], // map the dates from the first item's data array
      labels: {
        align: 'left',
        reserveSpace: true,
        rotation: 60
      }
    },
    yAxis: {
      visible: false,
    },
    legend: {
      enabled: false,
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
      name: d.name,
      data: d.data.map((dd) => Number(dd.visits))
    })) // map each item's data array to a Highcharts-compatible data array
  };

  return (
    <div style={{ height: '100%' }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default SteamGraphViz;
