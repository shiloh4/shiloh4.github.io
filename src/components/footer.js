import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { blue } from '@mui/material/colors';
import { useTheme, useMediaQuery } from '@mui/material';

function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center', // Center the child box
            bgcolor: theme.palette.background.default,
            width: '100%', // Ensure the outer box spans the full width
            height: '5%',
            py: 2, // Optional: padding for vertical spacing
        }}>
            <Box sx={{
                display: 'flex',
                width: isMobile ? '80%' : '55%',
                justifyContent: 'space-between', // Space between inner elements
                alignItems: 'baseline',
            }}>
                <Typography variant='body2'>© 2024 | Ethan Loo</Typography>
            </Box>
        </Box>
    );
}

export default Footer;