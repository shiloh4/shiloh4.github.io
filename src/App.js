import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import './App.css';
import Footer from './components/footer';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import ResumePage from './Pages/ResumePage';
import PortfolioPage from './Pages/PortfolioPage';

export default function App() {
  return (
    <div>
      <Navbar />
        <div className="smth">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      <Footer />
    </div>
  );
}