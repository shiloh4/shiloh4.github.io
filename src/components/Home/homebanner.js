import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import gtpic from '../../assets/GT.jpg';

function Banner() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',  // Set display to flex
        flexDirection: 'column',  // Stack children vertically
        justifyContent: 'bottom',  // Center content vertically
        flexGrow: 1,
        alignItems: 'flex-start', // Align children to the left
        justifyContent: 'flex-end',// Align children to the bottom
        m: 0,
        position: 'relative',
        height: 600,
        backgroundColor: 'primary',
        color: 'white',
        p: 4,
        backgroundImage: `url(${gtpic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Typography variant="h1" 
        component="div" 
        sx={{ color: 'white'}}>
            ETHAN LOO
      </Typography>
    </Box>
  );
}

export default Banner;