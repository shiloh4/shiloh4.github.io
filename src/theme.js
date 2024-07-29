import { createTheme } from '@mui/material/styles';

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
      primary: '#000000',
    },
  },
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
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF', // Custom background color for Paper
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#B3A369', // Tech Gold
    },
    secondary: {
      main: '#003057', // Navy Blue
    },
    background: {
      default: '#1C1C1C', // Dark Navy
    },
    text: {
      primary: '#E0E0E0', // Light Gray
      secondary: '#FFFFFF', // White
    },
  },
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
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#191919', // Custom background color for Paper
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: '#1C1C1C',
        }
      }
    },
  },
});

export { lightTheme, darkTheme };
