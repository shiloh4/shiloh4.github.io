import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
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
            mt: 2,
            mb: 5,
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : 'flex-start',
        }}>
            <Grow in={checked} timeout={1000}>
            <Paper elevation={1} sx={{width: isMobile ? '80%' : '55%',
                                      borderRadius: '16px',
                                      ml: '0' }}>            
            <Box sx={{
                flexDirection: 'column',
                padding: 3,
                width: 'auto'}}>
                    <Typography variant="body2" sx={{ mb: 3 }}>
                        I am a software engineer, front-end developer, UI/UX designer, problem solver, and lifelong learner.
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3 }}>
                        I love to both build and break things and am driven by challenging projects, self-guided research, and collaborative problem-solving. My passion lies in creating intuitive and innovative front-end designs that incorporate unique elements of color, typography, and motion.
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3 }}>
                        I am currently a Computer Science junior at Georgia Tech, interning as a QA Engineer at Keysight. My academic threads are <Link href="https://www.cc.gatech.edu/academics/threads/information-internetworks" underline="hover" target="_blank" rel="noopener" sx={{color: "#87CEFA"}}>Information Internetworks</Link> and <Link href="https://www.cc.gatech.edu/academics/threads/media" underline="hover" target="_blank" rel="noopener" sx={{color: "#87CEFA"}}>Media</Link>.
                    </Typography>
                    <Typography variant="body2">
                        This is my personal space, where I share my projects and achievements, and showcase my passion for software development and design.
                    </Typography>
            </Box>
            </Paper>
            </Grow>
        </Box>
    );
}

export default Body;