import React, { useRef, useEffect } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
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

const projects = [
    {
        id: 'technique-newspaper',
        title: 'Technique',
        subtitle: 'Frontend Developer',
        tech: 'React, Vite, Tailwind CSS, QuillJS, react-dropzone',
        demo: {
            label: 'Website link',
            href: 'https://nique.net',
        },
        paragraphs: [
        'Built and deployed a new website for Georgia Tech\'s student-led newspaper, leading frontend development with a focus on a modern design, strong mobile UX, and cross-browser consistency.',
        'Created a WYSIWYG editorial dashboard using QuillJS for rich-text editing and react-dropzone for drag-and-drop media uploads with file validation and real-time upload feedback.',
        'Worked in 1-week Agile sprints on a 7-person team, managing Git branches, leading code reviews, and enforcing ESLint standards for code quality.',
        ],
    },
    {
        id: 'gamefest',
        title: 'GTEsports: Gamefest (gamefest.gatechesports.com)',
        subtitle: 'Fullstack Developer',
        tech: 'Vite, Tailwind CSS, MongoDB, Netlify, Render, Cloudflare',
        paragraphs: [
        'Led frontend development for an esports tournament platform with 246+ competitors across Atlanta, using Vite for fast builds and Tailwind CSS for responsive UI, with frontend deployed on Netlify and backend on Render.',
        'Built a weighted raffle system that dynamically selects and displays first through third place winners on the leaderboard.',
        'Integrated Cloudflare analytics and caching, serving 2.13k unique visitors and 95.3k total requests over 30 days with a 71.43% cache hit rate, while maintaining a clean Git workflow with ESLint and Prettier in 1-week Agile sprints.',
        ],
    },
    {
        id: 'current-crisis-fullstack',
        title: 'Current Crisis (currentcrisis.net)',
        subtitle: 'Fullstack/Systems Developer',
        tech: 'Azure, Gurobi, Vite, ExpressJS, MongoDB, Clerk',
        paragraphs: [
        'Architected a Gurobi optimization model hosted on Azure to simulate and optimize real-life power grid flow, including cache fallback and lookahead mechanisms to preserve real-time continuity during network instability.',
        'Engineered a fullstack platform with Vite and ExpressJS to host a playable build and documentation portal for developers, using MongoDB for data storage and Clerk for secure authentication.',
        ],
    },
    {
        id: 'agent-arena',
        title: 'AI ATL 2024: AgentArena',
        subtitle: 'Frontend Developer',
        tech: 'React, Flask, Plotly.js, Fetch API',
        paragraphs: [
        'Developed a web-based LLM simulation platform that models multi-agent interactions such as the Prisoner\'s Dilemma, with real-time state updates powered by Fetch API and React Hooks.',
        'Built interactive dashboards in Plotly.js to visualize metrics like niceness, forgiveness, retaliation, troublemaking, and emulation across multiple simulation rounds.',
        'Analyzed behavioral patterns of models such as Claude, GPT-4, and Gemini against strategies like random and tit-for-tat, summarizing findings in a project report.',
        ],
    },
    {
        id: 'current-crisis',
        title: 'Current Crisis (Vertically Intergrated Project)',
        subtitle: 'Video Game',
            tech: 'Made in Unity with C#. Asset rendering done in MagicaVoxel',
            demo: {
            label: 'Web link',
            href: 'https://currentcrisis.net',
            },
            paragraphs: [
            'The development of this video game is part of a larger research initiative aimed at crowdsourcing resilience solutions for electric power grids. The game simulates real-life challenges in designing and building power grids for modern cities. Players must construct resilient power grids, balancing three main factors: <b>cost</b>, <b>reliability</b>, and <b>safety</b>. The overarching goal is to gather data on the importance users place on these factors, extrapolate the data to balance opportunity costs, and use it to train machine learning models to aid in power grid design.',
            'Throughout my time with the project, I played several key roles. I started off as part of the Graphics subteam, where we were primarily responsible for making design and UI decisions for the game, which involved close collaboration with the other subteams to ensure our designs met their needs and requirements. I later transitions to a more development-focused role, aiding in the maintenance and expansion of the game\'s Azure server, that would host optimization software by Gurobi to compute and simulate power grid flows based on player designs. My most significant contribution to the project and the team was my development of the team\'s website, which allowed us to publicize our work and findings to a broader audience. This website was built using React and hosted on Netlify, showcasing our project\'s objectives, progress, and results.',
            ],
            video: {
            src: currentCrisis,
            boxSx: { width: '100%', height: '100%', alignSelf: 'top', mt: 1, pl: 2 },
            },
        },
        {
            id: 'connect-rx',
            title: 'Connect-RX (HackGT11)',
            subtitle: 'Mobile App & Web App',
            tech: 'Made in React Native and React, tunneled by ngrok from Flask API and SQLite',
            repo: {
            label: 'Repo link',
            href: 'https://github.com/shiloh4/medical_adherence',
            },
            demo: {
            label: 'Full Demo link',
            href: 'https://www.youtube.com/watch?v=OUshT5QRBj4&ab_channel=JunKitLim',
            },
            paragraphs: [
            'Connect-RX is a comprehensive solution designed to address the problem of medical non-adherence, helping patients track their medication schedules and enabling doctors to monitor adherence more effectively. The system consists of three main components: a React Native mobile app for patients, a web app for doctors and pharmacists, and a Flask API backend, with SQLite as the database. Ngrok was utilized to create a secure connection between the mobile and web applications, facilitating real-time communication during development. Each component was written in a separate repo so the link provided is just for the mobile app I developed. The mobile app allows patients to track their medications throughout the day, while the web app provides doctors with access to patient adherence data, improving treatment monitoring and outcomes.',
            'As the lead developer for the mobile app, my primary focus was building an easy-to-use interface in React Native that helps patients stay on track with their medications. The app features medication cards detailing dosage, frequency, and reminders, a streak counter that tracks daily adherence and motivates patients to maintain consistency, and a comprehensive log of their medication history. These logs are shared with doctors via the web app, providing them with critical insights into patient adherence. I also handled push notifications to remind patients to take their medication on time and ensure adherence data is accurately reflected in the backend.',
            'Do visit the demo link above for a comprehensive view of our project.',
            ],
        },
        {
            id: 'quantum',
            title: 'Quantum',
            subtitle: 'Video Game',
            tech: 'Made with Unity in C#. Assets produced with Aseprite.',
            repo: {
            label: 'Repo link',
            href: 'https://github.com/Chase-rgb/Quantum',
            },
            paragraphs: [
            'Quantum is the first video game I developed in a team environment. This platformer game emphasizes collaboration, requiring players to solve puzzles together. A standout feature is the Quantum Locking mechanic, enabling one player to transfer momentum to another, enhancing their jumping or dashing abilities.',
            'My primary role focused on UI/UX design, aiming to merge the game\'s art direction with a user-friendly interface. I was responsible for designing and producing the game\'s sprites, menus and all associated assets, ensuring a cohesive and intuitive user experience. Additionally, I collaborated closely with the development team to implement these designs, utilizing tools such as <b>Aseprite</b> and <b>Unity</b>. We also conducted user testing sessions to gather feedback and iterated on the designs to improve on them.',
            ],
            video: {
            src: quantum,
            boxSx: { width: '100%', height: '100%', mt: 1, pl: 2 },
            },
            extraImages: [
            { src: BouncyThing, alt: 'BouncyThing', boxSx: { width: '10%', height: '30%', mx: 4, mt: 2 } },
            { src: Fan, alt: 'Fan', boxSx: { width: '10%', height: '30%', mx: 4, mt: 2 } },
            { src: Logo, alt: 'Logo', boxSx: { width: '10%', height: '30%', mx: 4, mt: 0 } },
            ],
        },
        {
            id: 'spotify-wrapped',
            title: 'Spotify Wrapped App',
            subtitle: 'Mobile Application',
            tech: 'Made in Android Studio with Kotlin and Java.',
            repo: {
            label: 'Repo link',
            href: 'https://github.com/pammikoundi/spotify_wrapped_app',
            },
            demo: {
            label: 'Full Demo link',
            href: 'https://www.youtube.com/watch?v=nicR47nDl9o',
            },
            paragraphs: [
            'Inspired by Spotify\'s annual Wrapped feature, this project involved a team of seven members working together to build an app that provides insights into users\' Spotify listening habits. The app was developed using the Android Studio framework using the <b>MVVM pattern</b> of software architecture, integrating <b>Spotify\'s API</b> and <b>Firebase</b> to store and access user data seamlessly.',
            'My primary contribution consisted of conducting usability testing and iterating on the design to ensure a user-friendly and visually appealing app. As a team, we began with performing <b>requirements engineering</b>, where we gathered and analyzed user needs to define the project\'s scope and objectives. I then focused on designing the UI/UX of the app, leveraging <b>LottieFiles</b> to implement animations and visually engaging elements. Utilizing <b>Jetpack Compose</b>, we were able to accelerate the development process by quickly creating responsive and modern user interfaces.',
            ],
            video: {
            src: spotify,
            boxSx: { width: '30%', height: 'auto', mt: 1, pl: 2 },
        },
    },
    {
        id: 'others',
        title: 'Other Projects',
        paragraphs: [
            'I have numerous other projects that I\'m currently working, with the aim of familiarizing myself with new technologies, frameworks, and techniques to better myself at web development. Some of them include a site that aims to demonstrate the mechanisms of Q-Learning algorithms, with visual simulations of agents learning to nagivate complex mazes. This project means a lot to me as it can be used as a teaching tool for many students hoping to learn more about reinforcement learning. I\'m working with a PhD student to bring this project to life, and our goal would be to submit this project + a paper to AAAI\'s education track some time in 2026.',
            'I am also working with professors from Georgia Tech to develop sites to display their research work, and having the privilege of working with them has given me the opportunity to connect with experts in their various fields. I can confidently say that everyone I\'ve worked with, professor, mentor, or peer, can all attest to my strong work ethic, dedication, and passion for web development. I am always eager to take on new challenges and contribute my skills to meaningful projects.',
        ],
    }
];

