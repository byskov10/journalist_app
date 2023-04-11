import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DualThumbSlider from './Components/Timeline_slider/Timeline_slider';
import TimelineSlider from './Components/Timeline_slider/Timeline_slider';

function GridExample() {
  return (
    <Container style={{ height: "100vh" }}>
      <Row style={{ height: "33%" }}>
        <Col></Col>
      </Row>
      <Row style={{ height: "33%" }}>
        <Col xs={4}></Col>
        <Col xs={5} className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#f9f9f9", borderRadius: "15px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.25)" }}>
          <TimelineSlider />
        </Col>
        <Col xs={4}></Col>
      </Row>
      <Row style={{ height: "33%" }}>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default GridExample;




