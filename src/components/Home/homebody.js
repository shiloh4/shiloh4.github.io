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
            mt: 12,
            mb: 5,
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : 'flex-start',
        }}>
            {/* <Grow in={checked} timeout={1000}>
            <img src = { portraitpic } style={{width: isMobile ? '80%' : '15%', borderRadius: '16px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.4)', marginBottom: isMobile ? '16px' : '0'}} >
            </img>
            </Grow> */}
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
                    <Typography sx={{ mb: 3 }}>
                        I am a software engineer, front-end developer, UI/UX designer, problem solver, and forever student.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        I love to both build and break things. I am driven by challenging projects, self-guided research, and collaborative problem-solving. My passion lies in creating intuitive and innovative front-end designs that incorporate unique elements of color, typography, and motion.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        I am currently a Computer Science junior at Georgia Tech, interning as a QA Engineer at Keysight. My academic threads are <Link href="https://www.cc.gatech.edu/academics/threads/information-internetworks" underline="hover" target="_blank" rel="noopener" sx={{ fontFamily: 'roboto', fontSize: 16, my: 2 }}>Information Internetworks</Link> and <Link href="https://www.cc.gatech.edu/academics/threads/media" underline="hover" target="_blank" rel="noopener" sx={{ fontFamily: 'roboto', fontSize: 16, my: 2 }}>Media</Link>.
                    </Typography>
                    <Typography>
                        This is my personal space, where I showcase my projects and achievements. I also write about my experiences in software development and design.
                    </Typography>

                    {/* <Typography sx={{mb: 1}}>
                        I'm a student, software engineer, front-end developer, UI/UX designer, and problem solver. As a lifelong learner, I'm always looking for new experiences - gaining experience in various fields like data analysis, game development, even interning as a QA Engineer at Keysight. My Threads are <Link href="https://www.cc.gatech.edu/academics/threads/information-internetworks" underline="hover" target="_blank" rel="noopener" x={{ fontFamily: 'roboto', fontSize: 16, my: 2 }}>Information Internetworks</Link> and <Link href="https://www.cc.gatech.edu/academics/threads/media" underline="hover" target="_blank" rel="noopener" sx={{ fontFamily: 'roboto', fontSize: 16, my: 2 }}>Media</Link>.
                    </Typography>
                    <Typography sx={{mb: 1}}>
                        My passion for software development stems from my love for building things - and breaking them. I am committed to continuous improvement through self-guided research and collaboration with other extremely skilled and experienced SWEs.
                    </Typography>
                    <Typography>
                        This is my personal space where I share my projects, achievements, and showcase my passion for software development and design.
                    </Typography> */}
            </Box>
            </Paper>
            </Grow>
        </Box>
    );
}

export default Body;