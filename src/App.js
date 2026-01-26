import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/navbar';
import './App.css';
import Box from '@mui/material/Box';
import Footer from './components/footer';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import ResumePage from './Pages/ResumePage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogPage from './Pages/BlogPage';

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

  const PageShell = ({ children }) => (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flex: 1 }}>
        {children}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ width: '100vw', maxHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <div className="smth">
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageShell><motion.div
                                        // key={location.pathname}
                                        initial="initial"
                                        animate="in"
                                        exit="out"
                                        variants={pageVariants}
                                        transition={pageTransition}>
                                          <HomePage showSlide= { showSlide }  />
                                        </motion.div></PageShell>} />
            <Route path="/resume" element={<PageShell><motion.div
                                            initial="initial"
                                            animate="in"
                                            exit="out"
                                            variants={pageVariants}
                                            transition={pageTransition}>
                                              <ResumePage/>
                                          </motion.div></PageShell>} />
            <Route path="/portfolio" element={<PageShell><motion.div
                                                initial="initial"
                                                animate="in"
                                                exit="out"
                                                variants={pageVariants}
                                                transition={pageTransition}>
                                                  <PortfolioPage/>
                                              </motion.div></PageShell>} />
            <Route path="/contact" element={<PageShell><motion.div
                                              initial="initial"
                                              animate="in"
                                              exit="out"
                                              variants={pageVariants}
                                              transition={pageTransition}>
                                                <ContactPage/>
                                            </motion.div></PageShell>} />
            {/* <Route path="/blog" element={<PageShell><motion.div
                                              initial="initial"
                                              animate="in"
                                              exit="out"
                                              variants={pageVariants}
                                              transition={pageTransition}>
                                                <BlogPage/>
                                            </motion.div></PageShell>} />                                 */}
          </Routes>
          </AnimatePresence>
        </div>
    </Box>
  );
}
