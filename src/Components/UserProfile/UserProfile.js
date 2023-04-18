import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';



function UserProfilePicture(props) {
  return (
<Container fluid className='d-flex flex-column'>
    <Row className='d-flex align-items-center justify-content-center'>
      <Col xs={2} style={{border: 'solid black 1px'}}>
        <Image src={props.userImage} roundedCircle width="60" height="60" />
      </Col>
      <Col xs={2} style={{border: 'solid black 1px'}}>
        <p>{props.userName}</p>
      </Col>
      <Col xs={2} style={{border: 'solid black 1px'}}>
      <Button variant="outline-secondary">
  <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
      <path fill="currentColor" d="M7.4 8.4L12 13 16.6 8.4a.5.5 0 0 1 .7.7l-5 5a.5.5 0 0 1-.7 0l-5-5a.5.5 0 0 1 .7-.7z"/>
    </svg>
  </>
</Button>

      </Col>
    </Row>
</Container>
  );
}

export default UserProfilePicture;
