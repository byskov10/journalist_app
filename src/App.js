import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import nyheder from './Components/Searchbar/nyheder_i_dk.json';
import { useState, useEffect } from 'react';
import Bubble from './Components/Bubble_viz/Bubble_chart/bubblechart';
import topic_data from './Components/Bubble_viz/Bubble_chart/data.json';
import SearchBar from './Components/Searchbar/Searchbar';
import UserProfilePicture from './Components/UserProfile/UserProfile';
import userImage from './Components/UserProfile/journalist.png';
import BubbleSlider from './Components/Bubble_amount_selector.js/Bubble_amount_selector';
import BubbleSearchBox from './Components/BubbleSearchBox/BubbleSearch';
import MetricDropdown from './Components/Trendline_graph/dropdown';
import SteamGraphViz from './Components/StreamgraphViz/StreamGraphViz';
import ArticleList from './Components/ArticleList/ArticleList';
import WordAppear from './data/word_articleid.json';
import EventLogger from './Components/EventLogger/EventLogger';
import EventLoggerScroll from './Components/EventLogger/EventLogger.woscroll';
import gradientImage from './data/legend_gradient_Tegnebræt 1.png'


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
  //Hook for slider der kontrollerer antal bobler
  const [BubbleAmount, setBubbleAmount]= useState(150);
  // Hook for det ord, brugeren har trykket på i bubble chart
  const [SelectedWord, setSelectedWord] = useState("Ingen ord nævnt");
  // Hook for det array med ids, for det ord brugeren har trykket på i bubble chart
  const [WordIds, setWordIds] = useState([]);

  useEffect(() => {
    if (SelectedWord.length > 0) {
      const basisArticleIds = WordAppear
        .filter(obj => obj.word === SelectedWord)
        .flatMap(obj => obj.articleids);
      setWordIds(basisArticleIds)
    } else {
      setWordIds([]);
    }
  }, [SelectedWord, SearchWord]);
  
  return (
  <>
  <Container fluid className='d-flex flex-column my-container' style={{height: '120vh'}}>
  <Row className='NavBar'>
    <Col xs={12} md={4} className='d-flex align-items-center justify-content-left'>
      <SearchBar data={nyheder} selectedTopic={SelectedTopic} setSelectedTopic={setSelectedTopic} />
    </Col>
    <Col xs={12} md={4} className='d-flex align-items-center justify-content-center'>
    </Col>
    <Col xs={12} md={4} className='d-flex align-items-center justify-content-center'>
    <UserProfilePicture userName='Jakob' userImage={userImage} />
    </Col>
  </Row>
  <Row className='flex-grow-1' style={{paddingTop: '20px'}}>
    <Col className='FirstColumn' xs={12} md={8}>
      <Card className='h-100 reset-card-styles'>
        <Row>
          <Col>
            <BubbleSearchBox searchWord={SearchWord} setSearchWord={setSearchWord} />
          </Col>
          <Col>
            <Row>
              <BubbleSlider 
                BubbleAmount={BubbleAmount}
                setBubbleAmount={setBubbleAmount}>
              </BubbleSlider>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='bubblechart-user-description'>
              <div>
                Størrelserne: antallet af gange ordet er blevet nævnt i alle artiklerne.
              </div>
              <div>
                Farverne: det gennemsnitlige antal clicks per dag, artiklerne med ordet har genereret.
              </div>
              <Image src={gradientImage} width="187.125" height="39.75" className='gradient-image'/>
            </div>
          </Col>
          </Row>
          <Row>
            <Bubble TopicWord={SelectedTopic} BubbleAmount={BubbleAmount} data={topic_data} setSelectedWord={setSelectedWord} searchWord={SearchWord} />
          </Row>
      </Card>
        </Col>
      <Col className='SecondColumn' xs={12} md={4}>
        <Card className='h-100 reset-card-styles'>
          <Col>
            <Card.Body className='d-flex flex-column' >
              <Card.Title className='flex-grow-1'>
                <div>Artikler der nævner: "{SelectedWord}"</div>
                <SteamGraphViz wordIds={WordIds} />
              </Card.Title>
            </Card.Body>
          </Col>
            <Col >
              <Card.Body className='d-flex flex-column' >
                <Card.Title className='flex-grow-1'>
                  <ArticleList wordIds={WordIds} />
                </Card.Title>
              </Card.Body>
            </Col>
          </Card>
      </Col>
    </Row>
    <EventLogger selectedTopic={SelectedTopic} searchWord={SearchWord} bubbleAmount={BubbleAmount}/>
    <EventLoggerScroll selectedTopic={SelectedTopic} searchWord={SearchWord} bubbleAmount={BubbleAmount}/>
  </Container>
  </>



  );
}

export default Layout;
