import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

function Skills() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            my: '4%',
            width: isMobile ? '80%' : '55%',
            px: 3,
            margin: 'auto'
            }}>
                <Typography variant="body2" sx={{my: '1%'}}>
                    <b>Programming/Scripting Languages/Libraries: </b>HTML, CSS, React, Java, Python, TKinter, C, C#, JavaScript, SQL, LaTeX, SenseTalk
                </Typography>
                <Typography variant="body2" sx={{my: '1%'}}>
                    <b>Software/Frameworks:</b> Android Studio, Unity, Figma, Git, GitHub, PopSQL, Firebase, Node.js, MagicaVoxel, Aseprite, Microsoft Suite (Excel, Access, etc.)
                </Typography>
                <Typography variant="body2" sx={{my: '1%'}}>
                    <b>Languages:</b> English, Malay, Mandarin
                </Typography>
        </Box>
    );
}

export default Skills;