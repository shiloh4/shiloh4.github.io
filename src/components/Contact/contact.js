import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';
import { useTheme, useMediaQuery } from '@mui/material';

function Contact() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexGrow: 1,
            width: isMobile ? '80%' : '55%',
            margin: 'auto',
            height: 'calc(100vh - 75px)',
            }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={8}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LinkedInIcon sx={{ color: theme.components.MuiIcon.styleOverrides.root.primary, fontSize: 30, marginRight: 1 }} />
                        <Typography variant="body2" sx={{my: 2}}>
                            <Link href="https://www.linkedin.com/in/ethan-loo-73a1b0236/" underline="hover" target="_blank" rel="noopener" color="inherit" sx={{ textDecoration: 'none' }}>
                                linkedin.com/in/ethan-loo-73a1b0236/
                            </Link>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <GitHubIcon sx={{ color: theme.components.MuiIcon.styleOverrides.root.primary, fontSize: 30, marginRight: 1 }} />
                        <Typography variant="body2" sx={{my: 2}}>
                        <Link href="https://github.com/shiloh4" underline="hover" target="_blank" rel="noopener" color="inherit" sx={{ textDecoration: 'none' }}>
                            github.com/shiloh4
                        </Link>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <EmailRoundedIcon sx={{ color: theme.components.MuiIcon.styleOverrides.root.primary, fontSize: 30, marginRight: 1 }} />
                        <Typography variant="body2" sx={{my: 2}}>
                        <Link href="mailto:ethanlooyt@gmail.com" underline="hover" target="_blank" rel="noopener" color="inherit" sx={{ textDecoration: 'none' }}>
                            ethanlooyt@gmail.com
                        </Link>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocalPhoneRoundedIcon sx={{ color: theme.components.MuiIcon.styleOverrides.root.primary, fontSize: 30, marginRight: 1 }} />
                        <Typography variant="body2" sx={{ textDecoration: 'none', my: 2 }}>
                            (470) 301-5218
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Contact;