import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import gtpic from '../assets/GT.jpg';
import Navbar from './navbar';

function Banner() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        m: 0,
        position: 'relative',
        height: 800,
        backgroundColor: 'primary',
        color: 'white',
        p: 4,
        backgroundImage: `url(${gtpic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Navbar></Navbar>  

    </Box>
  );
}

export default Banner;