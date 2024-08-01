import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Slide from '@mui/material/Slide';
import { useTheme, useMediaQuery } from '@mui/material';

function Banner({ showSlide }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',  // Set display to flex
            flexDirection: 'column',  // Stack children vertically
            flexGrow: 1,
            margin: 'auto',
            mt: 12,
            position: 'relative',
            backgroundColor: 'primary',
            color: 'white',
            width: isMobile ? '80%' : '55%'
          }}
        >
          <Slide in={showSlide} direction='right' timeout={{ enter: 500, exit: 500 }}>
            <Typography variant="h5" 
              component="div" 
              sx={{ color: theme.palette.primary.main,
                    px: 3,
              }}>
                  ethan loo
            </Typography>
          </Slide>
          <Slide in={showSlide} direction='right' timeout={{ enter: 500, exit: 500 }}>
            <Typography variant="body1" 
              component="div" 
              sx={{ color: theme.palette.text.primary,
                    px: 3
               }}>
                  software engineer | computer science @ georgia institute of technology
            </Typography>
          </Slide>
        </Box>
    </div>
  );
}

export default Banner;