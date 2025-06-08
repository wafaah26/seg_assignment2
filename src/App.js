import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BookingForm from './components/BookingForm';
import Confirmation from './components/Confirmation';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Services from './components/Services';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  );
}

export default App;
