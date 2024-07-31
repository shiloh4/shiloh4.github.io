import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ThemeContextProvider } from './ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeContextProvider>
        <Router>
            <App />
        </Router>
    </ThemeContextProvider>
);
