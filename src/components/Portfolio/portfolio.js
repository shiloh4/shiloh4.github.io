import React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function PortfolioUsage() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexGrow: 1,
            pt: 10,
            height: 'calc(100vh-75px)'
        }}>
            <Accordion elevation={0} sx={{ 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexGrow: 1,
                pb: 1,
                px: 30,
                overflow: 'auto',
                fontFamily: 'roboto', 
                
            }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="quantum-content" id="quantum-header" sx={{
                    fontSize: 20, 
                    fontWeight: 700,
                    backgroundColor: '#ACACAC',
                    borderRadius: '12px'
                }}>
                    Quantum
                </AccordionSummary>
                <AccordionDetails>
                    UI/UX
                </AccordionDetails>
                
            </Accordion>
            <Accordion elevation={0} sx={{ 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexGrow: 1,
                pb: 1,
                px: 30,
                overflow: 'auto',
                fontFamily: 'roboto', 
                
            }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="quantum-content" id="quantum-header" sx={{
                    fontSize: 20, 
                    fontWeight: 700,
                    backgroundColor: '#ACACAC',
                    borderRadius: '12px'
                }}>
                    Spotify Wrapped App
                </AccordionSummary>
                <AccordionDetails>
                    Android Studio
                </AccordionDetails>
                
            </Accordion>
        </Box>

    );
}

export default PortfolioUsage;