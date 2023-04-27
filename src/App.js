import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import nyheder from './Components/Searchbar/nyheder_i_dk.json';
import { useState } from 'react';
import Bubble from './Components/Bubble_viz/Bubble_chart/bubblechart';
import topic_data from './Components/Bubble_viz/Bubble_chart/data.json';
import Linechart from './Components/Trendline_graph/trendline';
//import MetricDropdown from './Components/Metric_selector/MetricDropdown';
import SearchBar from './Components/Searchbar/Searchbar';
import UserProfilePicture from './Components/UserProfile/UserProfile';
import userImage from './Components/UserProfile/nerd.png';
import TimeSlider from './Components/Timeline/TimeSlider';
import BubbleSlider from './Components/Bubble_amount_selector.js/Bubble_amount_selector';
import WordSlider from './Components/Word_slider/Word_slider';
import BubbleSearchBox from './Components/BubbleSearchBox/BubbleSearch';
import StackedChart from './Components/StackedAreaChart/StackedChart';
import MetricDropdown from './Components/Trendline_graph/dropdown';
import SteamGraphViz from './Components/SteamgraphViz/SteamGraphViz';


function Layout() {
  const [selectedMetric, setSelectedMetric] = useState({ name: 'Ingen sammenligning'});
    // Handle metric selection
  function handleMetricChange(metric) {
    setSelectedMetric(metric);
  }
  // Hook for det data vi skal bruge
  const [TopicData, setData] = useState(topic_data);
  // Hook med det emne, brugeren skriver ind i topic searchbox
  const [SelectedTopic, setSelectedTopic] = useState(null);
  // Hook med det ord, brugeren skriver ind i bubble searchbox
  const [SearchWord, setSearchWord] = useState("")
  // Hook for det ord, brugeren har trykket på i bubble chart
  const [SelectedWord, setSelectedWord] = useState("");
  //Hook for slider der kontrollerer antal bobler
  const [BubbleAmount, setBubbleAmount]= useState(150);

  
  return (
<Container fluid className='d-flex flex-column my-container' style={{height: '120vh'}}>
  <Row className='NavBar'>
    <Col xs={12} md={4} className='d-flex align-items-center justify-content-left'>
      <SearchBar data={nyheder} selectedTopic={SelectedTopic} setSelectedTopic={setSelectedTopic} />
    </Col>
    <Col xs={12} md={4} className='d-flex align-items-center justify-content-center'>
      <TimeSlider />
    </Col>
    <Col xs={12} md={4} className='d-flex align-items-center justify-content-center'>
    <UserProfilePicture userName='Jogirt' userImage={userImage} />
    </Col>
  </Row>
  <Row className='flex-grow-1' style={{paddingBottom: '20px', paddingTop: '20px'}}>
    <Col className='FirstColumn' xs={12} md={8}>
      <Card className='h-100 reset-card-styles'>
        <Row>
          <Col>
            <BubbleSearchBox searchWord={SearchWord} setSearchWord={setSearchWord} />
          </Col>
          <Col>
          <MetricDropdown  selectedMetric={selectedMetric} onMetricChange={handleMetricChange} />
          </Col>
        </Row>
        <Row>
          <Col>
            <BubbleSlider 
              BubbleAmount={BubbleAmount}
              setBubbleAmount={setBubbleAmount}>
            </BubbleSlider>
          </Col>
          <Col>
            <WordSlider />
          </Col>
        </Row>
        <Row>
          <Bubble TopicWord={SelectedTopic} BubbleAmount={BubbleAmount} data={topic_data} setSelectedWord={setSelectedWord} searchWord={SearchWord} />
          <div>{SelectedWord}</div>
        </Row>
      </Card>
        </Col>
        <Col className='SecondColumn' xs={12} md={4}>
        <Card className='h-100 reset-card-styles'>
        <Col>

{/* Denne her skal muligvis være row */}
          <Card.Body className='d-flex flex-column' >
            <Card.Title className='flex-grow-1'>
              <SteamGraphViz />
            </Card.Title>
          </Card.Body>

            </Col>
            <Col style={{border: 'black 1px solid'}}>

{/* Denne her skal muligvis være row */}
          <Card.Body className='d-flex flex-column' >
            <Card.Title className='flex-grow-1'>
            </Card.Title>
          </Card.Body>

            </Col>

        </Card>
        
    </Col>
  </Row>
</Container>




  );
}

export default Layout;
