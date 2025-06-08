import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Services() {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Our Bike Services</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="/tire.avif"/>
            <Card.Body>
              <Card.Title>Flat Tire Repair</Card.Title>
              <Card.Text>Quick inner tube replacement and tire inspection. <p><strong>Price:$15</strong></p></Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="/brakes.jpg"/>
            <Card.Body>
              <Card.Title>Brake Adjustment</Card.Title>
              <Card.Text>We adjust and align brakes for optimal stopping power. <p><strong>Price:$35</strong></p></Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="/tuneup.avif"  />
            <Card.Body>
              <Card.Title>Full Tune-Up</Card.Title>
              <Card.Text>Complete safety check, lubrication, alignment, and adjustments. <p><strong>Price:$55</strong></p></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
