import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
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
            <Typography sx={{textAlign: 'center', fontFamily: 'roboto', fontSize: 6}}><Link href="https://icons8.com/icon/F3hvjvZc3jEF/portfolium"  underline="hover" target="_blank" rel="noopener" color="inherit">Portfolium</Link> icon by <Link href="https://icons8.com"  underline="hover" target="_blank" rel="noopener" color="inherit">Icons8</Link></Typography>

        </Box>
    );
}

export default Footer;