import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import nyheder from './Components/Searchbar/nyheder_i_dk.json';
import { useState } from 'react';
import Bubble from './Components/Bubble_viz/Bubble_chart/bubblechart';
import topic_data from './Components/Bubble_viz/Bubble_chart/data.json';
import Linechart from './Components/Trendline_graph/trendline';
import MetricSelector from './Components/Metric_selector/MetricSelector';
import SearchBar from './Components/Searchbar/Searchbar';
import BubbleSlider from './Components/Bubble_selector/Bubble_selector';
import WordSlider from './Components/Word_slider/Word_slider';

function Layout() {
  // Hook for det data vi skal bruge
  const [TopicData, setData] = useState(topic_data);
  // Hook med det emne, brugeren skriver ind i searchbox
  const [SelectedTopic, setSelectedTopic] = useState(null);
  // Hook for det ord, brugeren har trykket på i bubble chart
  const [SelectedWord, setSelectedWord] = useState("");
  //bubbleslider sender antal af bobler
  //default 5 bobler
  //const [BubblesAmount, setBubblesAmount]= useState(5);
  
  return (
    <Container fluid className='d-flex flex-column' style={{height: '100vh'}}>
  <Row className='flex-grow-1'>
    <Col lg={4} className='p-0'>
      <Card className='h-100'>
        <Card.Body className='d-flex flex-column'>
          <Card.Text><SearchBar data={nyheder} selectedTopic={SelectedTopic} setSelectedTopic={setSelectedTopic} /></Card.Text>
          <Card.Text>Du har valgt: {SelectedTopic}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={4} className='p-0'>
      <Card className='h-100'>
        <Card.Body></Card.Body>
      </Card>
    </Col>
    <Col xs={4} className='p-0'>
      <Card className='h-100'>
        <Card.Body></Card.Body>
      </Card>
    </Col>
  </Row>
  <Row className='flex-grow-1'>
    <Col lg={4}>
      <Row>
      <Card className='h-100'>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>Metric Selector</Card.Title>
          <Card.Text><MetricSelector /></Card.Text>
        </Card.Body>
      </Card>
      </Row>
      <Row>
      <Card className='h-100'>
      {/* Denne her skal muligvis være row */}
        <Card.Body className='d-flex flex-column'>
          <Card.Text className='flex-grow-1'><Linechart className='linechart' /></Card.Text>
        </Card.Body>
      </Card>
      </Row>
    </Col>
    <Col lg={8}>
      <Row>
        <Card className='h-100'>
          <Card.Body className='d-flex flex-row'>
            <Card.Title>
              Searchbar
            </Card.Title>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Col className='p-0' xs={12} lg={6}>
        <Card className='h-100'>
          <Card.Body className='d-flex flex-row'>
            <Card.Title>
              Sliders
              <BubbleSlider></BubbleSlider>
            </Card.Title>
          </Card.Body>
        </Card>
        </Col>
        <Col className='p-0' xs={12} lg={6}>
        <Card className='h-100'>
          <Card.Body className='d-flex flex-row'>
            <Card.Title>
              Sliders
              <WordSlider></WordSlider>
            </Card.Title>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      <Row>
      <Card>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>Bubble Chart</Card.Title>
          <Bubble setSelectedword={setSelectedWord} data={TopicData} />
          <Card.Text></Card.Text>
          <Card.Text>Du har trykket på: {SelectedWord}</Card.Text>
        </Card.Body>
      </Card>
      </Row>
    </Col>
  </Row>
</Container>


  );
}

export default Layout;
