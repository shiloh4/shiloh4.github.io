import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { lightTheme, darkTheme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={ darkTheme }>
        <CssBaseline />
        <Router>
            <App />
        </Router>
    </ThemeProvider>
);
