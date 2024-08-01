import * as React from 'react';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from '@mui/material';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import Banner from '../components/Home/homebanner';
import Body from '../components/Home/homebody';
import Skills from '../components/Home/homeskills';

const colors = [
  "#B3A369, #FF5733", "#33FF57", "#3357FF", "#FF33A5", "#A533FF", "#FFDB33", "#33FFF6"
];

function ButtonUsage() {
  const theme = useTheme();
  const [color, setColor] = React.useState("#B3A369");
  const [buttonSize, setButtonSize] = React.useState(1);

  const handleClick = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
    setButtonSize(prevSize => prevSize + 0.1);
  };

  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      <Button variant="contained" onClick={ handleClick } style={{ backgroundColor: color, '&:hover': { backgroundColor: color }, transform: `scale(${buttonSize})`, 
          transition: 'transform 0.3s', zIndex: theme.zIndex.drawer + 2 }}>
        <code style = {{ fontSize: '14pt' }}>Hello World</code>
      </Button>
    </Box>
  );
}

export default function HomePage({ showSlide }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // console.log('HomePage showSlide:', showSlide)
  return (
    <div>
      <Banner showSlide={ showSlide }/>
      <Body />
      <Skills />
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', my: 15 }}>
        <ButtonUsage/>
      </Box>
      <Typography variant="body1" sx={{color: theme.palette.primary.main,
                                      display: 'flex',
                                      flexDirection: 'column',
                                      my: '4%',
                                      width: isMobile ? '80%' : '55%',
                                      px: 3,
                                      py: 1,
                                      margin: 'auto'
      }}><b>Blog posts</b></Typography>
      <Box sx={{display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
                pb: '75px',
      }}>
        <List sx={{width: isMobile ? '80%' : '55%',
                  borderTop: '1px solid',
                  borderBottom: '1px solid',
                  p: 0,
        }}>
          <ListItem button component={Link} to="/blog">
            <ListItemText primary="Insights from My QA Internship at Keysight Technologies" secondary="How to break your app" primaryTypographyProps={{fontSize: 'body1', fontWeight: 'bold', fontFamily: "Roboto, Open Sans, sans-serif", px: 1}} secondaryTypographyProps={{px: 1, fontSize: 'body2', fontFamily: "Roboto, Open Sans, sans-serif"}}/>
            <ListItemIcon>
              <ArrowOutwardOutlinedIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}