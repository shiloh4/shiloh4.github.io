import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import gtpic from '../../assets/GT.jpg';
import Slide from '@mui/material/Slide';

function Banner({ showSlide }) {
  // console.log('showSlide:', showSlide)
  // const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   // Set the checked state to true after the component mounts to trigger the Grow animation
  //   setChecked(true);
  // }, []);

  return (
    <div>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',  // Set display to flex
            flexDirection: 'column',  // Stack children vertically
            justifyContent: 'flex-end',
            flexGrow: 1,
            alignItems: 'flex-start', // Align children to the left
            justifyContent: 'flex-end',// Align children to the bottom
            // m: 0,
            position: 'relative',
            height: '80vh',
            backgroundColor: 'primary',
            color: 'white',
            p: 4,
            backgroundImage: `url(${gtpic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <Slide in={showSlide} direction='right' timeout={{ enter: 500, exit: 500 }}>
            <Typography variant="h1" 
              component="div" 
              sx={{ color: 'white'}}>
                  ETHAN LOO
            </Typography>
          </Slide>
        </Box>
    </div>
  );
}

export default Banner;