function PortfolioUsage() {
    const videoRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        if (videoRef.current) {
        videoRef.current.play().catch(error => console.error('Error playing the video:', error));
        }
    }, [quantum]); // Re-run the effect if the source changes

    const accordionSx = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexGrow: 1,
        mb: 1,
        elevation: 0,
        '&:before': {
        display: 'none',
        },
        overflow: 'auto',
        fontFamily: 'roboto',
        width: isMobile ? '80%' : '55%',
    };

    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            pt: 12,
            pb: 2,
        }}
        >
        {projects.map((project) => (
            <Accordion key={project.id} elevation={0} sx={accordionSx}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${project.id}-content`}
                id={`${project.id}-header`}
                sx={{
                fontSize: 16,
                backgroundColor: theme.components.MuiAccordionSummary.styleOverrides.root.backgroundColor,
                borderRadius: '8px',
                }}
            >
                {project.title}
            </AccordionSummary>
            <AccordionDetails>
                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
                >
                <Box
                    sx={{
                    width: '100%',
                    height: '100%',
                    mt: 1,
                    }}
                >
                    <div width="100%" height="100%">
                    <Typography
                        variant="h5"
                        sx={{
                        flexGrow: 1,
                        color: theme.palette.primary.main,
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        }}
                    >
                        {project.subtitle}
                    </Typography>
                    {project.tech && (
                        <Typography variant="body2" sx={{ my: 2 }}>
                        <b>{project.tech}</b>
                        </Typography>
                    )}
                    {project.repo && (
                        <Typography variant="body2" sx={{ my: 2 }}>
                        <b>{project.repo.label}: </b>
                        <Link href={project.repo.href} underline="hover" target="_blank" rel="noopener" color="inherit">
                            {project.repo.href}
                        </Link>
                        </Typography>
                    )}
                    {project.demo && (
                        <Typography variant="body2" sx={{ my: 2 }}>
                        <b>{project.demo.label}: </b>
                        <Link href={project.demo.href} underline="hover" target="_blank" rel="noopener" color="inherit">
                            {project.demo.href}
                        </Link>
                        </Typography>
                    )}
                    {project.paragraphs.map((text, index) => (
                        <Typography
                        key={`${project.id}-p-${index}`}
                        variant="body2"
                        sx={{ my: 2 }}
                        dangerouslySetInnerHTML={{ __html: text }}
                        />
                    ))}
                    </div>
                </Box>
                {!isMobile && project.video && (
                    <Box sx={project.video.boxSx}>
                    <video width="100%" height="100%" controls autoPlay muted loop ref={videoRef}>
                        <source src={project.video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </Box>
                )}
                </Box>
                {project.extraImages && (
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    }}
                >
                    {project.extraImages.map((image) => (
                    <Box key={`${project.id}-${image.alt}`} sx={image.boxSx}>
                        <img alt={image.alt} width="100%" height="100%" src={image.src} />
                    </Box>
                    ))}
                </Box>
                )}
            </AccordionDetails>
            </Accordion>
        ))}
        </Box>
    );
}

export default PortfolioUsage;
