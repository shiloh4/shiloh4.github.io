import * as React from 'react';
import Resume from '../components/Resume/resumeembed';
import Box from '@mui/material/Box';
import Footer from '../components/footer';

export default function ResumePage() {
    return (
        <Box sx={{ height: '100vh', overflowX: 'hidden' }}>
            <Resume />
            <Box sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
                <Footer />
            </Box>
        </Box>
    );
}