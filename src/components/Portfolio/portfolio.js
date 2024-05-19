import React, { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import quantum from '../../assets/quantumdemo.mp4';
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
            minHeight: 'calc(100vh-75px)'
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
                                    <h3>Video Game</h3>
                                    <p><b>Made with Unity in C#. Assets produced with Aseprite.</b></p>
                                    <p><b>Repo link: </b><Link href="https://github.com/Chase-rgb/Quantum" underline="hover" target="_blank" rel="noopener" color="inherit">https://github.com/Chase-rgb/Quantum </Link></p>
                                    <p>This was the first video game I helped developed in a team environment. Quantum is a platformer game where you and a friend have to solve puzzles with collaboration. The novelty of this game is the Quantum Locking mechanic that allows one player to transfer some momentum to the other which allows them to jump higher or dash further than originally possible.</p>
                                    <p>My main focus was on the UI/UX design, particularly with the goal of combining the game's art direction together with a user interface that was simple and intuitive to use. I helped design and produce the menus and all its assets found within the game in addition with other game assets.</p>
                                </div>
                                
                            </Box>
                            <Box sx={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '12px',
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
                            <Box sx={{width: '10%', height: '30%', mx: 4, mt: 2}}><img width="100%" height="100%" src={ BouncyThing }></img></Box>
                            <Box sx={{width: '10%', height: '30%', mx: 4, mt: 2}}><img width="100%" height="100%" src={ Fan }></img></Box>
                            <Box sx={{width: '10%', height: '30%', mx: 4, mt: 0}}><img width="100%" height="100%" src={ Logo }></img></Box>
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
                    <h4>Mobile Application</h4>
                    Android Studio
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
                    <h4>Video Game</h4>
                    Unity
                </AccordionDetails>
                
            </Accordion>
        </Box>

    );
}

export default PortfolioUsage;