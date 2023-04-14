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
    },
    credits: {
        enabled: false
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
    <Row>
      <Col>
        <h3 className="headline">Trendline</h3>
      </Col>
      <Col>
        <MetricDropdown
         selectedMetric={selectedMetric}
         onMetricChange={handleMetricChange} />
      </Col>
    </Row>
    <Row>
      <Col>
      <HighchartsReact 
        highcharts={Highcharts}
        options={options(data)} />
        </Col>
    </Row>
    </Container>
)}

export default Linechart;