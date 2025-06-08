import React from 'react';
import { Container } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="my-5">
      <h2>Contact Us</h2>
      <p><strong>Address:</strong> 123 Bike Lane, Ottawa, Ontario</p>
      <p><strong>Phone:</strong> (613) 555-6666</p>
      <p><strong>Email:</strong> support@bikeymedic.ca</p>
    </Container>
  );
}

export default Contact;
