import React from 'react';
import { Box, Typography } from '@mui/material';
import resume from '../../assets/resume.pdf';

function Resume() {
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
        src= { resume }
        title="Resume"
        width="100%"
        height= "100%"
        style={{ border: 'none' }}
      />
      </Box>
    );
  }
  
  export default Resume;