import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Streamgraph from 'highcharts/modules/streamgraph';
import data from './artikelData.json';

Streamgraph(Highcharts);



const seriesData = data.map(item => {
    return {
      name: item.Titel,
      data: Object.values(item).slice(1)
    }
  });



const options = {
  chart: {
    type: 'streamgraph'
  },
  title: {
    text: 'Streamgraph with 10 Data Series'
  },
  xAxis: {
    labels: {
      align: 'left',
      reserveSpace: false,
      rotation: 270
    }
  },
  yAxis: {
    visible: false
  },
  legend: {
    enabled: true,
    title: {
      text: 'Categories',
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
  series: seriesData
};
 


const SteamGraphViz = () => {
  return (
    <div style={{height: '100%', border: '1px black solid'}}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default SteamGraphViz;
