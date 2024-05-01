import * as React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Button from '@mui/material/Button';
import Banner from './components/homebanner';

function ButtonUsage() {
  return <Button variant="contained">Hello world</Button>;
}

function NavbarTop() {
  return <Navbar></Navbar>
}

function HomeBanner() {
  return <Banner></Banner>
}

export default function App() {
  return (
    <div>
      <HomeBanner />
      <ButtonUsage />
    </div>
  );
}
