import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';

function Contact() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexGrow: 1,
            mx: '20%',
            my: 0,
            p: 0,
            height: 'calc(100vh - 75px)',
            }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={8}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LinkedInIcon sx={{ color: 'black', fontSize: 30, marginRight: 1 }} />
                        <Link href="https://www.linkedin.com/in/ethan-loo-73a1b0236/" underline="hover" target="_blank" rel="noopener" color="inherit" sx={{ fontFamily: 'roboto', fontSize: 16, my: 2 }}>
                            linkedin.com/in/ethan-loo-73a1b0236/
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <GitHubIcon sx={{ color: 'black', fontSize: 30, marginRight: 1 }} />
                        <Link href="https://github.com/shiloh4" underline="hover" target="_blank" rel="noopener" color="inherit" sx={{ fontFamily: 'roboto', fontSize: 16, my: 2 }}>
                            github.com/shiloh4
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <EmailRoundedIcon sx={{ color: 'black', fontSize: 30, marginRight: 1 }} />
                        <Link href="mailto:ethanlooyt@gmail.com" underline="hover" target="_blank" rel="noopener" color="inherit" sx={{ fontFamily: 'roboto', fontSize: 16, my: 2 }}>
                            ethanlooyt@gmail.com
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocalPhoneRoundedIcon sx={{ color: 'black', fontSize: 30, marginRight: 1 }} />
                        <Typography sx={{ my: 2 }}>
                            (470) 301-5218
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Contact;