import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './Components/Searchbar/Searchbar';

function Layout() {
  return (
    <Container fluid className='vh-100'>
      <Row style={{ height: '13%'}}>
        <Col lg={8} className="bg-primary">
          <Row><SearchBar /></Row>
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
        <Col lg={8} className='bg-info'>
          <Row>Bubblechart</Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
