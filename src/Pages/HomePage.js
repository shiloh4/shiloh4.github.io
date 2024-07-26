import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Banner from '../components/Home/homebanner';
import Body from '../components/Home/homebody';
import Skills from '../components/Home/homeskills';

const colors = [
  "#B3A369, #FF5733", "#33FF57", "#3357FF", "#FF33A5", "#A533FF", "#FFDB33", "#33FFF6"
];

function ButtonUsage() {
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
          transition: 'transform 0.3s' }}>
        Hello world
      </Button>
    </Box>
  );
}

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Body />
      <Skills />
      <Box sx={{display: 'flex', flexDirection: 'row', m: 10}}>
        <Box sx={{flexGrow: 1}}></Box>
        <ButtonUsage/>
        <Box sx={{flexGrow: 1}}></Box>
      </Box>
    </div>
  );
}