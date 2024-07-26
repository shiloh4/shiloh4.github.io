import React from 'react';
import { Box, Typography } from '@mui/material';

function Skills() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mx: '10%',
            my: '8%',
            }}>
                <Typography sx={{my: '1%'}}>
                    <b>Programming/Scripting Languages/Libraries: </b>HTML, CSS, React, Java, Python, TKinter, C, C#, JavaScript, SQL, LaTeX, SenseTalk
                </Typography>
                <Typography sx={{my: '1%'}}>
                    <b>Software/Frameworks:</b> Android Studio, Unity, Git, GitHub, PopSQL, Firebase, Node.js, MagicaVoxel, Aseprite, Microsoft Suite (Excel, Access, etc.)
                </Typography>
                <Typography sx={{my: '1%'}}>
                    <b>Languages:</b> English, Malay, Mandarin
                </Typography>
        </Box>
    );
}

export default Skills;