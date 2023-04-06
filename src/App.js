import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import nyheder from './Components/Searchbar/nyheder_i_dk.json';
import { useState } from 'react';
import Bubble from './Components/Bubble_viz/Bubble_chart/bubblechart';
import data_emne from './Components/Bubble_viz/Bubble_chart/data.json';
import MetricSelector from './Components/Metric_selector/MetricSelector';

function Layout() {

  // Hook for det data vi skal bruge
  const [data, setData] = useState(data_emne);
  // Hook for det ord, brugeren har trykket på i bubble chart
  const [selectedword, setSelectedword] = useState("");

  const [selectedTopic, setSelectedTopic] = useState(null);
  
  return (
    <Container fluid className='vh-100'>
      <Row style={{ height: '13%'}} className='light'>
        <Col lg={8}>
          <Row>
            <SearchBar data={nyheder} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
            <Container>Du har valgt: {selectedTopic}</Container>
          </Row>
        </Col>
        <Col xs={4}></Col>
      </Row>
      <Row style={{ height: '87%'}}>
        <Col lg={4}>
          <Row className='bg-success'style={{ height: '40%'}}>
            Metrics
          </Row>
          <Row className='bg-warning' style={{ height: '60%'}}>
            Trendline
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

export default GridExample;




