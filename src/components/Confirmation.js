import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function Confirmation() {
  const { state } = useLocation();

  return (
    <Container className="my-5">
      <Card>
        <Card.Body>
          <Card.Title>Appointment Confirmed!</Card.Title>
          <Card.Text>
            Thank you, {state.firstName} {state.lastName}. Your appointment for <strong>{state.service}</strong> is confirmed.
          </Card.Text>
          <Card.Text>
            Date: {state.date} at {state.time}
          </Card.Text>
          <Card.Text>
            We’ll contact you at {state.email} or {state.phone}.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Confirmation;
