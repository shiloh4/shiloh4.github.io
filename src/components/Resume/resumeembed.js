import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Grow from '@mui/material/Grow';

const handleDownload = () => {
  // Replace with your Google Drive file ID
  const fileId = '19deys--ubDNNOLRigvwkXR2eQW2hhh8F';
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  window.open(downloadUrl, '_blank');
};

function Resume() {
    const [checked, setChecked] = useState(false);
    const resumeLink = "https://drive.google.com/file/d/19deys--ubDNNOLRigvwkXR2eQW2hhh8F/preview";
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
      // Set the checked state to true after the component mounts to trigger the Grow animation
      setChecked(true);
  }, []);

    return (
      <Box sx={{ display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexGrow: 1,
        width: isMobile ? '80%' : '55%',
        margin: 'auto',
        pt: 12,
        // pb: '5%',
        height: 'calc(100vh - 75pt)',
        overflow: 'auto' }}>
        <Box sx={{height: '90%'}}>
          <iframe
          src= { resumeLink }
          title="Resume"
          width="100%"
          height= "100%"
          style={{ border: 'none' }}
        />
        </Box>
        <Box sx={{margin: 'auto'}}>
          <Grow in={checked} timeout={1000}>
            <IconButton sx={{color: "#B3A369"}} onClick={ handleDownload }>
              <FileDownloadOutlinedIcon />
            </IconButton>
          </Grow>
        </Box>
      </Box>
    ); 
  }
  
  export default Resume;