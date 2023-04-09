import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import data from './data_input.json';
import { Container, Row, Col } from 'react-bootstrap';
import './trendline.css';

const options = (data) => ({
    chart: {
      type: 'line'
    },
    yAxis: [{}, {}],
    series: [{
        yAxis: 0,
        data: data[0]
    }, {
      yAxis: 1,
      data: data[1]
    }],
    title: {
      text: ''
    }
})

const Linechart = () => {
  return (
    <Container fluid>
      <h3 className="headline">Trendline</h3>
      <HighchartsReact 
        highcharts={Highcharts} 
        options={options(data)}  />
    </Container>
)}

export default Linechart;