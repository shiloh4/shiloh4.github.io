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
    <Box sx={{ flexGrow: 1,}}>
      <AppBar position="fixed" sx={{ 
        justifyContent: 'center',
        display: 'flex',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        zIndex: (theme) => theme.zIndex.drawer + 1, 
        transform: show ? 'translateY(0)' : 'translateY(-100%)', 
        transition: 'transform 0.5s ease-in-out', 
        borderRadius: '12px',
        bgcolor: '#003057',
        mt: 1,
        mx: 1,
        width: isMobile ? 'calc(100% - 16px)' : '99%',
      }}>
        <Toolbar>
          <Tooltip title="That's me!">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <ImageAvatars />
            </Link>
          </Tooltip>
            
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
            <Typography variant="h5" 
              component="div" 
              sx={{
                ml: 2,
                mr: 2,
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: '#B3A369',
                textDecoration: 'none',}}>
              Portfolio
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }}/>

          <Link to="/resume">
            <Button sx={{ml: 5, color: '#B3A369', '& .MuiButton-label': { textAlign: 'center' } }} disableElevation>Resume</Button>
          </Link>
          
          <Link to="/portfolio">
            <Button sx={{ml: 5, color: '#B3A369', '& .MuiButton-label': { textAlign: 'center' }}} disableElevation>Portfolio</Button>
          </Link>
          
          
          <Link to="/contact">
            <Button sx={{ml: 5, color: '#B3A369', '& .MuiButton-label': { textAlign: 'center' } }} disableElevation>Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
