import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import portraitpic from '../../assets/portrait.jpg';
import Link from '@mui/material/Link';

function Body() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            my: 8,
            justifyContent: 'center',
            
        }}>
            <img height = '300' width = '300' src = { portraitpic } sx={{m: 50}}>
            </img>
            <Box sx={{
                flexDirection: 'column',
                ml: 5,
                width: '40%'}}>
                    <Typography variant="h4" sx={{
                        flexGrow: 1,
                        mb: 2,
                        color: 'inherit',
                        textDecoration: 'none',}}>
                        About Me
                    </Typography>
                    <Typography sx={{mb: 1}}>
                        Hi, my name is Ethan! I'm a junior in Comp Sci at Georgia Tech 😊 My main interests are in UI/UX design, game development, and graphic design. More recently, I have also taken an interest in data analysis and database management. Hence, my Threads are <Link href="https://www.cc.gatech.edu/academics/threads/information-internetworks" underline="hover" target="_blank" rel="noopener" x={{ fontFamily: 'roboto', fontSize: 16, my: 2 }}>Information Internetworks</Link> and <Link href="https://www.cc.gatech.edu/academics/threads/media" underline="hover" target="_blank" rel="noopener" sx={{ fontFamily: 'roboto', fontSize: 16, my: 2 }}>Media</Link>.
                    </Typography>
                    <Typography>
                        Away from the keyboard, I love being outdoors and remaining active. One activity I frequent is rockclimbing. I also play badminton, have a black belt in Taekwondo, and enjoy going scuba diving. I love photography especially when travelling. I take a deep interest in the many different styles in photography and often challenge myself to learn how to shoot in new styles. 
                    </Typography>
            </Box>
        </Box>
    );
}

export default Body;