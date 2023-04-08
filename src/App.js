import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Bubble from './Components/Bubble_viz/Bubble_chart/bubblechart';
import { useState } from 'react';
import data_emne from './Components/Bubble_viz/Bubble_chart/data.json';

function Layout() {

  // Hook for det data vi skal bruge
  const [data, setData] = useState(data_emne);
  // Hook for det ord, brugeren har trykket på i bubble chart
  const [selectedword, setSelectedword] = useState("");

  return (
    <Container fluid className='vh-100'>
      <Row style={{ height: '13%'}}>
        <Col lg={8} className="bg-primary">
          <Row>Searchbar</Row>
        </Col>
        <Col lg={4} className="bg-secondary">
          <Row>Dragbar</Row>
        </Col>
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

export default Layout;
