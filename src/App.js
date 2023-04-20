import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import nyheder from './Components/Searchbar/nyheder_i_dk.json';
import { useState } from 'react';
import Bubble from './Components/Bubble_viz/Bubble_chart/bubblechart';
import topic_data from './Components/Bubble_viz/Bubble_chart/data.json';
import Linechart from './Components/Trendline_graph/trendline';
import MetricDropdown from './Components/Metric_selector/MetricDropdown';
import SearchBar from './Components/Searchbar/Searchbar';
import UserProfilePicture from './Components/UserProfile/UserProfile';
import userImage from './Components/UserProfile/nerd.png';
import BubbleSlider from './Components/Bubble_amount_selector/Bubble_amount_selector';
import WordSlider from './Components/Word_slider/Word_slider';
import TimeSlider from './Components/Timeline/TimeSlider';
import BubbleSlider from './Components/Bubble_amount_selector.js/Bubble_amount_selector';
import WordSlider from './Components/Word_slider/Word_slider';
import BubbleSearchBox from './Components/BubbleSearchBox/BubbleSearch';
import StackedChart from './Components/StackedAreaChart/StackedChart';


function Layout() {
  // Hook for det data vi skal bruge
  const [TopicData, setData] = useState(topic_data);
  // Hook med det emne, brugeren skriver ind i searchbox
  const [selectedTopic, setSelectedTopic] = useState(null);
  // Hook for det ord, brugeren har trykket på i bubble chart
  const [SelectedWord, setSelectedWord] = useState("");

  
  return (
<Container fluid className='d-flex flex-column my-container' style={{height: '100vh'}}>
  <Row className='NavBar'>
    <Col xs={12} md={4} className='d-flex align-items-center justify-content-left p-10'>
      <SearchBar data={nyheder} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
    </Col>
    <Col xs={12} md={4} className='d-flex align-items-center justify-content-center'>
      <p>Timeline</p>
    </Col>
    <Col xs={12} md={4} className='d-flex align-items-center justify-content-center'>
    <UserProfilePicture userName='Pivert' userImage={userImage} />
    </Col>
  </Row>
  <Row className='flex-grow-1' style={{paddingBottom: '20px', paddingTop: '20px'}}>
    <Col className='FirstColumn' xs={12} md={8}>
      <Card className='h-100 reset-card-styles'>
        <Row>
          <Col>
            <BubbleSearchBox />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <BubbleSlider></BubbleSlider>
          </Col>
          <Col xs={12} md={6}>
            <WordSlider></WordSlider>
          </Col>
        </Row>
        <Row>
          <Col>
            <BubbleSlider />
          </Col>
          <Col xs={12} md={6}>
            <WordSlider></WordSlider>
          </Col>
        </Row>
        <Row style={{ height: '100%', alignContent: 'center', textAlign: 'center' }}>
          <Col>
          <Bubble TopicWord={selectedTopic} data={topic_data} setSelectedWord={setSelectedWord} />
          </Col>
        </Row>
      </Card>
        </Col>
        <Col className='SecondColumn' xs={12} md={4}>
        <Card className='h-100 reset-card-styles'>
        <Col style={{border: 'solid 1px black'}}>

{/* Denne her skal muligvis være row */}
          <Card.Body className='d-flex flex-column' >
            <Card.Title className='flex-grow-1'>
              
            </Card.Title>
          </Card.Body>

            </Col>
            <Col style={{border: 'solid 1px black'}}>

            <Card.Body className='d-flex flex-column'>
              <Card.Title>Artikler</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>

        </Col>
        </Card>
    </Col>
  </Row>
</Container>



  );
}

export default Layout;
