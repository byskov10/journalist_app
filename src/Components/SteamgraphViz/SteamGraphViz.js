import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Streamgraph from 'highcharts/modules/streamgraph';

Streamgraph(Highcharts);

const data = [
  {
    name: 'Category 1',
    data: [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
  },
  {
    name: 'Category 2',
    data: [0, 0, 1, 1, 1, 2, 2, 2, 3, 4]
  },
  {
    name: 'Category 3',
    data: [2, 2, 2, 2, 2, 2, 2, 1, 1, 1]
  },
  {
    name: 'Category 4',
    data: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2]
  },
  {
    name: 'Category 5',
    data: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    name: 'Category 6',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
  },
  {
    name: 'Category 7',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
  },
  {
    name: 'Category 8',
    data: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
  },
  {
    name: 'Category 9',
    data: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
  },
  {
    name: 'Category 10',
    data: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
  }
];

const options = {
  chart: {
    type: 'streamgraph'
  },
  title: {
    text: 'Streamgraph with 10 Data Series'
  },
  xAxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
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
  series: data
};
 


const SteamGraphViz = () => {
  return (
    <div style={{height: '100%', border: '1px black solid'}}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default SteamGraphViz;