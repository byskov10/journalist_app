import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import data from './data_input.json';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import './trendline.css';
import MetricDropdown from './dropdown.js'

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

const options_2 = (data) => ({
  chart: {
    type: 'line'
  },
  series: [{
      yAxis: 0,
      data: data
  }],
  title: {
    text: ''
  }
})

const Linechart = () => {
  const [selectedMetric, setSelectedMetric] = useState({ name: 'Ingen sammenligning'});

  // Handle metric selection
  function handleMetricChange(metric) {
    setSelectedMetric(metric);
  }

  return (
    <Container fluid>
      <h3 className="headline">Trendline</h3>
      <MetricDropdown
        selectedMetric={selectedMetric}
        onMetricChange={handleMetricChange} />
      <HighchartsReact 
        highcharts={Highcharts}
        options={options(data)} />
    </Container>
)}

export default Linechart;