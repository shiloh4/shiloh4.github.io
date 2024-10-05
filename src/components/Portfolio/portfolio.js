import React, { useRef, useEffect } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
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
import currentCrisis from '../../assets/currentCrisisDemo.mp4';
import Fan from '../../assets/Fan.gif';
import Logo from '../../assets/GameIcon.png';

function PortfolioUsage() {
    const videoRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
      
        useEffect(() => {
          if (videoRef.current) {
            videoRef.current.play().catch(error => console.error('Error playing the video:', error));
          }
        }, [ quantum ]); // Re-run the effect if the source changes


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
                    elevation: 0,
                    '&:before': { // Removes the default expansion panel separator
                        display: 'none',
                    },
                    overflow: 'auto',
                    fontFamily: 'roboto', 
                    width: isMobile ? '80%' : '55%'
                }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="quantum-content" id="quantum-header" sx={{
                        fontSize: 16, 
                        // fontWeight: 700,
                        backgroundColor: theme.components.MuiAccordionSummary.styleOverrides.root.backgroundColor,
                        borderRadius: '8px'
                    }}>
                        Connect-RX (HackGT11)
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
                                        color: theme.palette.primary.main,
                                        textDecoration: 'none',
                                        fontWeight: 'bold'}}>
                                        Mobile App & Web App
                                    </Typography>
                                    <Typography variant="body2" sx={{ my: 2 }}><b>Made in React Native and React, tunneled by ngrok from Flask API and SQLite</b></Typography>
                                    <Typography variant="body2" sx={{ my: 2 }}><b>Repo link: </b><Link href="https://github.com/shiloh4/medical_adherence" underline="hover" target="_blank" rel="noopener" color="inherit">https://github.com/shiloh4/medical_adherence</Link></Typography>
                                    <Typography variant="body2" sx={{ my: 2 }}><b>Full Demo link: </b><Link href="https://www.youtube.com/watch?v=OUshT5QRBj4&ab_channel=JunKitLim" underline="hover" target="_blank" rel="noopener" color="inherit">https://www.youtube.com/watch?v=OUshT5QRBj4&ab_channel=JunKitLim</Link></Typography>
                                    <Typography variant="body2" sx={{ my: 2 }}>Connect-RX is a comprehensive solution designed to address the problem of medical non-adherence, helping patients track their medication schedules and enabling doctors to monitor adherence more effectively. The system consists of three main components: a React Native mobile app for patients, a web app for doctors and pharmacists, and a Flask API backend, with SQLite as the database. Ngrok was utilized to create a secure connection between the mobile and web applications, facilitating real-time communication during development. Each component was written in a separate repo so the link provided is just for the mobile app I developed. The mobile app allows patients to track their medications throughout the day, while the web app provides doctors with access to patient adherence data, improving treatment monitoring and outcomes.</Typography>
                                    <Typography variant="body2" sx={{ my: 2 }}>As the lead developer for the mobile app, my primary focus was building an easy-to-use interface in React Native that helps patients stay on track with their medications. The app features medication cards detailing dosage, frequency, and reminders, a streak counter that tracks daily adherence and motivates patients to maintain consistency, and a comprehensive log of their medication history. These logs are shared with doctors via the web app, providing them with critical insights into patient adherence. I also handled push notifications to remind patients to take their medication on time and ensure adherence data is accurately reflected in the backend.</Typography>
                                    <Typography variant="body2" sx={{ my: 2 }}>Do visit the demo link above for a comprehensive view of our project.</Typography>
                                </div>               
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
                    overflow: 'hidden',
                    '&:before': { // Removes the default expansion panel separator
                        display: 'none',
                    },
                    overflow: 'auto',
                    fontFamily: 'roboto', 
                    width: isMobile ? '80%' : '55%'
                }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="quantum-content" id="quantum-header" sx={{
                        fontSize: 16, 
                        // fontWeight: 700,
                        backgroundColor: theme.components.MuiAccordionSummary.styleOverrides.root.backgroundColor,
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
                                        color: theme.palette.primary.main,
                                        textDecoration: 'none',
                                        fontWeight: 'bold'}}>
                                        Video Game
                                    </Typography>
                                        <Typography variant="body2" sx={{ my: 2 }}><b>Made with Unity in C#. Assets produced with Aseprite.</b></Typography>
                                        <Typography variant="body2" sx={{ my: 2 }}><b>Repo link: </b><Link href="https://github.com/Chase-rgb/Quantum" underline="hover" target="_blank" rel="noopener" color="inherit">https://github.com/Chase-rgb/Quantum </Link></Typography>
                                        <Typography variant="body2" sx={{ my: 2 }}>Quantum is the first video game I developed in a team environment. This platformer game emphasizes collaboration, requiring players to solve puzzles together. A standout feature is the Quantum Locking mechanic, enabling one player to transfer momentum to another, enhancing their jumping or dashing abilities.</Typography>
                                        <Typography variant="body2" sx={{ my: 2 }}>My primary role focused on UI/UX design, aiming to merge the game's art direction with a user-friendly interface. I was responsible for designing and producing the game's sprites, menus and all associated assets, ensuring a cohesive and intuitive user experience. Additionally, I collaborated closely with the development team to implement these designs, utilizing tools such as <b>Aseprite</b> and <b>Unity</b>. We also conducted user testing sessions to gather feedback and iterated on the designs to improve on them.</Typography>
                                    </div>
                                    
                                </Box>
                                {!isMobile && (<Box sx={{
                                    width: '100%',
                                    height: '100%',
                                    mt: 1,
                                    pl: 2
                                }}>            
                                    <video width="100%" height="100%" controls autoPlay muted loop ref={ videoRef }>
                                        <source src= { quantum } type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </Box>)}
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
                    width: isMobile ? '80%' : '55%'
                }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="quantum-content" id="quantum-header" sx={{
                        fontSize: 16, 
                        // fontWeight: 700,
                        backgroundColor: theme.components.MuiAccordionSummary.styleOverrides.root.backgroundColor,
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
                                        color: theme.palette.primary.main,
                                        textDecoration: 'none',
                                        fontWeight: 'bold'}}>
                                        Mobile Application
                                    </Typography>
                                    <Typography variant="body2" sx={{ my: 2 }}><b>Made in Android Studio with Kotlin and Java.</b></Typography>
                                    <Typography variant="body2" sx={{ my: 2 }}><b>Repo link: </b><Link href="https://github.com/pammikoundi/spotify_wrapped_app" underline="hover" target="_blank" rel="noopener" color="inherit">https://github.com/pammikoundi/spotify_wrapped_app</Link></Typography>
                                    <Typography variant="body2" sx={{ my: 2 }}><b>Full Demo link: </b><Link href="https://www.youtube.com/watch?v=nicR47nDl9o" underline="hover" target="_blank" rel="noopener" color="inherit">https://www.youtube.com/watch?v=nicR47nDl9o</Link></Typography>
                                    <Typography variant="body2" sx={{ my: 2 }}>Inspired by Spotify's annual Wrapped feature, this project involved a team of seven members working together to build an app that provides insights into users' Spotify listening habits. The app was developed using the Android Studio framework using the <b>MVVM pattern</b> of software architecture, integrating <b>Spotify's API</b> and <b>Firebase</b> to store and access user data seamlessly.</Typography>
                                    <Typography variant="body2" sx={{ my: 2 }}>My primary contribution consisted of conducting usability testing and iterating on the design to ensure a user-friendly and visually appealing app. As a team, we began with performing <b>requirements engineering</b>, where we gathered and analyzed user needs to define the project's scope and objectives. I then focused on designing the UI/UX of the app, leveraging <b>LottieFiles</b> to implement animations and visually engaging elements. Utilizing <b>Jetpack Compose</b>, we were able to accelerate the development process by quickly creating responsive and modern user interfaces.</Typography>
                                </div>               
                            </Box>
                            {!isMobile && (<Box sx={{
                                width: '30%',
                                height: 'auto',
                                mt: 1,
                                pl: 2
                            }}>
                                <video width="100%" height="100%" controls autoPlay muted loop ref={ videoRef }>
                                    <source src= { spotify } type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Box>
                            )}
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
                    width: isMobile ? '80%' : '55%'
                }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="quantum-content" id="quantum-header" sx={{
                        fontSize: 16, 
                        // fontWeight: 700,
                        backgroundColor: theme.components.MuiAccordionSummary.styleOverrides.root.backgroundColor,
                        borderRadius: '8px'
                    }}>
                        Current Crisis (Vertically Intergrated Project)
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
                                        color: theme.palette.primary.main,
                                        textDecoration: 'none',
                                        fontWeight: 'bold'}}>
                                        Video Game
                                    </Typography>
                                    <Typography variant="body2" sx={{ my: 2 }}><b>Made in Unity with C#. Asset rendering done in MagicaVoxel</b></Typography>
                                    <Typography variant="body2" sx={{ my: 2 }}><b>Repo link: </b><Link href="https://github.gatech.edu/Gaming-for-Electric-Power-Grids/vip_resilience_games" underline="hover" target="_blank" rel="noopener" color="inherit">https://github.gatech.edu/Gaming-for-Electric-Power-Grids/vip_resilience_games</Link></Typography>
                                    <Typography variant="body2" sx={{ my: 2 }}>The development of this video game is part of a larger research initiative aimed at crowdsourcing resilience solutions for electric power grids. The game simulates real-life challenges in designing and building power grids for modern cities. Players must construct resilient power grids, balancing three main factors: <b>cost</b>, <b>reliability</b>, and <b>safety</b>. The overarching goal is to gather data on the importance users place on these factors, extrapolate the data to balance opportunity costs, and use it to train machine learning models to aid in power grid design.</Typography>
                                    <Typography variant="body2" sx={{ my: 2 }}>As a member of the Graphics subteam, my primary contribution has been producing game assets and designing the UI. This includes creating and implementing intuitive menus and interface elements. We collaborate closely with the Game Design and Implementation subteam to provide an intuitive depiction of game mechanics. One of my key contributions was find and draft a solution to depict tiles connected by both overhead lines and underground cables, ensuring users would be able to intuitively distinguish between the two types of connections while ensuring clarity within the game's interface. This involved utilizing tools like <b>Figma</b> and <b>MagicaVoxel</b> to model tiles and assets, while also participating in iterative design processes to refine the game's UI design.</Typography>
                                </div>               
                            </Box>
                            {!isMobile && (<Box sx={{
                                width: '100%',
                                height: '100%',
                                alignSelf: 'top',
                                mt: 1,
                                pl: 2
                            }}>
                                    <video width="100%" height="100%" controls autoPlay muted loop ref={ videoRef }>
                                        <source src= { currentCrisis } type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                            </Box>
                            )}
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
    );
}

export default PortfolioUsage;