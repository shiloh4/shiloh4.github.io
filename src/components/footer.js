import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

function Footer() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 75,
            flexGrow: 1,
            bgcolor: '#003057',
            color: 'white',
            justifyContent: 'center'}}>
            <Typography variant='body2' sx={{textAlign: 'center'}}>Made in React with Material UI</Typography>
        </Box>
    );
}

export default Footer;