import * as React from 'react';
import Lottie from 'react-lottie';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Banner from '../components/Home/homebanner';
import Body from '../components/Home/homebody';
import Skills from '../components/Home/homeskills';
import Fireworks from '../assets/Animation - 1718175997048.json';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: Fireworks,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A5", "#A533FF", "#FFDB33", "#33FFF6"
];

function ButtonUsage() {
  const [color, setColor] = React.useState("primary");
  // const [showFireworks, setShowFireworks] = React.useState(false);
  const [buttonSize, setButtonSize] = React.useState(1);

  const handleClick = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
    // setShowFireworks(true);
    setButtonSize(prevSize => prevSize + 0.1);

    // Hide fireworks after a few seconds
    // setTimeout(() => {
    //   setShowFireworks(false);
    // }, 3000);
  };

  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      <Button variant="contained" onClick={ handleClick } style={{ backgroundColor: color, '&:hover': { backgroundColor: color }, transform: `scale(${buttonSize})`, 
          transition: 'transform 0.3s' }}>
        Hello world
      </Button>
      {/* {showFireworks && (
        <Box sx={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, width: '100%', height: '50%', pointerEvents: 'none' }}>
          <Lottie options={defaultOptions} height={400} width={400} />
        </Box>
      )} */}
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