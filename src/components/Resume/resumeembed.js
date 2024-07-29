import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

function Resume() {
    const resumeLink = "https://drive.google.com/file/d/19deys--ubDNNOLRigvwkXR2eQW2hhh8F/preview";
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
      <Box sx={{ display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flexGrow: 1,
      width: isMobile ? '80%' : '55%',
      margin: 'auto',
      pt: 12,
      // pb: '5%',
      height: 'calc(100vh - 75pt)',
      overflow: 'auto' }}>
        <iframe
        src= { resumeLink }
        title="Resume"
        width="100%"
        height= "100%"
        style={{ border: 'none' }}
      />
      </Box>
    );
  }
  
  export default Resume;