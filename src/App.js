import * as React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/navbar';
import './App.css';
import Footer from './components/footer';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import ResumePage from './Pages/ResumePage';
import PortfolioPage from './Pages/PortfolioPage';

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

  return (
    
    <div>
      <Navbar />
        <div className="smth">
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<motion.div
                                        initial="initial"
                                        animate="in"
                                        exit="out"
                                        variants={pageVariants}
                                        transition={pageTransition}>
                                          <HomePage />
                                        </motion.div>} />
            <Route path="/resume" element={<motion.div
                                            initial="initial"
                                            animate="in"
                                            exit="out"
                                            variants={pageVariants}
                                            transition={pageTransition}>
                                              <ResumePage />
                                          </motion.div>} />
            <Route path="/portfolio" element={<motion.div
                                                initial="initial"
                                                animate="in"
                                                exit="out"
                                                variants={pageVariants}
                                                transition={pageTransition}>
                                                  <PortfolioPage />
                                              </motion.div>} />
            <Route path="/contact" element={<motion.div
                                              initial="initial"
                                              animate="in"
                                              exit="out"
                                              variants={pageVariants}
                                              transition={pageTransition}>
                                                <ContactPage />
                                            </motion.div>} />
          </Routes>
          </AnimatePresence>
        </div>
      <Footer />
    </div>
    
  );
}