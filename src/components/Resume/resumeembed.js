import React from 'react';
import { Box, Typography } from '@mui/material';

function Resume() {
    const resumeLink = "https://drive.google.com/file/d/19deys--ubDNNOLRigvwkXR2eQW2hhh8F/preview";

    return (
      <Box sx={{ display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flexGrow: 1,
      pt: 10,
      px: '5%',
      pb: '5%',
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