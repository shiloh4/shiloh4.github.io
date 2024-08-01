import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined'; //temp
import { useTheme, useMediaQuery } from '@mui/material';

export default function Blog() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexGrow: 1,
            width: isMobile ? '80%' : '55%',
            margin: 'auto',
            // pt: 12,
            // pb: '5%',
            height: 'calc(100vh - 75pt)',
            overflow: 'auto', }}>
        <HandymanOutlinedIcon sx={{mx: 'auto',
                                   display: 'flex',
                                   fontSize: '4rem',
                                   color: '#E57373',
        }}/>

        <Typography sx={{mx: 'auto',
                        display: 'flex',
                        fontSize: '2rem',
                        color: '#E57373',}}><code>Caution</code></Typography>
        <Typography sx={{mx: 'auto',
                         display: 'flex',
                         textAlign: 'center'
        }}><code>This page is still under construction. Hard hats from this point on. 👷‍♂️</code></Typography>
        </Box>
    );
}