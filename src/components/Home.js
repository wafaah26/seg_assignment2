import React from 'react';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <Container className="my-5">
      <h1>Welcome to BikeyMedic</h1>

      <section className="mt-4">
        <h2>About Us</h2>
        <p>
          At BikeyMedic, we fix your bikes fast and reliably. Serving the community since 2025, our expert technicians are passionate about keeping you on the road. Whether you need a quick flat tire repair or a complete tune-up, we’ve got you covered.
        </p>
      </section>

      <section className="mt-4">
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Experienced Mechanics:</strong> Our certified team has years of hands-on experience with all bike types.</li>
          <li><strong>Quality Parts:</strong> We only use high-quality replacement parts to ensure durability.</li>
          <li><strong>Customer Satisfaction:</strong> Your safety and satisfaction are our top priorities.</li>
          <li><strong>Flexible Hours:</strong> Open Monday to Saturday, 9 AM to 6 PM — walk-ins welcome or book ahead.</li>
        </ul>
      </section>

      <section className="mt-4">
        <h2>What We Offer</h2>
        <p>From simple repairs to comprehensive maintenance, explore our full range of bike services by clicking the <strong>Services</strong> tab above.</p>
      </section>
    </Container>
  );
}

export default Home;
