import React, { useState, useEffect } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import * as Colors from '@mui/material/colors';
import userProfilePic from '../assets/pfp.jpg';
import { Link } from 'react-router-dom';

function ImageAvatars() {
  return <Avatar alt="Ethan" sx={{ bgcolor : Colors.deepPurple[500] }} src={ userProfilePic }>ET</Avatar>
}

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      // Check if current scroll position is greater than last scroll position
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }
      // Update lastScrollY to current position
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <Box>
      <AppBar position="fixed" sx={{ 
        justifyContent: 'center',
        display: 'flex',
        zIndex: (theme) => theme.zIndex.drawer + 1, 
        transform: show ? 'translateY(0)' : 'translateY(-100%)', 
        transition: 'transform 0.5s ease-in-out', 
        borderRadius: '12px',
        bgcolor: 'rgba(28,28,28,0.1)', 
        backdropFilter: 'blur(10px)', // Blur effect
        WebkitBackdropFilter: 'blur(10px)', // safari compatibility
        mt: 1,
        mr: 1,
        width: isMobile ? '96%' : '99%',
      }}>
        <Toolbar>
          <Tooltip title="That's me!">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <ImageAvatars />
            </Link>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }}/>

          <Link to="/resume">
            <Button sx={{ml: 2, color: '#B3A369', '& .MuiButton-label': { textAlign: 'center' }, textTransform: 'none' }} disableElevation>resume</Button>
          </Link>
          
          <Link to="/portfolio">
            <Button sx={{ml: 2, color: '#B3A369', '& .MuiButton-label': { textAlign: 'center' }, textTransform: 'none' }} disableElevation>portfolio</Button>
          </Link>
          
          <Link to="/contact">
            <Button sx={{ml: 2, color: '#B3A369', '& .MuiButton-label': { textAlign: 'center' }, textTransform: 'none' }} disableElevation>contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
