import React, { useRef, useEffect } from 'react';
import { Typography , Tooltip, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import quantum from '../../assets/quantumdemo.mp4';
import spotify from '../../assets/spotifyWrappedDemo.mp4';
import BouncyThing from '../../assets/BouncyThing.gif';
import Fan from '../../assets/Fan.gif';
import Logo from '../../assets/GameIcon.png';

function PortfolioUsage() {
    const videoRef = useRef(null);
      
        useEffect(() => {
          if (videoRef.current) {
            videoRef.current.play().catch(error => console.error('Error playing the video:', error));
          }
        }, { quantum }); // Re-run the effect if the source changes


    return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
                pt: 12,
                pb: 2,
            }}>
                <Accordion elevation={0} sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flexGrow: 1,
                    mb: 1,
                    overflow: 'hidden',
                    '&:before': { // Removes the default expansion panel separator
                        display: 'none',
                    },
                    overflow: 'auto',
                    fontFamily: 'roboto', 
                    width: '80%'
                }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="quantum-content" id="quantum-header" sx={{
                        fontSize: 20, 
                        fontWeight: 700,
                        backgroundColor: '#ACACAC',
                        borderRadius: '8px'
                    }}>
                        Quantum
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}>
                                <Box sx={{
                                    width: '100%',
                                    height: '100%',
                                    mt: 1,
                                }}>
                                    <div width="100%" height="100%">
                                    <Typography variant="h5" sx={{
                                        flexGrow: 1,
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        fontWeight: 'bold'}}>
                                        Video Game
                                    </Typography>
                                        <p><b>Made with Unity in C#. Assets produced with Aseprite.</b></p>
                                        <p><b>Repo link: </b><Link href="https://github.com/Chase-rgb/Quantum" underline="hover" target="_blank" rel="noopener" color="inherit">https://github.com/Chase-rgb/Quantum </Link></p>
                                        <p>This was the first video game I helped developed in a team environment. Quantum is a platformer game where you and a friend have to solve puzzles with collaboration. The novelty of this game is the Quantum Locking mechanic that allows one player to transfer some momentum to the other which allows them to jump higher or dash further than originally possible.</p>
                                        <p>My main focus was on the UI/UX design, particularly with the goal of combining the game's art direction together with a user interface that was simple and intuitive to use. I helped design and produce the menus and all its assets found within the game in addition with other game assets.</p>
                                    </div>
                                    
                                </Box>
                                <Box sx={{
                                    width: '100%',
                                    height: '100%',
                                    mt: 1,
                                    pl: 2
                                }}>
                                    <video width="100%" height="100%" controls muted loop ref={ videoRef }>
                                        <source src= { quantum } type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}>
                                <Box sx={{width: '10%', height: '30%', mx: 4, mt: 2}}><img alt="BouncyThing" width="100%" height="100%" src={ BouncyThing }></img></Box>
                                <Box sx={{width: '10%', height: '30%', mx: 4, mt: 2}}><img alt="Fan" width="100%" height="100%" src={ Fan }></img></Box>
                                <Box sx={{width: '10%', height: '30%', mx: 4, mt: 0}}><img alt="Logo" width="100%" height="100%" src={ Logo }></img></Box>
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion elevation={0} sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flexGrow: 1,
                    mb: 1,
                    elevation: 0,
                    '&:before': { // Removes the default expansion panel separator
                        display: 'none',
                    },
                    overflow: 'auto',
                    fontFamily: 'roboto', 
                    width: '80%'
                }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="quantum-content" id="quantum-header" sx={{
                        fontSize: 20, 
                        fontWeight: 700,
                        backgroundColor: '#ACACAC',
                        borderRadius: '8px'
                    }}>
                        Spotify Wrapped App
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                            <Box sx={{
                                width: '100%',
                                height: '100%',
                                mt: 1,
                            }}>
                                <div width="100%" height="100%">
                                    <Typography variant="h5" sx={{
                                        flexGrow: 1,
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        fontWeight: 'bold'}}>
                                        Mobile Application
                                    </Typography>
                                    <p><b>Made in Android Studio with Kotlin and Java.</b></p>
                                    <p><b>Repo link: </b><Link href="https://github.com/pammikoundi/spotify_wrapped_app" underline="hover" target="_blank" rel="noopener" color="inherit">https://github.com/pammikoundi/spotify_wrapped_app</Link></p>
                                    <p><b>Full Demo link: </b><Link href="https://www.youtube.com/watch?v=nicR47nDl9o" underline="hover" target="_blank" rel="noopener" color="inherit">https://www.youtube.com/watch?v=nicR47nDl9o</Link></p>
                                    <p>Heavily inspired by Spotify's annual Wrapped feature, this project consisted of 7 group members working together to build an app that would allow you to view information about your listening habits on Spotify. The project was built on the Android Studio framework. We learnt how to integrate <b>Spotify's API</b> and <b>Firebase</b> into our application to allow us to store and access user data.</p>
                                    <p>My primary contribution was first performing requirements engineering and designing the UI/UX of the app with the help of <b>LottieFiles</b>. <b>Jetpack Compose</b> was also a toolkit we used to help accelerate the development process.</p>
                                </div>               
                            </Box>
                            <Box sx={{
                                width: '30%',
                                height: 'auto',
                                mt: 1,
                                pl: 2
                            }}>
                                <video width="100%" height="100%" controls muted loop ref={ videoRef }>
                                    <source src= { spotify } type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Box>
                        </Box>    
                    </AccordionDetails>
                </Accordion>
                <Accordion elevation={0} sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flexGrow: 1,
                    mb: 1,
                    elevation: 0,
                    '&:before': { // Removes the default expansion panel separator
                        display: 'none',
                    },
                    overflow: 'auto',
                    fontFamily: 'roboto', 
                    width: '80%'
                }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="quantum-content" id="quantum-header" sx={{
                        fontSize: 20, 
                        fontWeight: 700,
                        backgroundColor: '#ACACAC',
                        borderRadius: '8px'
                    }}>
                        Current Crisis
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                            <Box sx={{
                                width: '100%',
                                height: '100%',
                                mt: 1,
                            }}>
                                <div width="100%" height="100%">
                                    <Typography variant="h5" sx={{
                                        flexGrow: 1,
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        fontWeight: 'bold'}}>
                                        Video Game
                                    </Typography>
                                    <p><b>Made in Unity with C#. Asset rendering done in MagicaVoxel</b></p>
                                    <p><b>Repo link: </b><Link href="https://github.gatech.edu/Gaming-for-Electric-Power-Grids/vip_resilience_games" underline="hover" target="_blank" rel="noopener" color="inherit">https://github.gatech.edu/Gaming-for-Electric-Power-Grids/vip_resilience_games</Link></p>
                                    <p>The development of this video is part of a larger research effort to crowdsource resiliency for electric power grids. The game simulates real-life problems encountered with designing and building power grids to power modern cities. Players attempt to construct resilient power grids with 3 main factors in mind: cost, reliability, and safety. The high-level goal of the game is to compile data on the weight people place on these 3 values and how they would implement electric power grids.</p>
                                    <p>My contribution thus far has been producing game assets as part of the Graphics subteam to design and implement the UI for the game. This specifically refers to the menus and UI interface. As part of the Graphics subteam, we often collaborate with the Game Design subteam and Implementation subteam to determine how certain mechanics of the game are depicted. I was put in charge of finding a solution to depicting 2 tiles connected by both overhead lines and underground cables.</p>
                                </div>               
                            </Box>
                            <Box sx={{
                                width: '30%',
                                height: 'auto',
                                mt: 1,
                                pl: 2
                            }}>
                                <Tooltip title="There's meant to be a demo video here but the specific version of Unity does not work so I can't launch the game momentarily :(">
                                    <video width="100%" height="100%" controls muted loop ref={ videoRef }>
                                        <source type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </Tooltip>
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
    );
}

export default PortfolioUsage;