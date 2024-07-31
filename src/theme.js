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
      paper: '#F5F5F5',
    },
    text: {
      primary: '#000000',
    },
    link: {
      primary: '#003057',
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
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: '#ACACAC'
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1C1C1C', // Custom background color for Paper
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          primary: 'black',
        }
      }
    }
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
      paper: '#1C1C1C',
    },
    text: {
      primary: '#E0E0E0', // Light Gray
      secondary: '#FFFFFF', // White
    },
    link: {
      primary: '#61dafb',
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
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: '#707070'
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: '#1C1C1C',
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1C1C1C', // Custom background color for Paper
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          primary: 'white',
        }
      }
    },
  },
});

export { lightTheme, darkTheme };
