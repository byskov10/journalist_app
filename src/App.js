import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MetricSelector from './Components/Metric_selector/SliderLogics';

function GridExample() {
  return (
    <Container style={{ height: "100vh" }}>
      <Row style={{ height: "20%" }}>
        <Col></Col>
      </Row>
      <Row style={{ height: "60%" }}>
        <Col xs={4}></Col>
        <Col xs={4} style={{ backgroundColor: "#f9f9f9", borderRadius: "15px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.25)" }}>
          <h1>Tidsperiode</h1>
          <MetricSelector />
        </Col>
        <Col xs={4}></Col>
      </Row>
      <Row style={{ height: "20%" }}>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default GridExample;




