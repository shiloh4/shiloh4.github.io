import React, { useState, useEffect } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import * as Colors from '@mui/material/colors';
import userProfilePic from '../assets/pfp.jpg';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../ThemeContext';

function ImageAvatars() {
  const theme = useTheme();

  return <Avatar alt="Ethan" sx={{ bgcolor : theme.palette.background.main }} src={ userProfilePic }>ET</Avatar>
}

function ThemeToggleButton() {
  const { mode, toggleTheme } = useThemeContext();
  const theme = useTheme();

  return (
      <IconButton onClick={toggleTheme} sx={{color: theme.palette.primary.main}}>
          {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
  );
};

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navbarBgColor = theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.1)';

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
        backgroundColor: navbarBgColor,
        boxShadow: 'none',
        backdropFilter: 'blur(10px)', // Blur effect
        WebkitBackdropFilter: 'blur(10px)', // safari compatibility
        pt: isMobile ? 2 : 1,
        width: '100%',
        alignItems: 'center'
      }}>
        <Toolbar sx={{ width: isMobile ? '100%' : '55%', display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title="That's me!">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <ImageAvatars />
              </Link>
            </Tooltip>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/resume">
              <Button sx={{ mx: 1, color: '#B3A369', textTransform: 'none' }} disableElevation>resume</Button>
            </Link>
            <Link to="/portfolio">
              <Button sx={{ mx: 1, color: '#B3A369', textTransform: 'none' }} disableElevation>portfolio</Button>
            </Link>
            <Link to="/contact">
              <Button sx={{ mx: 1, color: '#B3A369', textTransform: 'none' }} disableElevation>contact</Button>
            </Link>
            <ThemeToggleButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
