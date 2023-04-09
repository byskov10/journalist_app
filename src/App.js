import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import nyheder from './Components/Searchbar/nyheder_i_dk.json';
import { useState } from 'react';
import Bubble from './Components/Bubble_viz/Bubble_chart/bubblechart';
import data_emne from './Components/Bubble_viz/Bubble_chart/data.json';
import Linechart from './Components/Trendline_graph/trendline';
import MetricSelector from './Components/Metric_selector/MetricSelector';
import SearchBar from './Components/Searchbar/Searchbar';

function Layout() {

  // Hook for det data vi skal bruge
  const [data, setData] = useState(data_emne);
  // Hook for det ord, brugeren har trykket på i bubble chart
  const [selectedword, setSelectedword] = useState("");

  const [selectedTopic, setSelectedTopic] = useState(null);
  
  return (
    <Container fluid className='vh-100'>
      <Row style={{ height: '13%'}}>
        <Col lg={8} className="bg-primary">
          <Row><SearchBar /></Row>
        </Col>
        <Col xs={4}></Col>
      </Row>
      <Row style={{ height: '87%'}}>
        <Col lg={4}>
          <Row style={{ height: '40%'}}>
            <MetricSelector />
          </Row>
          <Row className='' style={{ height: '60%'}}>
            <Linechart className='linechart'/>
          </Row>
        </Col>
        <Col lg={8} className=''>
          <Row><Bubble setSelectedword={setSelectedword} data={data} /></Row>
          <Row>{selectedword}</Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;




