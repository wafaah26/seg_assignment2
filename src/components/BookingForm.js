import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    date: '', time: '', service: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', { state: formData });
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Book an Appointment</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control name="firstName" onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control name="lastName" onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control name="phone" onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" name="date" onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Time</Form.Label>
          <Form.Control type="time" name="time" onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Service</Form.Label>
          <Form.Select name="service" onChange={handleChange} required>
            <option value="">-- Select a Service --</option>
            <option>Flat Tire Repair</option>
            <option>Brake Adjustment</option>
            <option>Full Tune-Up</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">Confirm Appointment</Button>
      </Form>
    </Container>
  );
}

export default BookingForm;
