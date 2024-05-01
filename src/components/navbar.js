import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import * as Colors from '@mui/material/colors';
import userProfilePic from '../assets/pfp.jpg';

function ImageAvatars() {
  return <Avatar alt="Ethan" sx={{ bgcolor : Colors.deepPurple[500] }} src={ userProfilePic }>ET</Avatar>
}

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Tooltip title="That's me!"><ImageAvatars /></Tooltip>

          <Typography variant="h5" 
              component="div" 
              sx={{
                ml: 2,
                mr: 2,
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',}}>
            ETHAN LOO
          </Typography>
          <Box sx={{ flexGrow: 1 }}/>
          <Button textAlign="center" color="secondary" disableElevation>Resume</Button>
          <Button textAlign="center" color="secondary" disableElevation>Portfolio</Button>
          <Button textAlign="center" color="secondary" disableElevation>Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar
