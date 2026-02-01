import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import School from './pages/School';
import Enterprise from './pages/Enterprise';
import Events from './pages/Events';
import Composite from './pages/Composite';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="school" element={<School />} />
        <Route path="enterprise" element={<Enterprise />} />
        <Route path="events" element={<Events />} />
        <Route path="composite" element={<Composite />} />
        <Route path="about" element={<About />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
