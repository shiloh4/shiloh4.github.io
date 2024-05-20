import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Banner from '../components/Home/homebanner';
import Body from '../components/Home/homebody';
import Skills from '../components/Home/homeskills';

function ButtonUsage() {
  return <Button variant="contained">Hello world</Button>;
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