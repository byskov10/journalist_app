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
import UserProfilePicture from './Components/UserProfile/UserProfile';
import userImage from './Components/UserProfile/nerd.png';

function Layout() {
  // Hook for det data vi skal bruge
  const [TopicData, setData] = useState(topic_data);
  // Hook med det emne, brugeren skriver ind i searchbox
  const [SelectedTopic, setSelectedTopic] = useState(null);
  // Hook for det ord, brugeren har trykket på i bubble chart
  const [SelectedWord, setSelectedWord] = useState("");

  
  return (
<Container fluid className='d-flex flex-column my-container' style={{height: '100vh'}}>
  <Row className='NavBar'>
    <Col xs={12} md={4} className='d-flex align-items-center justify-content-left'>
      <SearchBar data={nyheder} selectedTopic={SelectedTopic} setSelectedTopic={setSelectedTopic} />
    </Col>
    <Col xs={12} md={4} className='d-flex align-items-center justify-content-center'>
      <p>Timeline</p>
    </Col>
    <Col xs={12} md={4} className='d-flex align-items-center justify-content-center'>
    <UserProfilePicture userName='Pivert' userImage={userImage} />
    </Col>
  </Row>
  <Row className='flex-grow-1' style={{paddingBottom: '20px', paddingTop: '20px'}}>
    <Col xs={12} md={4}>
      <Row className='MetricSelector' style={{paddingBottom: '10px'}}>
        <Col>
          <Card className='h-100 reset-card-styles'>
            <Card.Body className='d-flex flex-column'>
              <Card.Title>Metric Selector</Card.Title>
              <Card.Text><MetricSelector /></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='LineChart' style={{paddingTop: '10px'}}>
        <Col>
          <Card className='h-100 reset-card-styles'>
            {/* Denne her skal muligvis være row */}
            <Card.Body className='d-flex flex-column'>
              <Card.Text className='flex-grow-1'><Linechart className='linechart' /></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
    <Col xs={12} md={8}>
      <Card className='h-100 reset-card-styles'>
        <Row>
          <Col>
            <p>Searchbar</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <p>Slider</p>
          </Col>
          <Col xs={12} md={6}>
            <p>Slider</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Bubble</p>
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
</Container>



  );
}

export default Layout;
