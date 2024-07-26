import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import portraitpic from '../../assets/portrait.jpg';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import { useTheme, useMediaQuery } from '@mui/material';

function Body() {
    const [checked, setChecked] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        // Set the checked state to true after the component mounts to trigger the Grow animation
        setChecked(true);
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            my: 8,
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : 'flex-start',
        }}>
            <Grow in={checked} timeout={1000}>
            <img src = { portraitpic } style={{width: isMobile ? '80%' : '15%', borderRadius: '16px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.4)', marginBottom: isMobile ? '16px' : '0'}} >
            </img>
            </Grow>
            <Grow in={checked} timeout={1000}>
            <Paper elevation={3} sx={{width: isMobile ? '80%' : '55%',
                                      borderRadius: '16px',
                                      ml: isMobile ? '0' : '15pt',}}>            
            <Box sx={{
                flexDirection: 'column',
                padding: 5,
                width: 'auto'}}>
                    <Typography variant="h4" sx={{
                        flexGrow: 1,
                        mb: 2,
                        color: 'inherit',
                        textDecoration: 'none',}}>
                        About Me
                    </Typography>
                    <Typography sx={{mb: 1}}>
                        Hi, my name is Ethan! I'm a junior in Comp Sci at Georgia Tech. My main interests are in front-end development and game development. More recently, I have also taken an interest in data analysis and database management. Hence, my Threads are <Link href="https://www.cc.gatech.edu/academics/threads/information-internetworks" underline="hover" target="_blank" rel="noopener" x={{ fontFamily: 'roboto', fontSize: 16, my: 2 }}>Information Internetworks</Link> and <Link href="https://www.cc.gatech.edu/academics/threads/media" underline="hover" target="_blank" rel="noopener" sx={{ fontFamily: 'roboto', fontSize: 16, my: 2 }}>Media</Link>.
                    </Typography>
                    <Typography>
                        Away from the keyboard, I enjoy being outdoors and remaining active. One activity I frequent is rockclimbing. I also play badminton, have a black belt in Taekwondo, and a PADI Advanced Open Water Scuba Diver license. I have a strong interest in photography especially experimenting with the many different styles of photography.
                    </Typography>
            </Box>
            </Paper>
            </Grow>
        </Box>
    );
}

export default Body;