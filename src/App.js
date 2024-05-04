import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import './App.css';
import Footer from './components/footer';
import HomePage from './Pages/HomePage';

export default function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<ResumePage />} />
          <Route path="/contact" element={<PortfolioPage />} />
          <Route path="/portfolio" element={<ContactPage />} /> */}
        </Routes>
        <Footer />
      </div>
  );
}