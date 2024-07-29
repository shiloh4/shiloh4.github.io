import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontFamily: 'Open Sans, sans-serif',
    },
    h2: {
      fontFamily: 'Open Sans, sans-serif',
    },
    // You can customize other variants as needed
  },
});

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#B3A369', // Tech Gold
    },
    secondary: {
      main: '#003057', // Navy Blue
    },
    background: {
      default: '#FFFFFF', // White
    },
    text: {
      primary: '#003057', // Navy Blue
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#003057', // Navy Blue
    },
    secondary: {
      main: '#B3A369', // Tech Gold
    },
    background: {
      default: '#1C1C1C', // Dark Navy
      paper: '#2E2E2E', // Dark Gray
    },
    text: {
      primary: '#E0E0E0', // Light Gray
      secondary: '#FFFFFF', // White
    },
  },
});

export default { lightTheme, darkTheme, theme};
