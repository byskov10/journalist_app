import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';



function UserProfilePicture(props) {
  return (
<Container fluid className='d-flex flex-column pe-4'>
    <Row className='d-flex align-items-center justify-content-end'>
      <Col xs={2}>
        <Image src={props.userImage} roundedCircle width="60" height="60" />
      </Col>
      <Col xs={2}>
        <p style={{margin: '0'}}>{props.userName}</p>
        <Button variant="outline-secondary" size="sm">
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
