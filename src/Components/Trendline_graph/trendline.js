import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import data from './data_input.json';
import './trendline.css';

const options = (data) => ({
    credits: {
        enabled: false
    },
    series: [{
        data: data
    }],
    title: {
      text: ''
    }
})

const Linechart = () => {
  return (
  <>
  <h3 className="headline">Trendline</h3>
  <HighchartsReact 
    highcharts={Highcharts} 
    options={options(data)} 
  />
  </>
)}

export default Linechart;