import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/navbar';
import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer from './components/footer';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import ResumePage from './Pages/ResumePage';
import PortfolioPage from './Pages/PortfolioPage';
import { alignProperty } from '@mui/material/styles/cssUtils';

const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '100vw',
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

export default function App() {
  const location = useLocation();
  const [showSlide, setShowSlide] = useState(false);

  useEffect(() => {
    setShowSlide(false);
    const timer = setTimeout(() => {
      setShowSlide(true);
    }, pageTransition.duration * 1000); // Delay slide animation until page transition completes
    return () => 
    clearTimeout(timer);
  }, [location]);

  // console.log('App showSlide:', showSlide);

  return (
    
    <div  style={{ width: '100vw', overflowX: 'hidden' }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Navbar />
        </Grid>
      </Grid>
        <div className="smth">
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<motion.div
                                        // key={location.pathname}
                                        initial="initial"
                                        animate="in"
                                        exit="out"
                                        variants={pageVariants}
                                        transition={pageTransition}>
                                          <HomePage showSlide= { showSlide }  />
                                        </motion.div>} />
            <Route path="/resume" element={<motion.div
                                            initial="initial"
                                            animate="in"
                                            exit="out"
                                            variants={pageVariants}
                                            transition={pageTransition}>
                                              <ResumePage/>
                                          </motion.div>} />
            <Route path="/portfolio" element={<motion.div
                                                initial="initial"
                                                animate="in"
                                                exit="out"
                                                variants={pageVariants}
                                                transition={pageTransition}>
                                                  <PortfolioPage/>
                                              </motion.div>} />
            <Route path="/contact" element={<motion.div
                                              initial="initial"
                                              animate="in"
                                              exit="out"
                                              variants={pageVariants}
                                              transition={pageTransition}>
                                                <ContactPage/>
                                            </motion.div>} />
          </Routes>
          </AnimatePresence>
        </div>
      <Footer />
    </div>
    
  );
}