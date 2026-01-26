import * as React from 'react';
import Portfolio from '../components/Portfolio/portfolio';
import Box from '@mui/material/Box';
import Footer from '../components/footer';

function PortfolioUsage() {
    return <Portfolio></Portfolio>
  }

export default function PortfolioPage() {
    return (
        <Box sx={{ height: '100vh', overflowX: 'hidden' }}>
            <PortfolioUsage />
            <Box sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
                <Footer />
            </Box>
        </Box>
    );
}