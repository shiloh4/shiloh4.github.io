import React from 'react';
import { Box, Typography } from '@mui/material';

function Skills() {
    return (
        <Box sx={{
            flexDirection: 'column',
            mx: 20,
            my: 5,
            width: '100%'}}>
                <Typography sx={{my: 2}}>
                    <b>Programming/Scripting Languages: </b>HTML, CSS, React, SQL, Python, Java, JavaScript, Kotlin, C, C#
                </Typography>
                <Typography sx={{my: 2}}>
                    <b>Frameworks:</b> Android Studio, Microsoft Suite (Excel, Access, etc.), Unity, Git, GitHub, PopSQL
                </Typography>
                <Typography sx={{my: 2}}>
                    <b>Languages:</b> English, Malay, Mandarin
                </Typography>
        </Box>
    );
}

export default Skills;